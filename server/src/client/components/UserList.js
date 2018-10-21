import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsersAction } from '../actions';

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

    render() {
        return (
            <div>

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

const loadData = () => {
    console.log("I'm trying to load some data.")
}
export {loadData};
export default connect(mapStateToProps, { fetchUsersAction })(UsersList)