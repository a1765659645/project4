//这是展示组件Left，一定要对需要的数据有一个预期
//关注的是：要显示什么数据，怎么显示，关注样式
//不关注：数据怎么来
import React from 'react';
import style from './index.module.scss';
import PropTypes from 'prop-types';


class Left extends React.Component {
        render() {
                let { list, activeId, toggleId } = this.props;
                return (                                        //如果list.length>0返回下面的数据，否则返回<></>
                        <>
                                {list.length > 0 && (
                                        <ul className={ style.list }>
                                                {list.map(item => (
                                                        <li key={ item.id } className={ item.id === activeId ? style.active : '' }
                                                            onClick={ () => toggleId(item.id) }>
                                                                <span>{ item.name }</span>
                                                        </li>
                                                ))}
                                        </ul>
                                )}
                        </>
                );
        }
}

//表达出对所需数据的预期要求
Left.propTypes = {
        list: PropTypes.array.isRequired,
        activeId: PropTypes.number.isRequired,
        toggleId: PropTypes.func.isRequired
};

export default Left;