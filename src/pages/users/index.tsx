import React, { Component } from 'react';
import { Table, Button } from 'antd';

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

class index extends Component {
  handleClick = () => {
    fetch('/api/index').then(res => console.log('res', res)).catch(error => console.log('error', error))
  }
  render() {
    return (
      <div>
        <Button onClick={this.handleClick}>Mock test</Button>
        <Table className="list-table" dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}

export default index;