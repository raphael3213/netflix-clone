import React,{ useEffect,useState} from 'react';
import './Row.css';
import axios from './axios';

function Row({title,fetchURL,isLargeRow = false}) {
    const [movies,setMovies] = useState([]);
    const baseURL =  "https://image.tmdb.org/t/p/original/"
    console.log(title)
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            // console.log(title,request.data?.results)
            return request;
        }
        fetchData();
        
    }, [fetchURL]);
    return (
        <div className="row">
            <h2>{title}</h2>
            {movies?.map(movie => {
                if(movie.poster_path && movie.backdrop_path){
                    return (
                        <img  src={`${baseURL}${
                            isLargeRow? movie.poster_path : movie.backdrop_path
                        }`} alt="" />
                    );
                }
                
            })}
        </div>
    )
}

export default Row
