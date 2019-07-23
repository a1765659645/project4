import React from 'react';
import style from './index.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IScroll from 'iscroll/build/iscroll-probe';
import imagesLoaded from 'imagesloaded';

class Content extends React.Component{
        render(){
                let { list, hasMore } = this.props;
                return (
                        <div className={ style["content-wrapper"] } ref={ el => this.scrollDom = el }>
                                <div className={ style["content-scroll"] }>
                                        {list.length > 0 && (
                                                <ul className="clearfix">
                                                        {list.map(item => (
                                                                <li key="item.id">
                                                                        <Link to={ `/detail/${ item.id }` }>
                                                                                <div className={ style["avatar-wrapper"] }>
                                                                                        <img src={ item.avatar } alt="" />
                                                                                </div>
                                                                                <p className="ellipsis">{ item.remark }</p>
                                                                                <h3 className="ellipsis">{ item.name }</h3>
                                                                                <span>￥{ item.price }</span>
                                                                        </Link>
                                                                </li>
                                                        ))}
                                                </ul>
                                        )}
                                        {hasMore ? (
                                                <p ref={ el => this.uploadTip = el }></p>
                                        ) : (
                                                <p>{ list.length > 0 ? '已到达底部..' : '暂无商品，敬请期待..' }</p>
                                        )}
                                </div>
                        </div>
                );
        }
        componentDidUpdate() { this.initAndRefresh(); }
        componentWillUnmount() {
                if(this.scroll) {
                        this.scroll.destroy();
                        this.scroll = null;
                }
        }
        initAndRefresh() {
                //
                if(this.props.hasMore) this.uploadTip.innerText = '上拉加载';
                imagesLoaded(this.scrollDom, () => {
                        setTimeout(() => {
                                if(!this.scroll) {
                                        let isLoading = false, threshold = 50, that = this;
                                        this.scroll = new IScroll(this.scrollDom, { click: true, probeType: 2 });
                                        this.scroll.on('scroll', function() {   //用户在拖，还没有放手
                                                if(that.props.hasMore && !isLoading) {
                                                        if(this.y < 0 && this.maxScrollY - this.y >= threshold) {
                                                                that.uploadTip.innerText = '放手立即加载...';
                                                                that.loadFlag = true;
                                                        }
                                                        else {
                                                                that.uploadTip.innerText = '上拉加载...';
                                                                that.loadFlag = false;
                                                        }
                                                }
                                        });
                                        this.scroll.on('scrollEnd', () => {     //放手
                                                if(this.loadFlag) {
                                                        this.loadFlag = false;
                                                        isLoading = true;
                                                        this.uploadTip.innerText = '加载中...';
                                                        setTimeout(() => {
                                                                this.props.loadMore()
                                                                        .then(() => isLoading = false);
                                                        },1000);
                                                }
                                        });
                                } else this.scroll.refresh();
                        }, 20)
                })
        }
}

Content.propsTypes = {
        list: PropTypes.array.isRequired,
        hasMore: PropTypes.bool.isRequired,
        loadMore: PropTypes.func.isRequired
};

export default Content;