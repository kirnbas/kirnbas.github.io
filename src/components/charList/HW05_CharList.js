import { Component } from 'react';
import MarvelService from '../../services/MarvelService';

import './charList.scss';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

class CharList extends Component {
    state = {
        charList: [],
        loading: true,
        error: false
    };    

    marvelService = new MarvelService();

    async componentDidMount() {
        let firstCharId = 1011000;
        let count = 9;
        let charsArray = [];

        try {
            while (count > 0) {
                const char = await this.marvelService
                    .getCharacter(firstCharId);
                charsArray.push(char);
                firstCharId++;
                count--;
            }
        } catch {
            this.setState({ error: true });
        }

        this.setState({ charList: charsArray, loading: false });
    }

    onRequest = (offset) => {
        this.marvelService.getAllCharacters(offset)
    }
    
    render() {
        const charsArray = this.state.charList;

        const elements = charsArray.map(x => {
            let thumbnailStyle;
            if (x.thumbnail.includes('image_not_available.jpg')) {
                thumbnailStyle = { objectFit: 'contain' };
            }
            
            return (
                <li key={x.id} 
                className="char__item"
                onClick={() => this.props.onCharSelected(x.id)}>
                    <img src={x.thumbnail} alt={'Image of ' + x.name} style={thumbnailStyle} />
                    <div className="char__name">{x.name}</div>
                </li>
            )
        });

        //.char__item_selected

        const errorMessage = this.state.error ? <ErrorMessage></ErrorMessage> : null;
        const loading = this.state.loading ? <Spinner></Spinner> : null;
        const content = (!loading) ? elements : null;        

        return (
            <div className="char__list">
                <ul className="char__grid">
                    {errorMessage}
                    {loading}
                    {content}
                </ul>
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;