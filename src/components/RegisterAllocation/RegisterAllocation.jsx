import React from  'react';
import moment from 'moment';
import { request } from 'graphql-request';
import { Modal } from 'antd';
import { browserHistory } from 'react-router';

import { createAllocations, allDecorations } from './Queries';

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class RegisterAllocation extends React.Component {
    state = {
        decoration: '',
        type: 'Pegue e monte',
        name: '',
        email: '',
        phone: '',
        date: moment().format('DD/MM/YYYY'),
        allDecorations: [],
    };

    componentWillMount() {
        this.handleGetDecorations();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        request(
            process.env.API || 'http://localhost:3003/graphql',
            createAllocations,
            JSON.stringify({ ...this.state })
        )
            .then(data => {
                Modal.success({
                    title: 'Sucesso !',
                    content: 'Locacao cadastrada com sucesso.',
                })
            })
            .then(() => {
                browserHistory.replace('/home');
            })
            .catch(errors => {
                const response = JSON.stringify(errors);
                Modal.error({
                    title: 'Erro ...',
                    content: JSON.parse(response).response.errors[0].message,
                });
            });
    };

    handleGetDecorations = () => {
        request(
            process.env.API || 'http://localhost:3003/graphql',
            allDecorations
        )
            .then(data => {
                this.setState({
                    allDecorations: data.allDecorations,
                });
            })
            .catch(err => {
                Modal.error({
                    title: 'Erro ...',
                    content: 'Tente novamente mais tarde.',
                });
            });
    };

    handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value,
      });
    };

    handleSelectDecoration = (value) => {
      this.setState({
          decoration: value,
      });
    };

    handleChangeDate = (value) => {
      this.setState({
          date: moment(value).format('DD/MM/YYYY'),
      });
    };

    render () {
        return this.props.render({
            handleSubmit: this.handleSubmit,
            state: this.state,
            hasErrors,
            handleChange: this.handleChange,
            handleSelectDecoration: this.handleSelectDecoration,
            handleChangeDate: this.handleChangeDate,
        });
    }
}

export default RegisterAllocation;
