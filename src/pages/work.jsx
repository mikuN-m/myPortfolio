import React from "react";
import Header from "../components/header"
import work1 from "/work-img1.png"
import work2 from "/work-img2.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../assets/swiper.css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Link } from "react-router-dom";

class Work extends React.Component {
    render(){
        const workLen = ['no','no','no','tab-now'];

        // img表示
        const workImgBox = ["work1","work2"];
        const workImgList = [];

        workImgBox.forEach((item,index) => {
            workImgList.push(
                <SwiperSlide>
                    <div className="work-img img" id={item} onClick={()=>modalClickHandler(index)}></div>
                </SwiperSlide>
            );
        });

        // modal表示
        const modalBox = [
            [work1,'予約サイト','EJS・JavaScript・CSS','Node.js',
            '予約ができるサイトです。ログイン、プラン閲覧、予約等の機能を作りました。',
            'https://github.com/mikuN-m/camp'
            ],
            [work2,'自己紹介サイト','・EJS・CSS','vite・React',
            '自己紹介サイトです',
            'https://github.com/mikuN-m/myPortfolio'
            ]
        ];
        const modalList = [];

        modalBox.forEach((item,index) => {
            modalList.push(
                <div className="modal-wrapper modal-click">

                    <div className="modal-content">

                        <div className="modal-box">
                            <div className="modal">

                                <div className="modal-bac" onClick={()=>{modalBacClickHandler(index)}}>
                                    <span className="material-symbols-outlined">
                                        close
                                    </span>
                                </div>

                                <div className="modal-img">
                                    <img src={item[0]} />
                                </div>                        
                                    
                                <div className="modal-text-item">
                                    <h1 className="modal-title">{item[1]}</h1>

                                    <h2>使用言語</h2>
                                    <p>{item[2]}</p>

                                    <h2>開発環境</h2>
                                    <p>{item[3]}</p>

                                    <div className="modal-text">
                                        <p>{item[4]}</p>
                                        <p className="modal-github-lick">
                                            <Link to={item[5]} target="_block">
                                                GitHubはこちら
                                                <span className="material-symbols-outlined">
                                                    arrow_forward_ios
                                                </span>
                                            </Link>
                                        </p>
                                    </div>  
                                </div>                                  
                                
                            </div>
                        </div>

                        
                    </div>

                </div>
            )
            
        })

        const modal = document.getElementsByClassName('modal-click');
        const modalClickHandler = (item) => {
            modal[item].style.display = 'block';
        };

        const modalBacClickHandler = (item) => {
            modal[item].style.display = 'none'; 
        };

        return(
            <div>
                <Header headerLen = {workLen} />

                <div className="header-titel-hidden">
                    <h1>work</h1>
                </div>

                <div className="js-nav-target">

                    <div className="work-box">
                        <Swiper
                            cssMode={true}
                            navigation={true}
                            pagination={true}
                            mousewheel={true}
                            keyboard={true}
                            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                            className="mySwiper"
                        >
                            {workImgList}
                        </Swiper>
                    </div>

                </div>

                {modalList}
                
            </div>
        )
    }
}

export default Work