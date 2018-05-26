import React from 'react';
import { Form, Icon, Input, Button, DatePicker, Col, Layout, Select } from 'antd';

import RegisterAllocation from './RegisterAllocation';

const { Content } = Layout;
const FormItem = Form.Item;
const InputGroup = Input.Group;
const { Option } = Select;

const RegisterAllocationContent = () => (
    <RegisterAllocation render={(state, hasErrors) => (
        <Content style={{ padding: '0' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <Form layout="inline" onSubmit={this.handleSubmit}>
                    <FormItem label="Tema" style={{width: '100%', marginBottom: '1rem'}}>
                        <Select
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
                    <FormItem label="Tipo da alocacao" style={{width: '100%', marginBottom: '1rem'}}>
                        <Select
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
                    <FormItem label="Nome do cliente" style={{width: '100%'}}>
                        <Input />
                    </FormItem>
                    <FormItem
                        label="E-mail"
                        style={{width: '100%'}}
                    >
                        <Input />
                    </FormItem>
                    <FormItem
                        label="Telefone"
                        style={{width: '100%'}}
                    >
                        <InputGroup size="large" style={{width: '100%'}}>
                            <Col span={5}>
                                <Input defaultValue="0571" />
                            </Col>
                            <div>
                                <Input defaultValue="26888888" style={{width: '78%'}} />
                            </div>
                        </InputGroup>
                    </FormItem>
                    <FormItem
                        label="Data"
                        style={{width: '100%'}}
                    >
                        <DatePicker style={{width: '100%'}} />
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
