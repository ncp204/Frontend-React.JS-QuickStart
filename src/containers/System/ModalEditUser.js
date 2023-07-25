import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import _ from 'lodash';


class ModalEditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        }
    }

    componentDidMount() {
        let { currentUser } = this.props;
        if (currentUser && !_.isEmpty(currentUser)) {
            this.setState({
                id: currentUser.id,
                email: currentUser.email,
                password: 'nonono',
                firstName: currentUser.firstName,
                lastName: currentUser.lastName,
                address: currentUser.address
            })
        }
    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    handleOnChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;

        this.setState({
            ...copyState
        });
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter: ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleEditUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === true) {
            this.props.editUser(this.state)
        }
    }

    render() {
        let { email, password, firstName, lastName, address } = this.state

        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'haha'}
                size="md">
                <ModalHeader toggle={() => { this.toggle() }}>Edit a user</ModalHeader>
                <ModalBody>
                    <div>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                id='email'
                                name='email'
                                placeholder='Enter your email'
                                type='email'
                                disabled
                                value={email}
                                onChange={(event) => this.handleOnChangeInput(event, "email")}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="firstName">Password</Label>
                            <Input
                                id='password'
                                name='password'
                                placeholder='Enter your password'
                                type='password'
                                disabled
                                value={password}
                                onChange={(event) => this.handleOnChangeInput(event, "password")}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="firstName">First Name</Label>
                            <Input
                                id='firstName'
                                name='firstName'
                                placeholder='Enter your first name'
                                type='text'
                                required
                                value={firstName}
                                onChange={(event) => this.handleOnChangeInput(event, "firstName")}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastName">Last Name</Label>
                            <Input
                                id='lastName'
                                name='lastName'
                                placeholder='Enter your last name'
                                type='text'
                                required
                                value={lastName}
                                onChange={(event) => this.handleOnChangeInput(event, "lastName")}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="address">Address</Label>
                            <Input
                                id='address'
                                name='address'
                                placeholder='Enter your address'
                                type='text'
                                required
                                value={address}
                                onChange={(event) => this.handleOnChangeInput(event, "address")}
                            />
                        </FormGroup>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        className='px-3'
                        onClick={() => this.handleEditUser()}>
                        Edit</Button>{' '}
                    <Button
                        color="secondary"
                        className='px-3'
                        onClick={() => { this.toggle() }}>
                        Cancel</Button>
                </ModalFooter>
            </Modal>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);