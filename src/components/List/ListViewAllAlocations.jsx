import React from 'react';
import { List, Avatar } from 'antd';

const ListViewAllAllocations = (props) => (
    <List
        className={`animated ${props.loading ? 'rubberBand' : ''}`}
        style={{ padding: '30px', backgroundColor: '#ebebeb' }}
        itemLayout="horizontal"
        dataSource={props.allocationsOfDay}
        renderItem={item => (
            <List.Item>
                <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href="https://ant.design">{item.decoration}</a>}
                    description={`${item.name} ${item.date} ${item.type} ${item.street || ''}`}
                />
            </List.Item>
        )}
    />
);

export default ListViewAllAllocations;
