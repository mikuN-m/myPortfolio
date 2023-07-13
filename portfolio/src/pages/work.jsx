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

        const workImg = [work1,work2];

        // const workBox = [
        //     [work1],
        //     [work2]
        // ];

        // const workList = [];

        // workBox.forEach((item) => {
        //     workList.push(
        //         <div className="modal-wrapper content js-modal-target">

        //             <div className="modal-content">

        //                 <div className="modal-box">
        //                     <div className="modal">

        //                         <img src={item[0]} />
                                
        //                     </div>
        //                 </div>

                        
        //             </div>

        //         </div>
        //     )
            
        // })


        const modalHandler = () => {
            const modal = document.getElementById('')
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
                            <SwiperSlide>
                                {/* publicからの画像の呼び出しがわからない */}
                                <div className="work-img" id="work1"></div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="work-img" id="work2"></div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        )
    }
}

export default Work