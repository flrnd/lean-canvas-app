import React from 'react'
import Canvas from './components/canvas'
import Problem from './components/problem'

const routes = {
  '/': () => <Canvas />,
  '/problem': () => <Problem />,
}

export default routes
