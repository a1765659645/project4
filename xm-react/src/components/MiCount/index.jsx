import React from 'react';
import style from './index.module.scss';
import PropTypes from 'prop-types';

class MiCount extends React.PureComponent {
        constructor(props) {
                super(props);
                this.state = { loading: false };
                this.increase = this.increase.bind(this);
                this.decrease = this.decrease.bind(this);
        }
        render() {
                return (
                        <div className={ style["num-count"] }>
                                <span onClick={ this.decrease }> - </span>
                                <span className={ style.count }>{ this.props.count }</span>
                                <span onClick={ this.increase }> + </span>
                        </div>
                );
        }
        decrease() {
                if(this.props.count > 1 && !this.state.loading) {
                        this.setState({ loading: true });
                        this.props.decrease().then(() => this.setState({ loading: false }));
                }
                else alert('至少选择一件');
        }
        increase() {
                if(this.props.count < 5 && !this.state.loading) {
                        if(!this.state.loading) {
                                this.setState({ loading: true });
                                this.props.increase().then(() => this.setState({ loading: false }));
                        }
                }
                else alert('已达到购买上限');
        }
}

MiCount.propTypes = {
        count: PropTypes.number.isRequired,
        decrease: PropTypes.func.isRequired,
        increase: PropTypes.func.isRequired
};

export default MiCount;