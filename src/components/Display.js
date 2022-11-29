import React,{useState,useEffect} from 'react'
import "./display.css"
import axios from './axios'
import movieTrailer from "movie-trailer"
import YouTube from "react-youtube"

// to fetch the images
const image_url="https://image.tmdb.org/t/p/original/"

// we bring title and url as a prop
function Display({title,fetchUrl,isBigger}) {
    // the url we prop are different and we put them on virable so to manage the variables we use usestate
   const [movies,setMovies]=useState([]);
  //  blow useState is to manage trailer video onclick
  const [trailerUrl,setTrailerUrl]=useState('')
    // async & await are same as we use .then 
    // imported axios component has baseURl and the individual url are on a variable (fetchUrl)
    useEffect(()=>{
        async function fetchData(){
            const request= await axios.get(fetchUrl);
            // console.log(request.data.results)
            // console.log(request)
            setMovies(request.data.results);
            return request;
        }
       fetchData()
    },[fetchUrl]);
    // console.log(movies);
    const opts={
      height:"390",
      width:"100%",
      playerVars:{autoplay:1},
    };
    //  const showTrailer=(movie)=>{
    //   if(trailerUrl){
    //     setTrailerUrl("")
    //   }else{
    //     movieTrailer(movie?.title || movie?.name ||movie.original_name).then((url)=>{
    //       const urlParams=new URLSearchParams(new URL(url).search);
    //       setTrailerUrl(urlParams.get("v"))
    //     })
    //     .catch((error)=>console.log(error))
    //   }
    //  }
    const handleClick = (movie) => {
      if(trailerUrl){
        setTrailerUrl('')
      }else {
        movieTrailer(movie.title ||movie.name||movie.orignal_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get('v'))
        })
        .catch((error) => console.log(error))
      }
    }
  return (
    <div className='display'>
           <div>{title}</div>
    <div className='display_posters'>
        {movies.map((movie)=>(
            // img class name is display_poster but if it finds isBigger name it will add display_posterLarge class name
            <img  onClick={() => handleClick(movie)} className={`display_poster ${isBigger && "display_posterLarge"}`} src=
            // {`${image_url}${movie.poster_path}`}
            {`${image_url}${isBigger? movie.poster_path:movie.backdrop_path}`}
            alt={movie.name}/>
        ))}
    </div>
    <div style={{ padding: "40px"}}>
       {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
 
  )
}

export default Display