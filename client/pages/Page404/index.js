import React from 'react'
import Helmet from 'react-helmet'
import './index.less'

export default ({ staticContext = {} }) => {
  staticContext.status = 404;
  return (
    <div>
      <Helmet>
        <title>404 no found</title>
      </Helmet>
      <h1>404 not found</h1>
    </div>
  ) 
}