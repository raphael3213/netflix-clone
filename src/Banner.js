import React, {useState,useEffect} from 'react';
import './Banner.css';
import axios from './axios';
import requests from './Requests'
function Banner() {

    const [movie,setMovie] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random()* request.data.results.length -1)
                ]
            );
            return requests
        }

        fetchData();
    }, []);

    console.log(movie);

    function truncate(string,n){
        return string?.length > n ? string.substring(0,n) + '...' : string 
    }
    return (
        <header className="Banner" style={{
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
        }}>

        <div className="banner__contents">
            <h1 className="banner__title">
                {movie?.name}
            </h1>
            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>
            <div className="banner__description">
                {truncate(movie?.overview,190)}
            </div>
        </div>

        <div className="banner--fadeBottom"/>
        
            
        </header>
    )
}

export default Banner
