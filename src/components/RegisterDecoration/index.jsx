import React from 'react';
import { Form, Input, Button, Layout, InputNumber } from 'antd';

import RegisterDecoration from './RegisterDecoration';

const { Content } = Layout;
const FormItem = Form.Item;

const RegisterDecorationContent = () => (
    <RegisterDecoration render={({ state, hasErrors, handleChange, handleSubmit, handleChangeNumber }) => (
        <Content style={{ padding: '0' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <Form layout="inline" onSubmit={handleSubmit}>
                    <FormItem label="Nome da decoracao" style={{width: '100%'}}>
                        <Input name="name" value={state.name} onChange={handleChange} />
                    </FormItem>
                    <FormItem
                        label="Icone da decoracao"
                        style={{width: '100%'}}
                    >
                        <Input name="avatar" value={state.avatar} onChange={handleChange} />
                    </FormItem>
                    <FormItem>
                        <img src={state.avatar} alt="preview" style={{ width: '100px', height: '100px' }} />
                    </FormItem>
                    <br />
                    <FormItem label="Quantidade disponivel dessa decoracao">
                        <InputNumber name="amountDecoration" min={1} defaultValue={1} onChange={handleChangeNumber} value={state.amount} />
                    </FormItem>
                    <FormItem>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{marginTop: '2rem'}}
                        >
                            Cadastrar
                        </Button>
                    </FormItem>
                </Form>
            </div>
        </Content>
    )}
    />
);

export default RegisterDecorationContent;
