import React from "react";
import Header from "../components/header"
import work1 from "../assets/work-img1.png"
import work2 from "../assets/work-img2.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../assets/swiper.css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

class Work extends React.Component {
    render(){
        const workLen = ['no','no','no','now'];

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
            work1,work2
        ];
        const modalList = [];

        modalBox.forEach((item,index) => {
            modalList.push(
                <div className="modal-wrapper content modal-click">

                    <div className="modal-content">

                        <div className="modal-box">
                            <div className="modal">

                                <div className="modal-bac" onClick={()=>{modalBacClickHandler(index)}}></div>
                                <img src={item} />
                                
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


                <div className="content js-nav-target">

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