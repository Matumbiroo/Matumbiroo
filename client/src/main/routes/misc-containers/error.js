import React from "react";

class Error extends React.Component {


    render() {
        const {errorMsg} = this.props.params;
        return (
            <div className="error">
                <h2>An Error Occured</h2>
                <p>{errorMsg}</p>
            </div>
        );
    }

}

export default Error;