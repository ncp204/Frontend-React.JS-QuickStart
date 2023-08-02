import React, { Component } from "react";
import { connect } from 'react-redux';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


import './Specialty.scss';

import img from '../../../assets/images/specialty/112457-co-xuong-khop.jpg'
import { Button } from "reactstrap";

class MedicalFacility extends Component {

    render() {

        return (
            <>
                <div className="section-specialty">
                    <div className="specialty-content">
                        <div className="section-header">
                            <span className="section-title" >Bác sĩ nổi bật</span>
                            <Button className="btn-title" color="primary">Xem thêm</Button>
                        </div>
                        <Slider {...this.props.settings}>
                            <div className="img-customize">
                                <img src={img} />
                                <a href="/#">Bác sĩ chuyên khoa II</a>
                            </div>
                            <div className="img-customize">
                                <img src={img} />
                                <h3>Thần kinh</h3>
                            </div>
                            <div className="img-customize">
                                <img src={img} />
                                <h3>Tiêu hoá</h3>
                            </div>
                            <div className="img-customize">
                                <img src={img} />
                                <h3>Tim mạch</h3>
                            </div>
                            <div className="img-customize">
                                <img src={img} />
                                <h3>Tai mũi họng</h3>
                            </div>
                            <div className="img-customize">
                                <img src={img} />
                                <h3>Cột sống</h3>
                            </div>
                        </Slider>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedin,
        languageState: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);