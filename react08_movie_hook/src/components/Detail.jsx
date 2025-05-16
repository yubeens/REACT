import './MovieView.css'
import {useLocation} from "react-router-dom";

function Detail() {
    //useLocation() 현재 정보 가져오기
    const location = useLocation();
    console.log({location})
    return(
        <div className={'movie__container'}>
            <img src={location.state.poster} />
            <h3 className='movie__title'>{location.state.title}</h3>
            <h5 className='movie__year'>{location.state.year}</h5>
            <ul className='movie__genres'>
                {
                    location.state.genres.map((genre, index)=>(
                        <li key={index}>{genre}</li>
                    ))
                }
            </ul>
            <p>{location.state.summary}...</p>
        </div>
    )
}
export default Detail;