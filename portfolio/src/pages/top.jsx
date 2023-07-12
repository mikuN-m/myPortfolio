import React from "react";
import Header from "../components/header";

class Top extends React.Component {
    render(){
    const topLen = ['now','no','no','no'];
        return(
            <div>
                <Header headerLen = {topLen} />
                <div className="top-content content js-nav-target">

                    <div className="top-content-title">
                        <h1>Hello...</h1>
                    </div>

                </div>
            </div>
        )
    }
}

export default Top