import React from "react";
import Header from "../components/header"
import work1 from "../assets/work-img1.png"
import work2 from "../assets/work-img2.png"
import work3 from "../assets/work-img3.png"

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
        const workImgBox = ["work3","work2","work1"];
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
            [work3,'おしゃれなカフェ','jsx・tailwind','vite・React',
            'tailwindを使用したおしゃれなカフェのサイトです。',
            'https://github.com/mikuN-m/React-zakka','https://mikun-m.github.io/React-zakka/'
            ],
            [work2,'自己紹介サイト','jsx・CSS','vite・React',
            '自己紹介サイトです。',
            'https://github.com/mikuN-m/myPortfolio','no'
            ],
            [work1,'予約サイト','EJS・JavaScript・CSS','Node.js',
            '予約ができるサイトです。ログイン、プラン閲覧、予約等の機能を作りました。',
            'https://github.com/mikuN-m/camp','no'
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

                                    <h2>使用言語・ライブラリ</h2>
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

                <div className="shape-box">
                    <div className="bac-shape shape-9"></div>
                    <div className="bac-shape shape-10"></div>
                    <div className="bac-shape shape-11"></div>
                </div>

                <Header len1='no' len2='no' len3='no' len4='tab-now' />

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