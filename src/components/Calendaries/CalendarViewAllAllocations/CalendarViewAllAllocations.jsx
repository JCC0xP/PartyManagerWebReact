import React, { Component } from 'react';
import moment from 'moment';
import { Badge } from 'antd';
import { request } from 'graphql-request';
import swal from 'sweetalert2';

import { selectAllAllocations } from './Queries';

import mockAllAllocationsPerDays from '../../../constants/mockAllAllocationsPerDays';

class CalendarViewAllAllocations extends Component {
    state = {
        value: moment().format('DD/MM/YYYY'),
        selectedValue: moment().format('DD/MM/YYYY'),
        allAllocations: mockAllAllocationsPerDays,
        allocationsOfDay: [],
        loading: true,
    };

    componentWillMount() {
        this._handleRequestAllAllocations();
    }

    componentDidMount() {
        this.onFilterAllocationsOnSelectedDay(moment());
    }

    _handleRequestAllAllocations = () => {
        const variables = {
            date: '',
        };
        request(
            process.env.API || 'http://localhost:3003/graphql',
            selectAllAllocations,
            JSON.stringify(variables)
        )
            .then(data => {
                this.setState({
                    allAllocations: data.allAllocations,
                });
            })
            .catch(err => {
                swal({
                    title: 'Erro ao realizar a chamada',
                    text: 'API está fora ou o request está errado',
                    type: 'error'
                });
            });
    };

    onFilterAllocationsOnSelectedDay = (value) => {
        const { allAllocations } = this.state;
        const data = allAllocations.filter(allocation => allocation.date === moment(value).format('DD/MM/YYYY'));
        this.setState({
            allocationsOfDay: (data[0] || {}).allocationsOfDay || [],
        });
        setTimeout(() => {this.setState({loading: false})}, 1000);
    };

    onSelect = (value) => {
        this.setState({
            value: moment(value).format('DD/MM/YYYY'),
            selectedValue: moment(value).format('DD/MM/YYYY'),
            loading: true,
        });

        this.onFilterAllocationsOnSelectedDay(value);
    };

    onPanelChange = (value) => {
        this.setState({ value: moment(value).format('DD/MM/YYYY') });
    };

    getListData = (value) => {
        const { allAllocations } = this.state;
        let listData = [];
        allAllocations.forEach(allocations => {
            if (allocations.date === moment(value).format('DD/MM/YYYY')) {
                listData = [{ type: allocations.type }];
            }
        });
        return listData;
    };

    dateCellRender = (value) => {
        const listData = [...this.getListData(value)];
        return (
            <ul className="events">
                {
                    listData.map(item => (
                        <li key={item.id}>
                            <Badge status={item.type} />
                        </li>
                    ))
                }
            </ul>
        );
    };

    render() {
        return this.props.render({
            state: this.state,
            onSelect: this.onSelect,
            onPanelChange: this.onPanelChange,
            dateCellRender: this.dateCellRender,
        });
    }
}

export default CalendarViewAllAllocations;
