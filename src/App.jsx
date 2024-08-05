import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreateBooks from './pages/CreateBooks'
import Deletebook from './pages/Deletebook'
import EditBook from './pages/EditBook'
import ShowBook from './pages/ShowBook'
import Home from './pages/Home'

const App = () => {
  return (
    <Routes>
      <Route path = '/' element={<Home/>}/>
      <Route path = '/books/create' element={<CreateBooks/>}/>
      <Route path = '/books/details/:id' element={<ShowBook/>}/>
      <Route path = '/books/edit/:id' element={<EditBook/>}/>
      <Route path = '/books/delete/:id' element={<Deletebook/>}/>
    </Routes>
  )
}

export default App