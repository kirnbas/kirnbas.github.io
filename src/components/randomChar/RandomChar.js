import { Component } from 'react';

import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';


class RandomChar extends Component {
    state = {
        char: {},
        loading: true,
        error: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.updateChar();
    }

    onCharLoaded = (char) => {
        this.setState({
            char, 
            loading: false});
    }

    onCharLoading = () => {
        this.setState({ loading: true });
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true});
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        this.onCharLoading();
        this.marvelService
            .getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {
        let { char, loading, error } = this.state;
        const errorMessage = error ? <ErrorMessage></ErrorMessage> : null;
        const spinner = loading ? <Spinner></Spinner> : null;
        const content = !(loading || error) ? <View char={char}></View> : null;

        return (
            <div className="randomchar">
                {errorMessage}
                {spinner}
                {content}
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button onClick={this.updateChar} className="button button__main">
                        <div className="inner">try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
                </div>
            </div>
        )
    }
}

const View = ({char}) => {
    let { name, description, thumbnail, homepage, wiki } = char;

    let shortDesc;
    if (!description) {
        shortDesc = `There is no description`;
    } 
    else {            
        const maxLength = 200;
        shortDesc = description.length > maxLength ? description.slice(0, maxLength - 4) + '...' : description;
    }

    let thumbnailStyle;
    if (thumbnail.includes('image_not_available.jpg')) {
        thumbnailStyle = { objectFit: 'contain' };
    }

    return (
        <div className="randomchar__block">
            <img src={thumbnail} style={thumbnailStyle} alt="Random character" className="randomchar__img"/>
            <div className="randomchar__info">
                <p className="randomchar__name">{name}</p>
                <p className="randomchar__descr">
                    {shortDesc}
                </p>
                <div className="randomchar__btns">
                    <a href={homepage} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RandomChar;