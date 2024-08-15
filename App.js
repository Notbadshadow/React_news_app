
import { useEffect, useState } from 'react';
import './App.css';
import News from './News';

function App() {


  let [articles,setArticles] = useState([]);
  let [category,setCategory] = useState("india");

  useEffect(()=>{

    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2024-08-12&apiKey=d7c04275fb7e469cb9f43c18535d71b1`)

    .then((Response)=>Response.json())
    .then((news)=>{
      setArticles(news.articles);
      console.log(news.articles);
    })
    .catch((err)=>{
      console.log(err)
    })

  },[category])










  return (
    <div className="App">
      <header className='header'>

        <h1>Hulcha News</h1>

        <input type='text' onChange={(event)=>{
          if (event.target.value!=="")
          {
            setCategory(event.target.value);

          }
          else
          {
            setCategory("india")
          }
          
        }} placeholder='Search News'/>

      </header>

    <section className='news-articles'>

      {

        articles.length!==0?


        articles.map((article)=>{
          return(
            <News article = {article}/>
          )
        })

        :

        <h3>No News Found For Searched Text</h3>
      }

      

      

    </section>
     
    </div>
  );
}

export default App;
