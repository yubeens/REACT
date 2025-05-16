import "../routers/Home.css";

import {useEffect, useState} from "react";
import axios from "axios";
import Movie from "../components/Movie.jsx";

function Home(){
    const [movies, setMovies] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getMovies = ()=>{
        axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
            .then((res)=>{
                console.log("res data movies: ", res.data.data.movies)
                setLoading(false);
                setMovies(res.data.data.movies);
            })
    }

    //componentDidMount(), componentDidUpdate()
    useEffect(()=>{
        getMovies()
    },[]);

    return(
        <section className="container">
            {
                isLoading ? (<div className='loader'>
                             <span>isLoading</span>
                             </div>)
                    :(
                            <div className='movies'>
                                {
                                    movies.map((movie)=>(
                                        <Movie   key={movie.id}
                                                 year ={movie.year}
                                                 title ={movie.title}
                                                 summary ={movie.summary}
                                                 poster ={movie.medium_cover_image}
                                                 genres ={movie.genres}/>
                                    ))
                                }
                        </div>
                    )}
        </section>
    )
}
export default Home;