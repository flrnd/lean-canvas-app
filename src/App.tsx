import React from 'react'
import { useRoutes } from 'hookrouter'
import Routes from './router'

import './App.css'

function App() {
  const routeResult = useRoutes(Routes)
  return routeResult
}

export default App
