import React from "react";
import Header from "../components/header";
// import { defineConfig } from "vite";

class Top extends React.Component {
    render(){

        const topShape = document.getElementById('top-shape');
        // 時間帯によって図形の中身が変わる

        return(
            <div>
                <Header len1='tab-now' len2='no' len3='no' len4='no' />
                <div className="top-content">

                    <div className="top-content-title">
                        <h1>
                            <span className="top-anime">H</span>
                            <span className="top-anime">E</span>
                            <span className="top-anime">L</span>
                            <span className="top-anime">L</span>
                            <span className="top-anime">O</span>
                            <span className="top-anime">.</span>
                            <span className="top-anime">.</span>
                            <span className="top-anime">.</span>
                        </h1>
                    </div>

                </div>

                <div className="shape-box">
                    <div className="top-anime shape-1" id="top-shape"></div>
                </div>
            </div>
        )
    }
}

export default Top