import React, {useState, useEffect} from 'react';
import Search from './components/Search'
import Result from './components/Result'
import BestMovies from './components/BestMovies'
import BestTv from './components/BestTv'
import axios from 'axios'
import Documentary from './components/Documentary';
function App() {

  
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });

  useEffect(() => {
    axios
    .get("https://api.themoviedb.org/3/movie/popular?api_key=efb6a90a6e954769821cddc6d87e9acb&language=en-US&page=1&with_genres=99")
    .then(({data}) =>{
      setState(data)
    })
  }, [])

  const apiurl = "https://api.themoviedb.org/3/search/multi?api_key=efb6a90a6e954769821cddc6d87e9acb";
  const apii = "https://api.themoviedb.org/3/"
  const api_key = "?api_key=efb6a90a6e954769821cddc6d87e9acb"
  const search = (e) => {
    if (e.key === "Enter")
    axios(apiurl + "&query=" + state.s).then(({data}) => {
      let results  = data.results;
      console.log(results)

      setState(prevState => {
        return {...prevState, results: results}
      })
    })
  }

  const handleInput = (e) => {
    let s = e.target.value;
  

  setState(prevState => {
    return {
      ...prevState, s:s
    }
  })

}
const getdata = () => {
  axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=efb6a90a6e954769821cddc6d87e9acb&language=en-US&page=1`)
    .then(({data}) => {
      let results = data.results;
      setState(prevState => {
        return {...prevState, results: results}
      })
    })
}
  const openPopup = (id,movieOrTv) => {
    axios(apii + movieOrTv + id + api_key).then(({ data }) => 
    {
      let result = data;

      setState(prevState => {
        return {...prevState, selected: result}
      })

    })
  }

  const closePopup = () => {
    setState(prevState =>{
      return {...prevState, selected: {} }
    })
  }
  return (
    
    <div className="App">
      <header>
      <h1>Movie DB</h1>
      </header>
      <main>
        < Search handleInput= {handleInput} search={search} />
        < Result results={state.results}/>
        
        {/* <h1>Best Movies</h1>
        < BestMovies /> */}
        <h1>BEst TV</h1>
        {/* <BestTv/> */}
        {/* <h1>Documentary</h1>
        <Documentary/> */}


      </main>
    </div>
  );
}

export default App;
