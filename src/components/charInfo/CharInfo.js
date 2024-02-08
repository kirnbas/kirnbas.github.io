import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';

import './charInfo.scss';

const CharInfo = (props) => {
    const [char, setChar] = useState(null);

    const { getCharacter, clearError, process, setProcess } = useMarvelService();

    useEffect(() => {
        updateChar();
    }, [props.charId]);
    
    const updateChar = () => {
        const { charId } = props;
        if (!charId) {
            return;
        }

        clearError();
        getCharacter(charId)
            .then(onCharLoaded)
            .then(() => setProcess('confirmed'));
    }

    const onCharLoaded = (char) => {
        setChar(char);
    }    

    return (
        <div className="char__info">
            {setContent(process, View, char)}
        </div>
    )
}

const View = ({data}) => {
    const { name, description, thumbnail, homepage, wiki, comics } = data;

    comics.splice(10);

    return (
        <>
            <div className="char__basics">
                <img src={thumbnail} alt={name} style={ thumbnail.includes('image_not_available.jpg') ? { objectFit: 'contain' } : null } />
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description ? description : 'There is no description for this character'}
            </div>
            { comics.length > 0 ? (<div className="char__comics">Comics:</div>) : null }
            <ul className="char__comics-list">
                {
                    comics.map((item, i) => {
                        const comicId = item.resourceURI.slice(item.resourceURI.lastIndexOf('/') + 1);
                        return (
                            <li key={i} className="char__comics-item">
                                <Link to={`/comics/${comicId}`}>{item.name}</Link>                                
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
}

CharInfo.propTypes = {
    charId: PropTypes.number
}

export default CharInfo;