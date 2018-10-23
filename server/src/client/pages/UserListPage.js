import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsersAction } from '../actions';
import { Helmet } from 'react-helmet';

class UsersList extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchUsersAction();
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>;
        });
    }

    head() {
        return (
            <Helmet>
                <title>{`${this.props.users.length} Users Loaded`} </title>
                <meta property="og:title" content="Users App" />
            </Helmet>
        )
    }

    render() {
        return (
            <div>
                {this.head()}
                <ul>
                    {this.props.users.map(user => {
                        return (
                            <li key={user.id}>{user.name}</li>
                        )
                    })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const loadData = (store) => {
    return store.dispatch(fetchUsersAction());
}
export default {
    loadData,
    component: connect(mapStateToProps, { fetchUsersAction })(UsersList)
};