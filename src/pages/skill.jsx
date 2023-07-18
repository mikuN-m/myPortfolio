import React from "react";
import Header from "../components/header";

class Skill extends React.Component {
    render(){
        const skillLen = ['no','no','tab-now','no'];

        const skillBox = [
            ['HTML','見出しや段落、リスト、フォームなどの基本的な記述ができます。'],

            ['CSS',`サイトの外観のレイアウトや、アニメーションの設定、カラムレイアウトの作成ができます。
            現在はbootstrapなどのフレームワークなどについて勉強中です。`],

            ['JavaScript',`ユーザーの操作に応じてイベントリスナーを実行することができます。
                            for文、if文、関数やクラスなど基本的な構文をかけます。
                            Node.jsについても、セッションを用いてログイン、ログアウトなどのユーザー管理、
                            SQLとの接続と操作を行うことができます。
                            現在はReactやVue.jsなどのフレームワークについて勉強中です。`],

            ['Git','Githubとの接続やcommit、pushなどの初歩的な操作ができます。'],
        ];

        const skillList = [];

        skillBox.forEach(item => {
            skillList.push(
                <div className="skill-box">
                    <div className="skill-name">
                        <h1>{item[0]}</h1>
                    </div>
                    <div className="skill-text">
                        <p>
                            {item[1]}
                        </p>
                    </div>
                </div>
            )
        })

        return(
            <div>
                <Header headerLen = {skillLen} />
                
                <div className="content js-nav-target">

                    <div className="skill-content">

                        {skillList}

                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Skill