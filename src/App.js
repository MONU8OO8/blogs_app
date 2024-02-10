import React from "react"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Home } from "./pages/home/Home"
import { Card } from "./components/blog/Card"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { DetailsPages } from "./pages/details/DetailsPages"

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about/:id' component={DetailsPages} />
          <Route exact path='/blog' component={Card}/>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}
export default App
