import React from 'react';
import Wrapper from './presentation/Wrapper';
import { connect } from 'react-redux';                          // 通过react-redux的connect函数方法映射仓库中的state数据
//import { actions } from '../../store/category.js';              //导入actions
import { CategoryActions } from '../../store';

class Category extends React.Component {
        constructor(props) {    //构造函数
                super(props);
                this.state = { activeId: 0 };
                this.toggleId = this.toggleId.bind(this);       //保持this的指向一直是本Category的toggleId.
                console.log('Category的constructor函数调用了...')
        }
        toggleId(activeId) {
                this.setState({ activeId });
                this.props.getData(activeId);
                // CategoryAPI.getData({ fid: activeId })
                //         .then(data => this.props.appendData(data));
        }
        render() {
                return (<Wrapper activeId={ this.state.activeId } toggleId={ this.toggleId } />);
        }
        componentDidMount() {   //当组件挂载完毕会调用此生命周期钩子函数
                this.props.getData(0)
                        .then(activeId => {
                                this.toggleId(activeId);
                        });
                // CategoryAPI.getData({ fid: 0 })         //发送ajax
                //         .then(data => {
                //                 console.log(data);
                //                 console.log(data[0].id);
                //                 this.toggleId(data[0].id);
                //                 console.log(this.toggleId(data[0].id));
                //                 this.props.appendData(data);
                //         });
        }
        //我是一个被加强版Route直接渲染的缓存组件，我只要创建完毕，就不会再被销毁了，但这同时也带来一个问题
        //只要路由变化，不管和不和我相关，我都会被绑架更新，太坑了！！原因是我是被Route直接渲染的组件，所以
        //我的props中会多出三个对象location、history、match，只要路由一变，这三个值就会自动变，它们一变我就会
        //刷新。幸好我有下面这个生命周期钩子函数，可以判断出马上要跳转的路由是不是和我相关，相关我才更新，
        //不相关我什么也不做
        shouldComponentUpdate(nextProps, nextState) {
                return nextProps.location.pathname === '/category' && this.state.activeId !== nextState.activeId;
        }
}

//mapDispatchToProps是connect函数的第二个参数，用来建立 UI 组件的参数到store.dispatch方法的映射。也就是说，它定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象
const mapDispatchToProps = dispatch => ({  //修改数据
                //appendData: data => dispatch(actions.appendData(data))  //通知category仓库改数据(即追加上data)
        getData: (activeId) => dispatch(CategoryActions.getData(activeId))
});

export default connect(null, mapDispatchToProps)(Category);

// mapStateToProps 作为connect 的第一个参数才会有它自己的一个参数state，此state就是从仓库映射过来的数据
// mapDispatchToProps 作为connect 的第二个参数，connect会强制给它一个参数dispatch


// const  mapStateToProps = state => ({
//         list: state.category.list
// });