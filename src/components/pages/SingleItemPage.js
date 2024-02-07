import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";

import useMarvelService from '../../services/MarvelService';
import AppBanner from '../appBanner/AppBanner';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import './singleItemPage.scss';

const SingleItemPage = ({mode}) => {
    console.log(mode);

    const {itemId} = useParams();
    const [item, setItem] = useState(null);
    const {loading, error, getComic, getCharacter, clearError} = useMarvelService();
    const getItem = mode === "comic" ? getComic : getCharacter;

    useEffect(() => {
        updateItem();
    }, [itemId]);
    
    const updateItem = () => {
        clearError();
        getItem(itemId)
            .then(onItemLoaded);
    }

    const onItemLoaded = (comic) => {
        setItem(comic);
    }

    const errorMessage = error ? <ErrorMessage></ErrorMessage> : null;
    const spinner = loading ? <Spinner></Spinner> : null;
    const viewType = mode === "comic" ? <ComicView comic={item}></ComicView> : <CharView char={item}></CharView>;
    const content = !(loading || error) && item ? viewType : null;

    return (
        <>
            <AppBanner></AppBanner>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}

const ComicView = ({comic}) => {
    const {title, description, pageCount, thumbnail, language, price} = comic;    
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

const CharView = ({char}) => {
    const {name, description, thumbnail} = char;    
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