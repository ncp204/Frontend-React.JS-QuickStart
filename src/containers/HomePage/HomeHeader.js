import React, { Component } from "react";
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl'

import './HomeHeader.scss';

class HomeHeader extends Component {

    render() {
        console.log('check props', this.props);
        return (
            <>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            <i className="fas fa-bars" />
                            <div className="header-logo">

                            </div>
                        </div>
                        <div className="center-content">
                            <div className="child-content">
                                <b><FormattedMessage id="home-header.speciality" /></b>
                                <div className="sub-title"><FormattedMessage id="home-header.search-doctor" /></div>
                            </div>
                            <div className="child-content">
                                <b><FormattedMessage id="home-header.health-facility" /></b>
                                <div className="sub-title"><FormattedMessage id="home-header.selected-room" /></div>
                            </div>
                            <div className="child-content">
                                <b><FormattedMessage id="home-header.doctor" /></b>
                                <div className="sub-title"><FormattedMessage id="home-header.select-doctor" /></div>
                            </div>
                            <div className="child-content">
                                <b><FormattedMessage id="home-header.fee" /></b>
                                <div className="sub-title"><FormattedMessage id="home-header.check-health" /></div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="support">
                                <i className="fas fa-question-circle" />
                                <FormattedMessage id="home-header.support" />
                            </div>
                            <div className="language-vi">VN</div>
                            <div className="language-en">EN</div>
                        </div>
                    </div>
                </div>
                <div className="home-header-banner">
                    <div className="content-up">
                        <div className="title1"> <FormattedMessage id="banner.title1" /></div>
                        <div className="title2"> <FormattedMessage id="banner.title2" /></div>
                        <div className="search">
                            <i className="fas fa-search" />
                            <input type="text" placeholder="Tìm chuyên khoa khám bệnh" />
                        </div>
                    </div>
                    <div className="content-down">
                        <div className="option">
                            <div className="option-child">
                                <div className="icon-child">
                                    <i className="fas fa-hospital" />
                                </div>
                                <div className="text-child"><FormattedMessage id="banner.child1" /></div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child">
                                    <i className="fas fa-mobile-alt" />
                                </div>
                                <div className="text-child"><FormattedMessage id="banner.child2" /></div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child">
                                    <i className="fas fa-procedures" />
                                </div>
                                <div className="text-child"><FormattedMessage id="banner.child3" /></div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child">
                                    <i className="fas fa-flask" />
                                </div>
                                <div className="text-child"><FormattedMessage id="banner.child4" /></div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child">
                                    <i className="fas fa-user-md" />
                                </div>
                                <div className="text-child"><FormattedMessage id="banner.child5" /></div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child">
                                    <i className="fas fa-briefcase-medical" />
                                </div>
                                <div className="text-child"><FormattedMessage id="banner.child6" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedin,
        lang: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);