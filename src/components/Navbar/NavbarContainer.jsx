import React from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";


class NavbarContainer extends React.Component {
    render() { //Классовая компонента обязательно должна иметь метод Render
        
        return (
            <Navbar {...this.props} auth={this.props.auth}/>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}

export default connect (mapStateToProps, {})(NavbarContainer);