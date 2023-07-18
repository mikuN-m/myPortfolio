import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render(){
        const len1 = this.props.headerLen[0];
        const len2 = this.props.headerLen[1];
        const len3 = this.props.headerLen[2];
        const len4 = this.props.headerLen[3];

        const btnClickHandler = () => {
            const btn = document.getElementById('btn-click');
            const headerContent = document.getElementById('header-hidden-toggle');

            btn.classList.toggle('header-btn-action');
            headerContent.classList.toggle('header-toggle');
        }

        return(
            <div>
                <div className="header-content">
                    <div className="header-nav-box">

                        <ul>
                            <li><Link to={"/"} className={len1}>top</Link></li>
                            <li><Link to={"/profile"} className={len2}>profile</Link></li>
                            <li><Link to={"/skill"} className={len3}>skill</Link></li>
                            <li><Link to={"/work"} className={len4}>work</Link></li>
                        </ul>
                        
                    </div>
                </div>

                <div className="header-btn-content">
                    <div className="header-btn" id="btn-click" onClick={()=>{btnClickHandler()}}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className="header-hidden-content" id="header-hidden-toggle">

                </div>
            
            </div>
            
        )
    }
}

export default Header