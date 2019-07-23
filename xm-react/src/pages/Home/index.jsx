import React from 'react';
import style from './index.module.scss';
import { MiNav } from '../../components';
import Header from './Header';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';

class Home extends React.Component {
        render() {
                return (
                        <div className={ style["page-wrapper"] }>
                                <Header/>
                                <div className={ style.content }>
                                        <div className={ `${ style.banner } swiper-container` }>
                                                <div className="swiper-wrapper">
                                                        <div className="swiper-slide">
                                                                <img src="./images/banner/01.jpg" alt=""/>
                                                        </div>
                                                        <div className="swiper-slide">
                                                                <img src="./images/banner/02.jpg" alt=""/>
                                                        </div>
                                                        <div className="swiper-slide">
                                                                <img src="./images/banner/03.jpg" alt=""/>
                                                        </div>
                                                        <div className="swiper-slide">
                                                                <img src="./images/banner/04.jpg" alt=""/>
                                                        </div>
                                                        <div className="swiper-slide">
                                                                <img src="./images/banner/05.jpg" alt=""/>
                                                        </div>
                                                        <div className="swiper-slide">
                                                                <img src="./images/banner/06.jpg" alt=""/>
                                                        </div>
                                                </div>
                                                <div className="swiper-pagination"></div>
                                        </div>
                                        <div className={ style["ad-one"] }></div>
                                        <div className={ style.new }>
                                                <div className={ style["new-wrapper"] }>
                                                        <div><img src="./images/new/01.png" alt=""/><span>每日新品</span></div>
                                                        <div><img src="./images/new/02.png" alt=""/><span>小米众筹</span></div>
                                                        <div><img src="./images/new/03.png" alt=""/><span>限时抢购</span></div>
                                                        <div><img src="./images/new/04.png" alt=""/><span>热销榜单</span></div>
                                                        <div><img src="./images/new/05.png" alt=""/><span>随便逛逛</span></div>
                                                </div>
                                        </div>
                                        <div className={ style.venue }>
                                                <div className={ style["venue-wrapper"] }>
                                                        <div><span>运动好物轮番秒</span><span>全场最高直降300元</span><div></div></div>
                                                        <div><span>品质家电会场</span><span>爆款回归众筹价</span><div></div></div>
                                                        <div><span>智能酷玩专题</span><span>科技酷玩 品质生活</span><div></div></div>
                                                        <div><span>饮食年中大赏</span><span> 爆款大放送 美味齐分享</span><div></div></div>
                                                </div>
                                        </div>
                                        <div className={style.lucky}>
                                                <div></div>
                                        </div>
                                        <div className={ style.raise }>
                                                <div className={ style.title }>
                                                        <span>小米众筹</span>
                                                        <span>更多</span>
                                                        <img src="./images/more.png" alt=""/>
                                                </div>
                                                <div className={ style.learn }>
                                                        <div className={ style["learn-wrapper"] }>
                                                                <div>
                                                                        <span>杜丫丫AI英语学习机Pro</span>
                                                                        <p>0-8岁儿童英语启蒙|AI英语学习|语音智能交互|内容智能推荐|海量儿童资源</p>
                                                                        <span className={ style.price }>￥899</span>
                                                                </div>
                                                                <div><img src="./images/learn.png" alt=""/></div>
                                                        </div>
                                                        <div className={ style.progress }>
                                                                <div>
                                                                        <span>3280&nbsp;</span><span>/&nbsp;500人支持</span><span>爆</span><span>656%</span>
                                                                </div>
                                                                <div></div>
                                                        </div>
                                                </div>
                                                <div className={ style.product }>
                                                        <div className={ style["product-wrapper"] }>
                                                                <div className={ style.top }>
                                                                        <span className={ style.title }>小浪TDS即热上水器</span>
                                                                        <div className={ style["price-wrapper"] }>
                                                                                <span className={ style.price }>￥299</span>
                                                                                <img src="./images/home/01.png" alt=""/>
                                                                        </div>
                                                                        <div className={ style.bao }>
                                                                                <span>9998 </span><span>人支持&nbsp;</span><span>爆</span><span>999%</span>
                                                                        </div>
                                                                </div>
                                                                <div className={ style.progress }></div>
                                                        </div>
                                                        <div className={ style["product-wrapper"] }>
                                                                <div className={ style.top }>
                                                                        <span className={ style.title }>六竖智能杀菌筷筒</span>
                                                                        <div  className={ style["price-wrapper"] }>
                                                                                <span className={ style.price }>￥99</span>
                                                                                <img src="./images/home/02.png" alt=""/>
                                                                        </div>
                                                                        <div className={ style.bao }>
                                                                                <span>30902 </span><span>人支持&nbsp;</span><span>爆</span><span>1545%</span>
                                                                        </div>
                                                                </div>
                                                                <div className={ style.progress }></div>
                                                        </div>
                                                </div>

                                        </div>
                                        <div className={ style["ad-two"] }>
                                                <img src="./images/ad/ad2.jpeg" alt=""/>
                                        </div>
                                        <div className={ style["product-list"] }>
                                                <div>
                                                        <ul>
                                                                <li>
                                                                        <div><img src="./images/home/product/01.png" alt=""/></div>
                                                                        <span className={ style.title }>利仁可拆洗电烤盘</span>
                                                                        <span className={ style.price }>￥149</span>
                                                                </li>
                                                                <li className={ style.empty }></li>
                                                                <li>
                                                                        <div><img src="./images/home/product/02.png" alt=""/></div>
                                                                        <span className={ style.title }>左点2代智能艾灸盒</span>
                                                                        <span className={ style.price }>￥349</span>
                                                                </li>
                                                                <li className={ style.empty }></li>
                                                                <li>
                                                                        <div><img src="./images/home/product/03.png" alt=""/></div>
                                                                        <span className={ style.title }>秒秒测次氯酸钠消毒剂</span>
                                                                        <span className={ style.price }>￥39</span>
                                                                </li>
                                                        </ul>
                                                </div>
                                                <div>
                                                        <ul>
                                                                <li>
                                                                        <div><img src="./images/home/product/04.png" alt=""/></div>
                                                                        <span className={ style.title }>手机指环支架</span>
                                                                        <span className={ style.price }>￥28.9</span>
                                                                </li>
                                                                <li className={ style.empty }></li>
                                                                <li>
                                                                        <div><img src="./images/home/product/05.png" alt=""/></div>
                                                                        <span className={ style.title }>家用双层分类垃圾桶</span>
                                                                        <span className={ style.price }>￥169</span>
                                                                </li>
                                                                <li className={ style.empty }></li>
                                                                <li>
                                                                        <div><img src="./images/home/product/06.png" alt=""/></div>
                                                                        <span className={ style.title }>多功能手工水槽</span>
                                                                        <span className={ style.price }>￥849</span>
                                                                </li>
                                                        </ul>
                                                </div>
                                        </div>
                                        <div className={ style["ad-three"] }>
                                                <img src="./images/ad/ad3.jpeg" alt=""/>
                                        </div>
                                        <div className={ style["product-list"] }>
                                                <div>
                                                        <ul>
                                                                <li>
                                                                        <div><img src="./images/home/product/07.png" alt=""/></div>
                                                                        <span className={ style.title }>峰米WEMAX ONE激光投影电视套装</span>
                                                                        <span className={ style.price }>￥9999起</span>
                                                                </li>
                                                                <li className={ style.empty }></li>
                                                                <li>
                                                                        <div><img src="./images/home/product/08.png" alt=""/></div>
                                                                        <span className={ style.title }>美的采暖洗浴两用燃气壁挂炉 C11</span>
                                                                        <span className={ style.price }>￥4999起</span>
                                                                </li>
                                                                <li className={ style.empty }></li>
                                                                <li>
                                                                        <div><img src="./images/home/product/09.png" alt=""/></div>
                                                                        <span className={ style.title }>小米MIX 2S</span>
                                                                        <span className={ style.price }>￥1999起</span>
                                                                </li>
                                                        </ul>
                                                </div>
                                                <div>
                                                        <ul>
                                                                <li>
                                                                        <div><img src="./images/home/product/10.png" alt=""/></div>
                                                                        <span className={ style.title }>索尼WI-1000X颈挂式蓝牙降噪耳机</span>
                                                                        <span className={ style.price }>￥1499</span>
                                                                </li>
                                                                <li className={ style.empty }></li>
                                                                <li>
                                                                        <div><img src="./images/home/product/11.png" alt=""/></div>
                                                                        <span className={ style.title }>北面户外跑步鞋</span>
                                                                        <span className={ style.price }>￥459起</span>
                                                                </li>
                                                                <li className={ style.empty }></li>
                                                                <li>
                                                                        <div><img src="./images/home/product/12.png" alt=""/></div>
                                                                        <span className={ style.title }>小金走跑一体机</span>
                                                                        <span className={ style.price }>￥1699</span>
                                                                </li>
                                                        </ul>
                                                </div>
                                        </div>
                                </div>
                                <MiNav />
                        </div>
                );
        }
        //组件每一次挂载完毕后调用（相当于vue的mounted函数）
        //一般会在这个函数中发送ajax请求或通知仓库发ajax请求，组件需要的初始数据
        componentDidMount() {
                new Swiper ('.swiper-container', {
                        loop: true,  //循环
                        autoplay: {   //滑动后继续播放（不写官方默认暂停）
                                disableOnInteraction: false,
                        },
                        pagination: {  //分页器
                                el: '.swiper-pagination'
                        }
                })
        }

        //当前组件（子组件）的父组件更新时，当前组件（子组件）的componentWillReceiveProps会自动调用
        //无论父有没有传值给当前组件，或传了值，值有没有改都会强制调用
        //函数的参数：即将生效的新的props（nextProps）
        componentWillReceiveProps(nextProps) {
                // 技巧：在这个函数里用this.props可以得到当前props里面的数据
                // 技巧：可以通过参数nextProps得到即将要生效的props里面的数据
                // 技巧：我们可以在这个函数里做props的变化监听（相当于vue的watch）
                if(this.props.a !== nextProps.a) {

                }
                console.log('Home组件的componentWillReceiveProps调用了...');
        }
        // 这个函数一定要返回true | false，表示要不要让新的props或state生效，进而表示更新或不更新组件
        //如果不写出这个函数，默认就返回的是true，表示更新
        //如果写出来了，还没有显示return一个true，那么就表示return的是false，阻止新的props或state生效，进而阻止更新
        //参数分别是：即将生效的props，即将生效的state
        shouldComponentUpdate(nextProps, nextState) {
                // 技巧：在本函数中可以通过this.props访问当前的props，通过nextProps访问即将生效的props
                // 技巧：在本函数可以通过this.state访问当前的state，通过nextState访问即将生效的state
                // 技巧：可以在这个函数监听state的变化做出相应的处理
                // 技巧：对于展示组件这个生命周期函数的良好运用非常重要。可以避免很多不必要的重复渲染
                if(this.state.a !== nextState.a) {

                }
                console.log('Home组件的shouldComponentUpdate函数调用了...');
                return true;
        }
        //在组件更新前调用（一般用不上）
        //一般做一些更新前的准备工作
        componentWillUpdate() {
                console.log('Home组件的componentWillUpdate调用了..');
        }
        //在组件更新完毕后调用
        //关于dom的操作可以在这里进行。辟如，滚动相关的更新。IScroll插件
        componentDidUpdate() {
                console.log('Home组件的componentDidUpdate调用了...');
        }


        //组件将要被卸载前调用
        //一般会在这个函数中，释放内存空间
        componentWillUnmount() {
                console.log('Home组件将要被卸载销毁前调用componentWillUnmount..')
        }
}

export default Home;

// react组件在什么情况下会发生更新？
// 1. 组件从父组件接收的props值变化时会触发自身更新
// 2. 组件的state值发生变化会触发自身的更新
// 3. 父组件如果更新了，子组件会被连带更新