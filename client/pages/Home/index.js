import React from "react";
import Helmet from 'react-helmet'

export default class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>home</title>
        </Helmet>
        <div>home</div>
      </div>
    )
  }
}
