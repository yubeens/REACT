import './Movie.css'
import {Link} from "react-router-dom";

function Movie({year, title, summary, poster, genres}){
    return(
        <div className='movie'>
            <img src={poster} alt={title} title={title}/>
            <div>
                <h3 className='movie__title'>{title}</h3>
                <h5 className='movie__year'>{year}</h5>
                <ul>
                    {
                        genres.map((genre, index)=>(
                            <li key={index}>{genre}</li>
                        ))
                    }
                </ul>
                <p>{summary.slice(0,100)}...</p>
                <Link to={'/detail'}
                    state={{year,title,summary,poster,genres}}>Detail</Link>
            </div>
        </div>
    )

}
export default Movie;