import React from  'react';
import moment from 'moment';
import { request } from 'graphql-request';
import { Modal } from 'antd';

import { createAllocations } from './Queries';

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class RegisterAllocation extends React.Component {
    state = {
        avatar: 'https://cdn.iconscout.com/public/images/icon/premium/png-512/wolverine-logan-xman-marvel-avatar-head-people-39c887e125ffaefe-512x512.png',
        decoration: '',
        type: 'Pegue e monte',
        name: '',
        email: '',
        phone: '',
        date: moment().format('DD/MM/YYYY'),
    };

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
