import React from "react";
import Header from "../components/header";

class Work extends React.Component {
    render(){
        const workLen = ['no','no','no','now'];
        return(
            <div>
                <Header headerLen = {workLen} />
                <h1>Work</h1>
            </div>
        )
    }
}

export default Work