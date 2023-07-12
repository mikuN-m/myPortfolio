import React from "react";
import Header from "../components/header";

class Profile extends React.Component {
    render(){
    const topLen = ['no','now','no','no'];
        return(
            <div>
                <Header headerLen = {topLen} />
                <h1>profile</h1>
            </div>
        )
    }
}

export default Profile