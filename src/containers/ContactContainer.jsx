import React, { Component } from 'react';
import ContactControls from '../components/Contact/ContactControls';
import { submitForm } from '../services/contact';
import '../containers/ContactContainer.css';


class ContactContainer extends  Component {
    state = {
    loading: true,
    // contact: '',
    name: '',
    company: '',
    email: '',
    message: '',
    }

    componentDidMount() {
        this.setState({loading: false})
    }

    handleNameInput(e) {
        this.setState({ name: e.target.value })
    }

    handleCompanyInput(e) {
        this.setState({ company: e.target.value })
    }

    handleEmailInput(e) {
        this.setState({ email: e.target.value })
    }

    handleMessageInput(e) {
        this.setState({ message: e.target.value })
    }

    handleSubmit = async(e) => {
        const { name, company, email, message } = this.state;
        e.preventdefault();
        this.setState({ loading: true });

        const contact = await submitForm(name, company, email, message);
        this.setState({
            loading: false,
            contact,
        })
    }
    render() {
        const {name, company, email, message} = this.state
        return (
            <>
            <div className='contactDiv'>
                <ContactControls 
                    name = {name}
                    company = {company}
                    email = {email}
                    message = {message}
                    onNameInput = {this.handleNameInput}
                    onCompanyInput = {this.handleCompanyInput}
                    onMessageInput = {this.handleMessageInput}
                    onSubmit = {this.handleSubmit}
                />
            </div>
            </>
        )
    }
}

export default ContactContainer