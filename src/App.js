import React from 'react'
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.components'
import reactLogo from './logo.svg'
import './App.scss'

import data from './data/Search.json'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      characters: [],
      searchField: ''
    }
  }



  componentDidMount() {
    fetch(
      "https://fakestoreapi.com/products"
    ).then((response) => response.json())
    .then(products =>  this.setState({characters : products}))
  
  }

  onSearchChange = e => {
    this.setState({searchField: e.target.value})
  }

  render () {
    const { characters, searchField } = this.state
    const filteredCharacters = characters.filter(character => 
      character.title.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1>Defacto Filter</h1>
        <SearchBox 
          placeholder="Find Your Product"
          onSearchChange={this.onSearchChange}
        />
        <CardList characters={filteredCharacters} />
        <footer className="footer">
          <p>Made with <img alt="reactjs.org" src={reactLogo} width="34px" height="34px" /> React</p>
        </footer>
      </div>
    )
  }
}

export default App