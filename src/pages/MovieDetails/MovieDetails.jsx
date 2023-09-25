import axios from 'axios';

import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const MovieDetails = () => {

    const [movies, setMovies] = useState("")
    const [photo, setPhoto] = useState("")

    const {movieId} =  useParams()
    
  
    
    // useEffect(() => {
    //     axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=9c63cd3e2af40f4c55ff67799c62e3dd`).then(({data}) => {
    //         console.log(data);
    //         setMovies(data)
    //     }).catch(error => console.log(error))
    // }, [movieId])


    useEffect(() => {
         const img = axios.get("https://api.themoviedb.org/3/movie/420818/images?api_key=9c63cd3e2af40f4c55ff67799c62e3dd").then(({data}) => {
        console.log(data.logos)
    }).catch(error => console.log(error))
        
 console.log(img);
        //         axios.get(` https://api.themoviedb.org/3/collection/268/images?api_key=9c63cd3e2af40f4c55ff67799c62e3dd`).then((data) => {
        //     console.log(data);
        //     // setPhoto(data)
        // }).catch(error => console.log(error))
 
},[])
    // return (
    // <>  {movies &&
    //         //  movies.map( movie => (
    //           <ul key ={movies.id}>
    //             <li>
    //                 <h1>{movies.original_title}</h1>
    //                 <p>User Score: {Math.round(movies.popularity)} %</p>
    //                 <img src={`${movies.poster_path}`} alt="" />
    //                 <h2>Overview </h2>
    //                 <p> {movies.overview}</p>
    //                  <h2>Genres </h2>
    //                 {movies.genres.map(({ name }) => <p key={name}>{name}</p>)}
    //                 <ul>Addition information:
    //                     <li><Link>Cast</Link></li>
    //                     <li><Link>Reviews</Link></li>
    //                 </ul>
    //             </li>
    //         </ul>  
    //         // ) )
    //     }</>
      
      
    // )
}

export default MovieDetails