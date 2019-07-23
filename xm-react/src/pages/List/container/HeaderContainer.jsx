import Header from '../presentation/Header';
import { connect } from 'react-redux';  //连接仓库，映射出state = { category：{ list } }。 从Wrapper得到 props = { mId }

const mapStateToProps = ({ category: { list } }, { mId }) => ({
        title: list.length > 0 ? list.find(item => item.id === mId).name : '',
        list: list.filter(item => item.fid === mId)
});
export default connect(mapStateToProps, null)(Header);