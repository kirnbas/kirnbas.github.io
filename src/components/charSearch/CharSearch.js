import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';

import './charSearch.scss';
import useMarvelService from "../../services/MarvelService";
import { useState } from "react";

const CharSearch = () => {
    const [char, setChar] = useState(null);
    const [notFound, setNotFound] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const {getCharacterByName} = useMarvelService();

    const onSubmit = (data) => {
        getCharacterByName(data.search)
            .then(onCharLoaded);
    };

    const onCharLoaded = (char) => {
        if (char == null) setNotFound(true);
        else setNotFound(false);

        setChar(char);
    }

    const errorRequired = errors.search ? 
        <span className="error">This field is required</span> : null;
    const characterNotFound = !errors.search && notFound ? 
        <span className="error">The character was not found. Check the name and try again</span> : null;
    const charDiv =  !errors.search && !notFound && char ? 
        <>
            <span className="found">There is! Visit {char.name} page?</span> 
            <Link to={`/chars/${char.id}`}>
                <button className="button button__secondary">
                    <div className="inner">to page</div>
                </button>
            </Link>
        </> : null;

    return (
        <div className="char__search">
            <div className='char__search-title'>Or find a character by name:</div>
            <form onSubmit={handleSubmit(onSubmit)} className='char__search-form'>
                <input 
                    placeholder='Enter name' 
                    {...register("search", {required: true})}
                    onKeyUp={(e) => { if (e.key === "Enter" && e.target.value) onSubmit({ search: e.target.value }) }}></input>                
                <button type="submit" className="button button__main">
                    <div className="inner">Find</div>
                </button>                
                <div className="information">
                    {errorRequired}
                    {characterNotFound}
                    {charDiv}
                </div>                
            </form>
        </div>
    )
}

export default CharSearch;