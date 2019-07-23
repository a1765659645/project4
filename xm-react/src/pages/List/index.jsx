import React from 'react';
import Wrapper from './presentation/Wrapper';
import { connect } from 'react-redux';
import { CategoryActions } from "../../store/";

class List extends React.Component {
        render() {
                console.log('List组件调用了render函数...');
                let mId = parseInt(this.props.match.params.mId);
                let sId = parseInt(this.props.match.params.sId);
                this.mId = mId;
                this.sId = sId;
                return (
                        <Wrapper mId={ mId } sId={ sId } />
                );
        }
        componentDidMount() {
                //通知category仓库去初始化一级分类数据，主要是为了解决直接在list页面刷新的问题
                this.props.getData(0)
                        .then(result => {
                                if(typeof result !== 'undefined') {
                                        this.props.getData(parseInt(this.props.match.params.mId));
                                }
                        })
        }
        //当前组件被强化版路由Route组件渲染，创建一次后不会被销毁，同时带来了一问题：
        //只要路由变化，不管和不和我相关，我都会更新，这样就把后代阻件坑了，所以
        //我们要在shouldComponentUpdate生命周期钩子函数中进行渲染优化。
        shouldComponentUpdate(nextProps, nextState) {
                return /^\/list\/\d+\/\d+$/.test(nextProps.location.pathname) && (
                        this.mId !== parseInt(nextProps.match.params.mId) || this.sId !== parseInt(nextProps.match.params.sId)
                );
        }
}

const mapDispatchToProps = (dispatch, props) => ({      //通知仓库获取指定fid数据
        getData: fid => dispatch(CategoryActions.getData(fid))
});
export default connect(null, mapDispatchToProps)(List);