import React from "react";
import Header from "../components/header";

class Skill extends React.Component {
    render(){
        const skillLen = ['no','no','now','no'];
        return(
            <div>
                <Header headerLen = {skillLen} />
                <h1>skill</h1>
            </div>
        )
    }
}

export default Skill