import React from "react";
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import './index.less'
import * as types from '../../model/home/types'
import { getInfo } from '../../model/home/saga'

class Home extends React.PureComponent {
  render() {
    const { status } = this.props.homeInfo;

    return (
      <div>
        <Helmet>
          <title>home</title>
        </Helmet>
        <div className="container">{status}</div>
      </div>
    )
  }
}

Home.loadData = getInfo

export default connect(
  state => ({ ...state.home }), 
  (dispatch) => ({})
)(Home)