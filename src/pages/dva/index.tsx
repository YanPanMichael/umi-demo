import React, { Component } from 'react';
import { connect } from 'dva';

interface IndexProps {
  dispatch: Function
}

interface IndexState {

}

class index extends Component<IndexProps, IndexState> {

  handleClick = () => {
    this.props.dispatch({
      type: 'list',
      payload: '',
    })
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        dva
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
      example: state.example, //这里的example表示后面用this.props.example获取state（根节点）中exmpale命名空间（model的example.js中的state所有数据）的数据
  }
}

export default connect(mapStateToProps)(index);