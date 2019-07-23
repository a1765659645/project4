//容器组件，主要为Left展示组件搜集数据，封装方法传给它，让它能良好的展示
import { connect } from 'react-redux';
import Left from '../presentation/Left';

//mapStateToProps的第一个参数总是state对象，还可以使用第二个参数，代表容器组件的props对象，收到上一级传来的数据，接着传给Left展示组件
//mapStateToProps是一个函数。它的作用就是像它的名字那样，建立一个从（外部的）state对象到（UI 组件的）props对象的映射关系。
//作为函数，mapStateToProps执行后应该返回一个对象，里面的每一个键值对就是一个映射
const mapStateToProps = ({ category: { list } }, props) => ({   //获取数据
        ...props,                                                                               //表示activeId，toggleId
        list: list.filter(item => item.fid === 0)
});

// connect(mapStateToProps, null)(Left); connect本身就可以封装一个组件，此代码表示为Left的容器组件
export default connect(mapStateToProps, null)(Left);