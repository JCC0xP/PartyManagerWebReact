import React from 'react';
import moment from 'moment';
import { Form, Input, Button, DatePicker, Col, Layout, Select, Radio } from 'antd';

import RegisterAllocation from './RegisterAllocation';

const { Content } = Layout;
const FormItem = Form.Item;
const InputGroup = Input.Group;
const { Option } = Select;
const { Button: RadioButton } = Radio;
const { Group: RadioGroup } = Radio;

const dateFormat = 'DD/MM/YYYY';

function disabledDate(current) {
    return current && current < moment().endOf('day');
}

const RegisterAllocationContent = () => (
    <RegisterAllocation render={({ state, hasErrors, handleChange, handleSelectDecoration, handleChangeDate, handleSubmit }) => (
        <Content style={{ padding: '0' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <Form layout="inline" onSubmit={handleSubmit}>
                    <FormItem label="Tema" style={{width: '100%', marginBottom: '1rem'}}>
                        <Select
                            onChange={handleSelectDecoration}
                            name="decoration"
                            value={state.decoration}
                            showSearch
                            style={{ width: '100%' }}
                            placeholder="Select a person"
                            optionFilterProp="children"
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="Tipo da locacao" style={{width: '100%', marginBottom: '1rem'}}>
                        <RadioGroup onChange={handleChange} name="type" defaultValue="Pegue e monte">
                            <RadioButton value="Pegue e monte">Pegue e monte</RadioButton>
                            <RadioButton value="Montagem">Montagem</RadioButton>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="Nome do cliente" style={{width: '100%'}}>
                        <Input name="name" value={state.name} onChange={handleChange} />
                    </FormItem>
                    <FormItem
                        label="E-mail"
                        style={{width: '100%'}}
                    >
                        <Input name="email" value={state.email} onChange={handleChange} />
                    </FormItem>
                    <FormItem
                        label="Telefone"
                        style={{width: '100%'}}
                    >
                        <InputGroup size="large" style={{width: '100%'}} name="phone" value={state.phone} onChange={handleChange}>
                            <Col span={5}>
                                <Input defaultValue="11" maxLength={2} />
                            </Col>
                            <div>
                                <Input maxLength={9} style={{width: '78%'}} />
                            </div>
                        </InputGroup>
                    </FormItem>
                    <FormItem
                        label="Data"
                        style={{width: '100%'}}
                    >
                        <DatePicker style={{width: '100%'}} name="date" disabledDate={disabledDate} defaultValue={moment()} onChange={handleChangeDate} format={dateFormat} />
                    </FormItem>
                    <FormItem>
                        <Button
                            type="primary"
                            htmlType="submit"
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

export default RegisterAllocationContent;
