import React from  'react';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class RegisterAllocation extends React.Component {
    state = {};

    handleSubmit = (e) => {
        e.preventDefault();
    };

    render () {
        return this.props.render({
            state: this.state,
            hasErrors,
        });
    }
}

export default RegisterAllocation;
