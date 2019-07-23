//这是根组件（vue中是App.vue）
//react 如何定义一个组件（类定义 / 函数定义）
//jsx表示可以在js文件中直接书写html内容，不用template包裹或注册
import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import NotLiveRoute from 'react-live-route';
import Pages from './pages';

const LiveRoute = withRouter(NotLiveRoute);
class App extends React.Component {
        //类方式定义组件必须要给render函数，且 render 函数必须要返回一个 jsx 对象。
        //我们要养成一个好习惯，每一块jsx元素 | 对象，最好用小括号包起来。
        render() {
                return (
                        <>
                                <Switch>
                                        <Route path="/" component={ Pages.Home } exact/>
                                        <Route path="/category" />
                                        <Route path="/list/:mId/:sId" />
                                        <Route path="/detail/:id" component={ Pages.Detail } />
                                        <Route path="/orderDetail/:orderId" component={ Pages.OrderDetail } />
                                        <Route path="/order" component={ Pages.Order } />
                                        <Route path="/taste" component={ Pages.Taste } />
                                        <Route path="/cart" component={ Pages.Cart } />
                                        <Route path="/profile" component={ Pages.Profile } />
                                        <Route path="/address" component={ Pages.Address } />
                                        <Route path="/login" component={ Pages.Login } />
                                        <Route path="*" component={ Pages.NotFound } />
                                </Switch>
                                <LiveRoute path="/category" component={ Pages.Category } alwaysLive={ true } />
                                <LiveRoute path="/list/:mId/:sId" component={ Pages.List } alwaysLive={ true } />
                        </>
                );
        }
}

export default App;