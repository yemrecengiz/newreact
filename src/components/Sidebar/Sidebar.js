import React, { Component } from 'react';
import {Button} from "../Button"
import "./Sidebar.css"
class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar-main">
                <Button>Kullanıcı</Button>
                <Button>Firma</Button>
            </div>

        )
    }
}
export default Sidebar;