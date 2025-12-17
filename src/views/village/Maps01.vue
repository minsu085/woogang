<template>
    <!-- SUB VISUAL -->
    <SubTop
    title="마을지도"
    visual-class="visual02"
    :nav-groups="navGroups"
    />

    <!-- CONTENT -->
    <main id="maps" class="maps01">
        <div class="inner m_center">

            <div class="title hc fs36 fwtbold t_center">역사와 이야기가<br class="mo_view"> 있는 마을</div>

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
                    <img src="@/assets/img/sub/maps_slide_1_1.jpg" alt="슬라이드1" />
                </SwiperSlide>

                <SwiperSlide class="slide img">
                    <img src="@/assets/img/sub/maps_slide_1_2.jpg" alt="슬라이드2" />
                </SwiperSlide>

                <SwiperSlide class="slide img">
                    <img src="@/assets/img/sub/maps_slide_1_3.jpg" alt="슬라이드3" />
                </SwiperSlide>

                <SwiperSlide class="slide img">
                    <img src="@/assets/img/sub/maps_slide_1_1.jpg" alt="슬라이드1" />
                </SwiperSlide>

                <SwiperSlide class="slide img">
                    <img src="@/assets/img/sub/maps_slide_1_2.jpg" alt="슬라이드2" />
                </SwiperSlide>

                <SwiperSlide class="slide img">
                    <img src="@/assets/img/sub/maps_slide_1_3.jpg" alt="슬라이드3" />
                </SwiperSlide>
            </Swiper>

            <ul class="lstArea inn960 m_center">
                <li class="lst flex">
                    <div class="tit hc fs32 fwtbold">
                        <img src="@/assets/img/sub/maps_ico_1_1.png" alt="아이콘" class="ico">
                        송산리
                    </div>
                    <div class="wrt fs18 lh150 fc33">
                        당산(79m)의 이름에서 유래, 전통적으로 마을 수호신앙이 자리한 역사적인 마을입니다. 구릉과 평야가 공존하며, 소나무 숲이 마을을 감싸고 있어 ‘관음사 돌미륵’, ‘당산
                        신앙’, ‘거북재·소금고개 전설’이 전해지고 있습니다. 한국전쟁 당시 민간인 집단 학살지로도 기록되어 농업과 함께 전쟁의 아픈 기억을 간직한 마을. 기억과 추모의 장소로
                        의미 있는 마을입니다.
                    </div>
                </li>
                <li class="lst flex">
                    <div class="tit hc fs32 fwtbold">
                        <img src="@/assets/img/sub/maps_ico_1_2.png" alt="아이콘" class="ico">
                        원치리
                    </div>
                    <div class="wrt fs18 lh150 fc33">
                        원치리 이름의 ‘치(峙)’는 고개를 의미하며, 한국전쟁 시기 피난민이 모여 정착한 역사가 있습니다. 서쪽 구릉지에 자리해 평야와 산지가 공존하고 전통 고갯길이 마을의 중심
                        공간으로, 충청남도 지정문화재인 한갑동 고택, 토성 유적 등이 있어 문화유산 가치가 높은 마을입니다. 현재는 농업과 더불어 역사문화 교육 자원으로 활용 가능성이 큰 마을 중
                        하나입니다.
                    </div>
                </li>
                <li class="lst flex">
                    <div class="tit hc fs32 fwtbold">
                        <img src="@/assets/img/sub/maps_ico_1_3.png" alt="아이콘" class="ico">
                        신촌리
                    </div>
                    <div class="wrt fs18 lh150 fc33">
                        ‘새로 생긴 마을’이라는 이름처럼, 이주민과 후발 정착민들이 모여 형성된 곳입니다. 평야지대에 위치해 집들이 모여 있는 소규모 취락 구조를 이루고 있습니다. 개척과 정착의
                        역사가 담긴 마을로, 지금은 현대식 농가주택과 전통 농업이 공존하는 신흥 농촌 마을로 자리 잡고 있습니다.
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