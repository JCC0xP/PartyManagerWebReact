import React from 'react';
import { Calendar, Layout } from 'antd';

import CalendarViewAllAllocations from './CalendarViewAllAllocations';
import ListViewAllAllocations from '../../List/ListViewAllAlocations';

const CalendarAllAllocations = () => (
    <CalendarViewAllAllocations render={({ state, onSelect, onPanelChange, dateCellRender }) => (
        <Layout.Content>
            <Calendar
                style={{ background: '#fff', border: '1px solid #d9d9d9', borderRadios: '100px' }}
                className="animated bounceInDown"
                fullscreen={false}
                onPanelChange={onPanelChange}
                onSelect={onSelect}
                dateCellRender={dateCellRender}
            />
            <ListViewAllAllocations allocationsOfDay={state.allocationsOfDay} loading={state.loading} />
        </Layout.Content>
    )} />
);

export default CalendarAllAllocations;
