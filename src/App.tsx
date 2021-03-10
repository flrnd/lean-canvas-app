import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Canvas from './components/canvas'
import Edit from './components/edit'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Canvas} />
        <Route path="/edit/:id" exact component={Edit} />
      </Switch>
    </Router>
  )
}
export default App
