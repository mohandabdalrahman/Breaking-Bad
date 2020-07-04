import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Header from './components/Header'
import CardGrid from './components/CardGrid'
import Search from './components/Search'
import spinner from './img/spinner.gif'
import './App.css';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [query, setQuery] = useState('')

  const fetchItems = async () => {
    const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
    setItems(result.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchItems()
  }, [query])
  return (
    <div className="container">
      <Header />
      <Search qetQuery={(q) => setQuery(q)} />
      {isLoading ? <img style={{ width: '200px', margin: 'auto', display: 'block' }} src={spinner} alt="spinner" /> : <CardGrid items={items} />}
    </div>
  );
}

export default App;
