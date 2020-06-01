import React, {useState, useEffect} from 'react';
import Search from './components/Search'
import Result from './components/Result'
import Popup from './components/Popup'
import axios from 'axios'
import {moviesTop, moviesDocuments, moviesFamilies, tvTop, searchUrlMulti} from "./apicalls";

function App() {

  
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });
 const dataApi = async () => {
  
  let result = await Promise.all([axios(moviesDocuments),
                                  axios(moviesTop),
                                  axios(moviesFamilies),
                                  axios(tvTop)])
                                  .catch(function(err) {
                                    console.log(err); // some coding error in handling happened
                                  }) 
                               
  
  result[3].data.results.forEach((item) => {
    item.gender = "tv"
  });
  result[0].data.results.forEach((item) => {
    item.gender = "movie"
  });
  result[1].data.results.forEach((item) => {
    item.gender = "movie"
  });
  result[2].data.results.forEach((item) => {
      item.gender = "movie"
    }); 
  setState({results: result[1].data.results.concat(result[3].data.results, result[0].data.results, result[2].data.results), selected: {} });
 }
  
  useEffect(() => {    
    dataApi();
  }, [])

  const search = async (e) => {
    if (e.key === "Enter")    
    axios(searchUrlMulti + state.s).then(({data}) => {
      let results  = data.results;
      console.log(results)
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