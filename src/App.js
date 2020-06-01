import React, {useState, useEffect} from 'react';
import Search from './components/Search'
import Result from './components/Result'
import Popup from './components/Popup'
import axios from 'axios'
import {moviesTop, moviesDocuments, moviesFamilies, tvTop, searchUrlMulti, firstPartOfCall} from "./apicalls";
import { apiKey } from './Apikey'
function App() {

  //prepare set state
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });

  //call api with Promise All. Not sure if it is best idea, because if one is down all are down. Catch error and see in console
 const dataApi = async () => {
  
  let result = await Promise.all(
    [axios(moviesDocuments),
    axios(moviesTop),
    axios(moviesFamilies),
    axios(tvTop)])
    .catch(function(err) {
          console.log(err); // some coding error in handling happened
          }) 
                               
  //kind of tricky part. If we make call for top tv, movies we cannot find out what is what so I added to each
  // object gendre. For more calls this is not optinal! Maybe use endpoit with collection and filter only movies and tv,
  // but in that call we cannot find top rated. 
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
  // initializing setState
  setState({results: result[1].data.results.concat(result[3].data.results, result[0].data.results, result[2].data.results), selected: {} });
 }
  
  useEffect(() => {    
    dataApi();
  }, [])

  // search part, the api endopoit is search collections
  const search = async (e) => {
    if (e.key === "Enter")    
    axios(searchUrlMulti + state.s).then(({data}) => {
      let results  = data.results;
      console.log(results)
      setState(prevState => {
        return {...prevState, results: results}
      })
    })
    //if something wrong upload again data 
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
// kind of strange that tv and movie have different key name for name of movie or tv
let movieName = null
  if (state.selected.title) {
    movieName = state.selected.title
  }
  else if (state.selected.name) {
    movieName = state.selected.name
  }
 
  
  const openPopup = (id, gender) => {
    const apiUrl = firstPartOfCall+gender+"/"+id+"?api_key="+apiKey;
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