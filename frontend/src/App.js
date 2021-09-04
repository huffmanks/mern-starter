import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// layouts
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// pages
import Form from './pages/Form'
import Admin from './pages/Admin'
import Reports from './pages/Reports'

const App = () => {
 
  return (

    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-shrink-0">
          <Switch>
            <Route exact path="/">
              <Form />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/reports">
              <Reports />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>

  )
}

export default App