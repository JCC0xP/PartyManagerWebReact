import React from  'react';
import { request } from 'graphql-request';
import { Modal } from 'antd';

import { createDecoration } from './Queries';

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class RegisterDecoration extends React.Component {
    state = {
        avatar: '',
        name: '',
        amount: 1,
    };

    handleSubmit = (e) => {
        e.preventDefault();
        request(
            process.env.API || 'http://localhost:3003/graphql',
            createDecoration,
            JSON.stringify({ ...this.state })
        )
            .then(data => {
                Modal.success({
                    title: 'Sucesso !',
                    content: 'Locacao cadastrada com sucesso.',
                })
            })
            .then(() => {
                this.setState({
                    avatar: '',
                    name: '',
                    amount: 1,
                });
            })
            .catch(err => {
                Modal.error({
                    title: 'Erro ...',
                    content: 'Tente novamente mais tarde.',
                    amount: 1,
                });
            });
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleChangeNumber = (amount) => {
        this.setState({
            amount,
        });
    };

    render () {
        return this.props.render({
            handleSubmit: this.handleSubmit,
            state: this.state,
            hasErrors,
            handleChange: this.handleChange,
            handleChangeNumber: this.handleChangeNumber,
        });
    }
}

export default RegisterDecoration;
