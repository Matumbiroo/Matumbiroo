import React from 'react';

class RecentFifComponent extends React.Component {
    render() {
    return (
        <div className="recent-fifty-wrapper">
            <div className="profile-averages">Profile Averages</div>
            <div className="recent-fifty-artwork"></div>
            <div className="scroll-view"><span>/ last 50 songs /</span>
                {this.props.genRecentFifty()}
            </div>
        </div>
        )
    }
}

export default RecentFifComponent;
