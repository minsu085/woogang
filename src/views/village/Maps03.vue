
<template>

    <!-- SUB VISUAL -->
    <SubTop
    title="마을지도"
    visual-class="visual02"
    :nav-groups="navGroups"
    />

    <!-- CONTENT -->
    <main id="maps" class="maps03">
        <div class="inner m_center">

            <div class="title hc fs36 fwtbold t_center">물길 따라 열린 마을</div>

            <ul class="tabArea flex justy_cnt fs18 fc33">
                <li :class="{ on: $route.path === '/maps01' }">
                    <router-link to="/maps01">
                        역사와 이야기가<br class="mo_view" /> 있는 마을
                    </router-link>
                </li>
                <li :class="{ on: $route.path === '/maps02' }">
                    <router-link to="/maps02">
                        곡창의<br class="mo_view" /> 마을
                    </router-link>
                </li>
                <li :class="{ on: $route.path === '/maps03' }">
                    <router-link to="/maps03">
                        물길 따라<br class="mo_view" /> 열린 마을
                    </router-link>
                </li>
            </ul>

            <Swiper class="mapSlide" :modules="modules" v-bind="mapSlideOptions">
                <SwiperSlide class="slide img">
                    <img src="@/assets/img/sub/maps_slide_3_1.jpg" alt="슬라이드1" />
                </SwiperSlide>

                <SwiperSlide class="slide img">
                    <img src="@/assets/img/sub/maps_slide_3_2.jpg" alt="슬라이드2" />
                </SwiperSlide>

                <SwiperSlide class="slide img">
                    <img src="@/assets/img/sub/maps_slide_3_3.jpg" alt="슬라이드3" />
                </SwiperSlide>

                <SwiperSlide class="slide img">
                    <img src="@/assets/img/sub/maps_slide_3_1.jpg" alt="슬라이드1" />
                </SwiperSlide>

                <SwiperSlide class="slide img">
                    <img src="@/assets/img/sub/maps_slide_3_2.jpg" alt="슬라이드2" />
                </SwiperSlide>

                <SwiperSlide class="slide img">
                    <img src="@/assets/img/sub/maps_slide_3_3.jpg" alt="슬라이드3" />
                </SwiperSlide>
            </Swiper>

            <ul class="lstArea inn960 m_center">
                <li class="lst flex">
                    <div class="tit hc fs32 fwtbold">
                        <img src="@/assets/img/sub/maps_ico_3_1.png" alt="아이콘" class="ico">
                        강문리
                    </div>
                    <div class="wrt fs18 lh150 fc33">
                        ‘강의 문’이라는 이름에서 알 수 있듯, 삽교천 수운의 중요한 길목이었던 마을입니다. 과거에는 인천과 내륙을 잇는 수운 교통로로 번성했으며, 부리포 포구 자리로도 알려져
                        있습니다. 지금은 전통 포구 기능은 사라지고 농업 중심의 마을로 변했지만, 수운 문화와 교역의 기억이 살아 있는 역사적 장소입니다.
                    </div>
                </li>
                <li class="lst flex">
                    <div class="tit hc fs32 fwtbold">
                        <img src="@/assets/img/sub/maps_ico_3_2.png" alt="아이콘" class="ico">
                        대포리
                    </div>
                    <div class="wrt fs18 lh150 fc33">
                        ‘큰 포구’라는 이름 그대로, 한때 삽교천 수운의 중심지 중 하나였던 마을입니다. 교역과 이동이 활발했던 포구 기능을 잃고 지금은 농업 마을로 변했지만, 지명 속에 수운
                        문화의 흔적이 남아 있습니다. 포구를 기반으로 한 교류와 물길의 이야기가 전해 내려오는 마을입니다
                    </div>
                </li>
                <li class="lst flex">
                    <div class="tit hc fs32 fwtbold">
                        <img src="@/assets/img/sub/maps_ico_3_3.png" alt="아이콘" class="ico">
                        부장리
                    </div>
                    <div class="wrt fs18 lh150 fc33">
                        마을 이름에 ‘풍요롭고 오래 번영한다’는 의미가 담긴 부장리는 삽교호와 삽교천이 가까운 비옥한 평야지대에 자리합니다. 과거에는 우강면의 생활 거점 역할을 하였고, 물길과
                        연결된 생활문화가 발달했습니다. 지금도 농업이 중심이며, 주민 공동체 활동이 활발한 전통 농촌 마을입니다.
                    </div>
                </li>
            </ul>


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
        title: '마을지도',
        activeKey: 'maps',
        items: [
            {key: 'maps', label: '마을지도', to: '/maps01'},
            {key: 'history', label: '우강면 역사', to: '/history'},
            {key: 'archive', label: '주민 아카이빙', to: '/archive'},
            {key: 'video', label: '영상자료', to: '/video'},
        ],
    },
]


import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'

const modules = [Autoplay]

const mapSlideOptions = {
    autoplay: {
        delay: 4000,
    },
    loop: true,
    initialSlide: 0,      
    slidesPerView: 2,
    spaceBetween: 40,
    centeredSlides: true, 
    observer: true,
    observeParents: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        880: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
    },
}

</script>