import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render(){
        return(
            <div>
                <div className="header-content">
                    <div className="header-nav-box">

                        <ul>
                            <li><Link to={"/"} className="now">top</Link></li>
                            <li><Link to={"/profile"}>profile</Link></li>
                            <li><Link to={"/skill"}>skill</Link></li>
                            <li><Link to={"/work"}>work</Link></li>
                        </ul>
                        
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Header