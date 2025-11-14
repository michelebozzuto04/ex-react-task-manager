import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddTask from './pages/AddTask'
import TaskList from './pages/TasksList'
import TaskDetail from './pages/TaskDetail'
import DefaultLayout from './layouts/DefaultLayout'
import { GlobalProvider } from './contexts/GlobalContext'

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<TaskList />} />
            <Route path='/add' element={<AddTask />} />
            <Route path='/task/:id' element={<TaskDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App