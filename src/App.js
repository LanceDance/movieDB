import React, {Component, useState, useEffect} from 'react';
import Search from './components/Search'
import Result from './components/Result'
import Popup from './components/Popup'
import axios from 'axios'


function App() {

  
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });
 const dataApi = async () => {
  
  const getDocuments = await axios("https://api.themoviedb.org/3/movie/popular?api_key=efb6a90a6e954769821cddc6d87e9acb&language=en-US&page=1&with_genres=99");
  getDocuments.data.results.forEach((item) => {
    item.gender = "movie"
  });
  const getMovies = await axios("https://api.themoviedb.org/3/movie/top_rated?api_key=efb6a90a6e954769821cddc6d87e9acb&language=en-US&page=1");
  getMovies.data.results.forEach((item) => {
    item.gender = "movie"
  });

  const getTv = await axios("https://api.themoviedb.org/3/tv/top_rated?api_key=efb6a90a6e954769821cddc6d87e9acb&language=en-US&page=1")
  getTv.data.results.forEach((item) => {
    item.gender = "tv"
  });
  setState({results: getMovies.data.results.concat(getDocuments.data.results, getTv.data.results), selected: {} });
 }
  
  useEffect(() => {    
    dataApi();
  }, [])

  const apiurl = "https://api.themoviedb.org/3/search/multi?api_key=efb6a90a6e954769821cddc6d87e9acb";
  const apii = "https://api.themoviedb.org/3/"
  const api_key = "?api_key=efb6a90a6e954769821cddc6d87e9acb"
  const search_query = apiurl + "&query=" + state.s
  const search = async (e) => {
    if (e.key === "Enter")    
    axios(apiurl + "&query=" + state.s).then(({data}) => {
      let results  = data.results;

      setState(prevState => {
        return {...prevState, results: results}
      })
    })
    .catch(error => dataApi())

  }
  const handleInput = (e) => {
    let s = e.target.value;
  

  setState(prevState => {
    return {
      ...prevState, s:s
    }
  })

}

// const getdata = () => {
//   axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=efb6a90a6e954769821cddc6d87e9acb&language=en-US&page=1`)
//     .then(({data}) => {
//       let results = data.results;
//       setState(prevState => {
//         return {...prevState, results: results}
//       })
//     })
// }
let movieName = null
  if (state.selected.title) {
    movieName = state.selected.title
  }
  else if (state.selected.name) {
    movieName = state.selected.name
  }

  const openPopup = (id, gender) => {
    const apiUrl = "https://api.themoviedb.org/3/"+gender+"/"+id+"?api_key=efb6a90a6e954769821cddc6d87e9acb";
    axios(apiUrl)
    .then(({ data }) => 
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
      
        < Result results={state.results} openPopup={openPopup}/>
        {( movieName != null) ? 
        <Popup selected={state.selected} closePopup={closePopup} /> 
        : false  
  }    
      </main>
    </div>
  );
}

export default App;