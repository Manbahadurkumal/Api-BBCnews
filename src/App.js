import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import Content from './component/Content'; 
import NavBar from './component/NavBar';
// import data from "./data";
import React from 'react'

function App() {
  const [news,setNews] = React.useState([]);
  // const [loading,setLoading] = React.useState(false);
  // const [searchQuery,setsearchQuery] = React.useState("");
  // const NewsArticles = [];
  React.useEffect(()=>{
    // setLoading(true);
    fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=eb1c5cba1f69442087fc3628392e4ee2`)
    .then((res) => res.json())
    .then((data) => setNews(data.articles))
    // .then(setLoading(false));
  }, [])
  return (
    <>
      <NavBar/>
      <Content news={news}/>
    </>
  );
}

export default App
