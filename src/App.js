import React, { Component } from 'react'
import './App.css'
import Membre from './components/Membre'
import Button from './components/Button'

const famille = {
  membre1: {
    nom: 'Yann',
    age: 27
  },
  membre2: {
    nom: 'Allan',
    age: 20
  },
  membre3: {
    nom: 'Antoine',
    age: 11
  }
}

class App extends Component {
  state = { 
    famille,
    isShow: false
  }

  handleClick = (num, id) => {
    const famille = { ... this.state.famille }
    famille[id].age += num
    this.setState({ famille })
  }

  handleChange = (e,id) => {
    const famille = { ... this.state.famille }
    const nom = e.target.value
    famille[id].nom = nom
    this.setState({ famille })
  }

  handleShowDesc = () => {
    const isShow = !this.state.isShow
    this.setState({isShow})
  }

  handleDelete = id => {
    const famille = { ... this.state.famille }
    delete famille[id]
    this.setState({famille})
  }

  render(){
    const { titre } = this.props
    const { famille, isShow } = this.state

    let description = null
    if(isShow){
      description = (<strong>Je suis le plus jeune !</strong>)
    }

    const liste = Object.keys(famille)
      .map(membre => (
        <Membre 
            Key={membre}
            handleChange = { (e) => this.handleChange(e, membre) }
            handleDelete = { () => this.handleDelete(membre) }         
            nom={ famille[membre].nom }
            age={ famille[membre].age }/>
        ))

    return(
      <div className='App'>
        <h1>{titre}</h1>
        {liste}

        {/*<Membre 
          nom={ famille.membre3.nom }
          age={ famille.membre3.age }>
            <button onClick={this.handleShowDesc}>
              {
                isShow ? 'Cacher' : 'Montrer'
              }
            </button> 
            { description }
            
            </Membre>
        <Button vieillir={ () => this.handleClick(2) } />*/}
      </div>
    )
  }
}

//Permet d'importer le component "App.js" ailleurs (cf.index.js)
export default App
