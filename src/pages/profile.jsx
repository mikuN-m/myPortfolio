import React from "react";
import Header from "../components/header";

class Profile extends React.Component {
    render(){
        return(
            <div>
                
                <div className="shape-box">
                    <div className="bac-shape shape-2"></div>
                    <div className="bac-shape shape-3"></div>
                    <div className="bac-shape shape-4"></div>
                </div>

                <Header len1='no' len2='tab-now' len3='no' len4='no' />           

                <div className="header-titel-hidden">
                    <h1>profle</h1>
                </div>
                
                <div className="content js-nav-target">
                    

                    <div className="profile-content">
                        <div className="profile-name">
                            <h1>にしまき みく</h1>
                        </div>

                        <div className="profile-text">
                            <p>
                                2003年12月9日生まれ、趣味はソロキャンプとドライブ、映画鑑賞です。<br />
                                よく作業に行き詰まると車で遠出してリフレッシュしています。
                                映画はホラーとアクションのジャンルをよく観ています。<br/><br/>
                                高校生の時、「プログラミングができたらかっこいいのでは」と思ったことがきっかけで勉強を始めました。<br/>
                                途中何度か挫折を経験しましたが、今では新しいことを学ぶことがとても楽しくなっています。<br/>
                                まだまだ未熟ですが、これからも沢山の事を学んでいきたいと思っています。
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Profile