import {Component} from "react";
import Movie from "../components/Movie.jsx";
import axios from "axios";

class Home extends  Component{
    state = {
        isLoding : true,
        movies : []
    }
    getMovies = () => {
        axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
            .then((res) => {
                console.log("axios res : ", res.data)
                console.log(res.data.data.movies)
                console.log("movie_count : ", res.data.data.movie_count)
                this.setState({
                    isLoding: false,
                    movies: res.data.data.movies
                })
            })

        // getMovies= () =>{
        //     fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
        //         .then((res) => res.json())
        //         .catch(err => console.log(err))
        //         .then((res)=>{
        //             console.log(res.data.movies)
        //             console.log("movie_count :", res.data.movie_count)
        //             this.setState({
        //                 isLoding:false,
        //                 movies:res.data.movies})
        //         })
        // }
    }

   componentDidMount() {
       console.log('componentDidMount')
       this.getMovies()
   }

    render() {
       const  {isLoding, movies} = this.state
       return(
           <div>
               {
                   isLoding ? <div>
                                <span>isLoading</span>
                             </div>
                    :movies.map((movie)=>{
                       return(
                           <Movie   key={movie.id}
                                    year ={movie.year}
                                    title ={movie.title}
                                    summary ={movie.summary}
                                    poster ={movie.medium_cover_image}
                                    genres ={movie.genres}/>
                           // <div> year : {movie.year}
                           //  title : {movie.title}
                           //  summary : {movie.summary}
                           //  poster : {movie.medium_cover_image}
                           //  genres : {movie.genres}</div>
                       )
                   })
               }
           </div>
       )
   }
}

export  default  Home;