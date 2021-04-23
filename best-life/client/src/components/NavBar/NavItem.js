import React from "react";


class NavItem extends  React.Component {
    render() {
        return(
            <button className="nav-item">
                {this.props.name}
            </button>
    );
        }
}
export default NavItem;