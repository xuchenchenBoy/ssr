import React from "react";
import Helmet from 'react-helmet'
import './index.less'

export default class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>home</title>
        </Helmet>
        <div className="container">home</div>
      </div>
    )
  }
}
