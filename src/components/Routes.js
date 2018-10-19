import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HelloRouter from './HelloRouter'

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/hello_router' component={HelloRouter}/>
    </Switch>
  </main>
)

export default Routes