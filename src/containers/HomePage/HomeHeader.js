import React, { Component } from "react";
import { connect } from 'react-redux';

import './HomeHeader.scss';

class HomeHeader extends Component {

    render() {
        return (
            <div className="home-header-container">
                <div className="home-header-content">
                    <div className="left-content">
                        <i className="fas fa-bars" />
                        <div className="header-logo">

                        </div>
                    </div>
                    <div className="center-content">
                        <div className="child-content">
                            <b>Chuyên khoa</b>
                            <div className="sub-title">Tìm bác sĩ theo chuyên khoa</div>
                        </div>
                        <div className="child-content">
                            <b>Cơ sở y tế</b>
                            <div className="sub-title">Chọn bệnh viện phòng khám</div>
                        </div>
                        <div className="child-content">
                            <b> Bác sĩ</b>
                            <div className="sub-title">Chọn bác sĩ giỏi</div>
                        </div>
                        <div className="child-content">
                            <b>Gói khám</b>
                            <div className="sub-title">Khám sức khoẻ tổng quát</div>
                        </div>
                    </div>
                    <div className="right-content">
                        <div className="support">
                            <i className="fas fa-question-circle" />
                            Hỗ trợ
                        </div>
                        <div className="flag">VN</div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedin
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);