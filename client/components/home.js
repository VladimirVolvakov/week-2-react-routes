import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './header'
import Component1 from './component1'
import Component2 from './component2'
import Component3 from './component3'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <Switch>
            <Route exact path="/dashboard" component={() => <Component1 />} />
            <Route exact path="/dashboard/main" component={() => <Component2 />} />
            <Route exact path="/dashboard/profile/:user" component={() => <Component3 />} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
