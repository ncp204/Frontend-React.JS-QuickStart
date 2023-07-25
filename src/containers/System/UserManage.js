import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'

import { emitter } from '../../utils/emitter';

import {
    getAllUser,
    createNewUser,
    deletUserService,
    editUserService
} from '../../services/userService';

import ModalUser from './ModalUser'
import ModalEditUser from './ModalEditUser';
import { Button } from 'reactstrap';

class UserManage extends Component {

    /** Life cycle
     * Run component:
     *  1. Run constructor -> init state
     *  2. componentDidmount
     *  3. Render
     */

    constructor(props) {
        super(props)
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            userEdit: {}
        }
    }

    async componentDidMount() {
        await this.getAllUsersFromReact();
    }

    getAllUsersFromReact = async () => {
        let response = await getAllUser('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }

    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true
        })
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser
        })
    }

    toggleUserEditModal = () => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser,
        })
    }

    createNewUser = async (data) => {
        try {
            let response = await createNewUser(data)
            if (response && response.errCode !== 0) {
                alert(response.message)
            } else {
                await this.getAllUsersFromReact();
                this.toggleUserModal();
                emitter.emit('EVENT_CLEAR_MODAL_DATA', { id: 'id' })
            }
        } catch (error) {
            console.log(error);
        }
    }

    handleDeleteUser = async (user) => {
        try {
            let response = await deletUserService(user.id);
            if (response && response.errCode !== 0) {
                alert(response.message)
            } else {
                await this.getAllUsersFromReact();
            }
        } catch (error) {
            console.log(error);
        }
    }

    handleEditUser = (user) => {
        this.setState(
            {
                isOpenModalEditUser: true,
                userEdit: user
            });
    }

    editUser = async (data) => {
        try {
            let response = await editUserService(data)
            if (response && response.errCode !== 0) {
                alert(response.message)
            } else {
                await this.getAllUsersFromReact();
                this.toggleUserEditModal();
            }
        } catch (error) {
            console.log(error);
        }
    }


    render() {
        let { arrUsers } = this.state;
        return (
            <div className="user-container">
                <div className='title text-center'>Manage user</div>
                <div className='mx-1'>
                    <button className='btn btn-primary px-3' onClick={() => this.handleAddNewUser()}>
                        <i className='fas fa-plus' />
                        Add new user</button>
                </div>
                <div className='users-table mt-3 mx-1'>
                    <table id="customers">
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                arrUsers && arrUsers.map(user => {
                                    return (
                                        <tr key={user.id}>
                                            <td>{user.email}</td>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.address}</td>
                                            <td>
                                                <Button
                                                    color="warning"
                                                    className='px-3'
                                                    onClick={() => this.handleEditUser(user)}
                                                >
                                                    Edit
                                                </Button>
                                                {' '}
                                                <Button
                                                    color="danger"
                                                    className='px-3'
                                                    onClick={() => this.handleDeleteUser(user)}
                                                >
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                })

                            }
                        </tbody>
                    </table>
                </div>
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleFromParent={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />
                {
                    this.state.isOpenModalEditUser &&
                    <ModalEditUser
                        isOpen={this.state.isOpenModalEditUser}
                        toggleFromParent={this.toggleUserEditModal}
                        currentUser={this.state.userEdit}
                        editUser={this.editUser}
                    />
                }
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
