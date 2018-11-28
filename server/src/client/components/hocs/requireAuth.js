import React, { Component} from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

export default (ChildComponent) => {
    class RequireAuth extends Component {
        render() {
          switch (this.props.auth) {
              case false:
                return <Redirect to="/" />;
              case null:
                return <div>Loading...</div>
              default:
                return (
                    <h1>authorized</h1>
                    // <ChildComponent {...this.props} />
                )
          }
        }
    }

    const mapStateToProps = ({ auth }) => {
        return { auth };
    }
    return connect(mapStateToProps)(RequireAuth);
}