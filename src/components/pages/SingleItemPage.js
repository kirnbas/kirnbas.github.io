import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";

import useMarvelService from '../../services/MarvelService';
import AppBanner from '../appBanner/AppBanner';

import './singleItemPage.scss';
import setContent from '../../utils/setContent';

const SingleItemPage = ({mode}) => {
    const {itemId} = useParams();
    const [item, setItem] = useState(null);
    const {getComic, getCharacter, clearError, process, setProcess} = useMarvelService();
    const getItem = mode === "comic" ? getComic : getCharacter;

    useEffect(() => {
        updateItem();
    }, [itemId]);
    
    const updateItem = () => {
        clearError();
        getItem(itemId)
            .then(onItemLoaded)
            .then(() => setProcess('confirmed'));
    }

    const onItemLoaded = (comic) => {
        setItem(comic);
    }

    return (
        <>
            <AppBanner></AppBanner>
            {setContent(process, mode === "comic" ? ComicView : CharView, item )}
        </>
    )
}

const ComicView = ({data}) => {
    const {title, description, pageCount, thumbnail, language, price} = data;    
    const navigate = useNavigate();

    return (
        <div className="single-comic">
            <Helmet>
                <meta
                    name="description"
                    content={`${title} comics book`}
                />
                <title>{title}</title>
            </Helmet>
            <img src={thumbnail} alt={title} className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pageCount}</p>
                <p className="single-comic__descr">Language: {language}</p>
                <div className="single-comic__price">{price}</div>
            </div>
            <Link onClick={() => navigate(-1)} className="single-comic__back">Back to all</Link>
        </div>
    )
}

const CharView = ({data}) => {
    const {name, description, thumbnail} = data;    
    const navigate = useNavigate();

    return (
        <div className="single-comic">
            <Helmet>
                <meta
                    name="description"
                    content={`${name} character`}
                />
                <title>{name}</title>
            </Helmet>
            <img src={thumbnail} alt={name} className="single-comic__charimg"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{name}</h2>
                <p className="single-comic__descr">{description}</p>
            </div>
            <Link onClick={() => navigate(-1)} className="single-comic__back">Back to all</Link>
        </div>
    )
}

export default SingleItemPage;