import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

class ModalUser extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent();
    }


    render() {
        let { modal } = this.props.isOpen;
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'haha'}
                size="md">
                <ModalHeader toggle={() => { this.toggle() }}>Create a new user</ModalHeader>
                <ModalBody>
                    <div>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                id='email'
                                name='email'
                                placeholder='Enter your email'
                                type='email'
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="firstName">Password</Label>
                            <Input
                                id='password'
                                name='password'
                                placeholder='Enter your password'
                                type='password'
                                required
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
                            />
                        </FormGroup>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className='px-3' onclick={() => { this.toggle() }}>Do somthing</Button>{' '}
                    <Button color="secondary" className='px-3' onclick={() => { this.toggle() }}>Cancel</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);