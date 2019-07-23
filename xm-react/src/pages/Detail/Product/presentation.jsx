import React from 'react';
import style from './presentation.module.scss';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Presentation extends React.Component{
        render(){
                console.log(this.props);
                let { model, banner } = this.props;
                let settings = {
                        autoplay: true,
                        dots: true,
                        infinite: true,
                        speed: 500,
                        slidesToShow: 1,
                        slidesToScroll: 1
                };
                return (
                        <div className={ style.wrapper }>
                                <div className={ style.top }>
                                        <div><img className={ style.return } src="/images/detail/return.png" alt=""/></div>
                                        <img className={ style.more } src="/images/detail/more.png" alt=""/>
                                </div>
                                <ul className={ style.banner }>
                                        <Slider { ...settings }>
                                                {banner.map((item, i) => (
                                                        <li key={i}>
                                                                <img src={item} alt=""/>
                                                        </li>
                                                ))}
                                        </Slider>
                                </ul>
                                <div className={ style["price-wrapper"] }>
                                        <span className={ style.price }>￥<span>{ model.price }</span></span>
                                        <span>特价</span>
                                </div>
                                <div className={ style["name-wrapper"] }>
                                        <img src="/images/detail/mi.png" alt=""/>
                                        <span className={ style.name }>{ model.name }</span>
                                </div>
                                <div className={ style.remark }>{ model.remark }</div>
                        </div>
                );
        }
        componentDidMount() {

        }
}

Presentation.propTypes = {
        model: PropTypes.object.isRequired,
        banner: PropTypes.array
};

export default Presentation;