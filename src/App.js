import React, { useState, useEffect } from 'react'
import Form from 'form'
import Card from 'card'
import axios from 'axios '


const App = () => {

  const [giState, setGifState] = useState ({
    search: '',
    gif: {}
  })

  gitState.handleInputChange = event => {
    setGifState({ ...gifState, [event.target.name]: event.target.value })
  }

  gitState.handleSearchGIPHY = event => {
    event.preventDefault()
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=q9wCxDUt6aMoxHi0QI43N6RxaOaWrMRT&q=${gitState.search}&limit=20&rating=g`)

  }

useEffect (() => {
  axios.get('https://api.giphy.com/v1/gifs/search?api_key=q9wCxDUt6aMoxHi0QI43N6RxaOaWrMRT&q=cats&limit=20&rating=g')
    .then (({data}) => {
      let gif = data.data [Math.floor(Math.random() * data.data.length )]
      setGifState ({ ...gifState, gif })
    }) 
    .catch(err => console.error(err))
}, [])

  return (
    <>
    <h1> GIPHY App </h1>
    <Form 
    search = {gifState.search}
    handleInputChange={gifState.handleInputChange}
    handleSearchGIPHY= {gifState.handleSearchGIPHY} />
    {
      setGifState.gif.title ? <Card gif = {setGifState.gif} /> : null
    }
    </>
  )
}




// q9wCxDUt6aMoxHi0QI43N6RxaOaWrMRT