import React from "react"

import RtlHomeLight from "../views/all-home-version/RtlHomeLight"
import NotFound from "../views/NotFound"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={RtlHomeLight} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  )
}

export default Routes
