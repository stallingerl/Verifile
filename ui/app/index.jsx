import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from './layouts/App.jsx'
import Home from './pages/Home/Home.jsx'
import Detail from './pages/Detail.jsx'
import Error404 from './pages/Error404.jsx'
import Docs from './pages/Docs/Docs.jsx'
import GetStarted from './pages/GetStarted.jsx'
import WhatIsPoe from './pages/WhatIsPoe.jsx'

import registerServiceWorker from './registerServiceWorker'

import { getConfig } from '@proofofexistence/api-client'



// get config as starter
getConfig({ baseURL: null })
  .then(response => {
    let config = response.data

    // config and global props to pass down to children
    const generalProps = { ...config }

    ReactDOM.render(
      <Router>
        <App {...generalProps}>
          <Switch>
            <Route exact path='/' component={props =>
              <Home {...generalProps} {...props} />
            } />
            <Route path='/detail/:hash' component={props =>
              <Detail {...generalProps} {...props} />
            } />
            <Route path='/Docs' component={props =>
              <Docs {...generalProps} {...props} />
            } />
            <Route path='/GetStarted' component={props =>
              <GetStarted {...generalProps} {...props} />
            } />
            <Route path='/WhatIsPoe' component={props =>
              <WhatIsPoe {...generalProps} {...props} />
            } />
            <Route component={Error404} />
          </Switch>
        </App>
      </Router>
      ,
      document.getElementById('root')
    )
  })
  .catch(error => {
    console.log(error)
    ReactDOM.render(
      <App>
        <p>
          Error fetching the config file...
        </p>
      </App>
      ,
      document.getElementById('root')
    )
  })

registerServiceWorker()
