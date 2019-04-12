import React from "react";
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import './index.less'
import * as types from '../../model/home/types'

class Home extends React.PureComponent {
  componentWillMount() {
    this.props.getInfo()
  }

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

export default connect(
  state => ({ ...state.home }), 
  (dispatch) => ({
    getInfo: (payload) => {
      dispatch({
        type: types.HOME_INFO_REQ,
        payload
      })
    }
  })
)(Home)