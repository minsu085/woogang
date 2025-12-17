<template>
    
    <!-- SUB VISUAL -->
    <SubTop
    title="주민 아카이빙"
    visual-class="visual02"
    :nav-groups="navGroups"
    />
    
    <!-- CONTENT -->
    <main id="archivingView">
        <div class="inner inn1600 m_center">
            
            <div class="contArea inn1058 m_center">
                <div class="tit hc fs36 fwtbold t_center">
                    사람 주제의 이미지
                </div>
                <div class="date fs18 lh150 fc88 t_center">
                    2025.08.25
                </div>
                <div class="thumb img">
                    <img src="@/assets/img/sub/arch_thumb.jpg" alt="">
                </div>
                <div class="wrt fs18 lh150">
                    사람 주제의 아카이빙 이미지가 노출되고, 아래 이미지와 관련된 짧은 설명글이 들어갈 예정입니다.<br>
                    사람 주제의 아카이빙 이미지가 노출되고, 아래 이미지와 관련된 짧은 설명글이 들어갈 예정입니다.
                </div>
                <div class="copy flex alc">
                    <img src="@/assets/img/sub/arch_con_img.png" alt="공공누리 이미지" class="copyImg">
                    <div class="txt lh150">
                        <div class="t1 fs18 fwt600">
                            제 4유형 : 출처표시 + 상업적 이용금지 + 변경금지
                        </div>
                        <div class="t2 fs16 fc33">
                            저작권 보호분야 <b>사람 주제의 이미지</b> 저작물은 공공누리 출처표시 조건에 따라 이용할 수 있습니다.
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="slideArea">
                <Swiper
                class="archViewSlide"
                :modules="modules"
                :loop="true"
                :autoplay="{ delay: 4000, disableOnInteraction: false }"
                :slides-per-view="5"
                :space-between="16"
                :centered-slides="true"
                :breakpoints="{
                    0: {
                        slidesPerView: 2.8,
                        spaceBetween: 6,
                    },
                    880: {
                        slidesPerView: 4.8,
                        spaceBetween: 16,
                    },
                }"
                :navigation="{
                    nextEl: '.archViewNext',
                    prevEl: '.archViewPrev',
                }"
                >
                    <SwiperSlide class="slide img">
                        <img src="@/assets/img/sub/arch_slide_1.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide class="slide img">
                        <img src="@/assets/img/sub/arch_slide_2.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide class="slide img">
                        <img src="@/assets/img/sub/arch_slide_3.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide class="slide img">
                        <img src="@/assets/img/sub/arch_slide_4.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide class="slide img">
                        <img src="@/assets/img/sub/arch_slide_5.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide class="slide img">
                        <img src="@/assets/img/sub/arch_slide_6.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide class="slide img">
                        <img src="@/assets/img/sub/arch_slide_1.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide class="slide img">
                        <img src="@/assets/img/sub/arch_slide_2.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide class="slide img">
                        <img src="@/assets/img/sub/arch_slide_3.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide class="slide img">
                        <img src="@/assets/img/sub/arch_slide_4.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide class="slide img">
                        <img src="@/assets/img/sub/arch_slide_5.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide class="slide img">
                        <img src="@/assets/img/sub/arch_slide_6.jpg" alt="" />
                    </SwiperSlide>
                </Swiper>
                
                <div class="swiper-button-prev archViewPrev"></div>
                <div class="swiper-button-next archViewNext"></div>
            </div>
        
            <div class="linkBtn fs18 fwtbold lh150 t_center">
                <a href="#" class="btn">목록으로</a>
            </div>
            
        </div>
    </main>

</template>

<script setup>

import SubTop from '@/components/SubTop.vue'

const navGroups = [
    {
        title: '마을소개',
        activeKey: 'village',
        items: [
            {key: 'about', label: '아카이빙 소개', to: '/vision'},
            {key: 'village', label: '마을소개', to: '/maps01'},
            {key: 'experience', label: '체험하기', to: '/sights'},
            {key: 'community', label: '커뮤니티', to: '/notice'},
            {key: 'copyright', label: '저작권 정책', to: '/copyright'},
        ],
    },
    {
        title: '주민 아카이빙',
        activeKey: 'archive',
        items: [
            {key: 'maps', label: '마을지도', to: '/maps01'},
            {key: 'history', label: '우강면 역사', to: '/history'},
            {key: 'archive', label: '주민 아카이빙', to: '/archive'},
            {key: 'video', label: '영상자료', to: '/video'},
        ],
    },
]

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'

// Swiper CSS
import 'swiper/css'
import 'swiper/css/navigation'

// 사용할 모듈 목록
const modules = [Navigation, Autoplay]

</script>