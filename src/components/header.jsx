import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {

    constructor(props){
        super()
        this.len1 = props.len1
        this.len2 = props.len2
        this.len3 = props.len3
        this.len4 = props.len4
    }

    render(){
        
        // const len1 = this.props.headerLen[0];
        // const len2 = this.props.headerLen[1];
        // const len3 = this.props.headerLen[2];
        // const len4 = this.props.headerLen[3];

        const btnClickHandler = () => {
            const btn = document.getElementById('btn-click');
            const navContent = document.getElementById('nav-hidden-toggle');

            btn.classList.toggle('nav-btn-action');
            navContent.classList.toggle('nav-toggle');
        }

        return(
            <div>
                <div className="header-content">
                    <div className="header-nav-box">

                        <ul>
                            <li><Link to={"/"} className={this.len1}>top</Link></li>
                            <li><Link to={"/profile"} className={this.len2}>profile</Link></li>
                            <li><Link to={"/skill"} className={this.len3}>skill</Link></li>
                            <li><Link to={"/work"} className={this.len4}>work</Link></li>
                        </ul>
                        
                    </div>
                </div>

                <div className="nav-btn-content">
                    <div className="nav-btn" id="btn-click" onClick={()=>{btnClickHandler()}}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className="nav-hidden-content" id="nav-hidden-toggle">

                    <div className="nav-items">
                        <div className="nav-box">
                            <ul>
                                <li><Link to={"/myPortfolio"} className={this.len1}>top</Link></li>
                                <li><Link to={"/profile"} className={this.len2}>profile</Link></li>
                                <li><Link to={"/skill"} className={this.len3}>skill</Link></li>
                                <li><Link to={"/work"} className={this.len4}>work</Link></li>
                            </ul>
                        </div>
                    </div>

                </div>
            
            </div>
            
        )
    }
}

export default Header