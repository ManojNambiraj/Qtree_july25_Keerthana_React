import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserManagement from './UserManagement'
import CreateUser from './pages/CreateUser'
import EditUser from './pages/EditUser'

function CRUDApp() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<UserManagement />} />
            <Route path='/create' element={<CreateUser />} />
            <Route path='/edit/:id' element={<EditUser />} />
        </Routes>
    </BrowserRouter>
  )
}

export default CRUDApp



// CRUD --> Create   Read    Update    Delete

// Http -->  POST    GET      PUT      DELETE