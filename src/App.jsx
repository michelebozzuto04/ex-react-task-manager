import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddTask from './pages/AddTask'
import TaskList from './pages/TasksList'
import DefaultLayout from './layouts/DefaultLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<TaskList />} />
          <Route path='/add' element={<AddTask />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App