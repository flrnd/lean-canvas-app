import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Canvas from './components/canvas'
import Edit from './components/edit'

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Canvas} />
          <Route path="/edit" exact component={Edit} />
        </Switch>
      </Router>
    </div>
  )
}
export default App
