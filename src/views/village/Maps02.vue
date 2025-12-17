
<template>

    <!-- SUB VISUAL -->
    <SubTop
    title="마을지도"
    visual-class="visual02"
    :nav-groups="navGroups"
    />

    <!-- CONTENT -->
    <main id="maps" class="maps02">
        <div class="inner m_center">

            <div class="title hc fs36 fwtbold t_center">곡창의 마을</div>

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
                    <img src="@/assets/img/sub/maps_slide_2_1.jpg" alt="슬라이드1" />
                </SwiperSlide>

                <SwiperSlide class="slide img">
                    <img src="@/assets/img/sub/maps_slide_2_2.jpg" alt="슬라이드2" />
                </SwiperSlide>

                <SwiperSlide class="slide img">
                    <img src="@/assets/img/sub/maps_slide_2_3.jpg" alt="슬라이드3" />
                </SwiperSlide>

                 <SwiperSlide class="slide img">
                    <img src="@/assets/img/sub/maps_slide_2_1.jpg" alt="슬라이드1" />
                </SwiperSlide>

                <SwiperSlide class="slide img">
                    <img src="@/assets/img/sub/maps_slide_2_2.jpg" alt="슬라이드2" />
                </SwiperSlide>

                <SwiperSlide class="slide img">
                    <img src="@/assets/img/sub/maps_slide_2_3.jpg" alt="슬라이드3" />
                </SwiperSlide>
            </Swiper>


            <ul class="lstArea inn960 m_center">
                <li class="lst flex">
                    <div class="tit hc fs32 fwtbold">
                        <img src="@/assets/img/sub/maps_ico_2_1.png" alt="아이콘" class="ico">
                        공포리
                    </div>
                    <div class="wrt fs18 lh150 fc33">
                        약 350년 전 박씨 성을 가진 인물이 갯뚝을 막아 개척하면서 형성된 마을로, 원공포·박원·홍원 등 세 마을이 모여 괴촌 형태를 이루고 있습니다. 간척과 개척의 역사가 살아
                        있는 이곳은 삽교천 인접 지역으로, 전통 농경문화와 간척지 농업의 상징적 마을입니다. 오늘날에도 벼농사가 활발하며, 마을 구조와 생활 모습이 비교적 잘 보존되어 있습니다.
                    </div>
                </li>
                <li class="lst flex">
                    <div class="tit hc fs32 fwtbold">
                        <img src="@/assets/img/sub/maps_ico_2_2.png" alt="아이콘" class="ico">
                        소반리
                    </div>
                    <div class="wrt fs18 lh150 fc33">
                        마을 이름은 ‘작은 분지’라는 뜻을 지니며, 예로부터 벼농사를 중심으로 발달했습니다. 집들이 모여 있는 괴촌 형태의 전형적인 농촌 마을로, 태고종 사찰인 부유사가 자리하여
                        신앙과 농경 문화가 공존합니다. 오늘날에도 공동체 의식이 뚜렷하며, 전통적 농업 마을의 면모를 유지하고 있습니다.
                    </div>
                </li>
                <li class="lst flex">
                    <div class="tit hc fs32 fwtbold">
                        <img src="@/assets/img/sub/maps_ico_2_3.png" alt="아이콘" class="ico">
                        성원리
                    </div>
                    <div class="wrt fs18 lh150 fc33">
                        넓은 소들강문 평야 한가운데 위치해 곡창지대의 심장부라 불리는 마을입니다. 지세가 평탄하고 경지정리가 잘 되어 있으며, 지방도 70호선을 따라 교통로 역할도 담당합니다.
                        농업 생산성이 뛰어나고, 예로부터 곡창으로서의 위상을 유지해 온 대표적인 농업 중심 마을입니다.
                    </div>
                </li>
                <li class="lst flex">
                    <div class="tit hc fs32 fwtbold">
                        <img src="@/assets/img/sub/maps_ico_2_4.png" alt="아이콘" class="ico">
                        세류리
                    </div>
                    <div class="wrt fs18 lh150 fc33">
                        마을 이름은 ‘가늘게 흐르는 물길(細流)’에서 유래되었습니다. 구릉과 평야가 어우러져 벼농사뿐 아니라 과수농업도 함께 발달해 있습니다. 마을을 흐르는 작은 물줄기가 예부터
                        주민 생활에 중요한 역할을 했으며, 오늘날에도 다양한 농업이 어우러지는 풍요로운 농촌 마을입니다.
                    </div>
                </li>
                <li class="lst flex">
                    <div class="tit hc fs32 fwtbold">
                        <img src="@/assets/img/sub/maps_ico_2_5.png" alt="아이콘" class="ico">
                        창리
                    </div>
                    <div class="wrt fs18 lh150 fc33">
                        이름에서 알 수 있듯, ‘곡식 창고’에서 유래한 마을로 예로부터 수확물을 저장하고 나누던 풍습이 남아 있습니다. 평야 지대에 위치해 농업 생산이 풍부하고, 곡창 마을로서
                        지역 생활의 중심지 역할을 해왔습니다. 오늘날에도 농업 전통이 이어지고 있으며, 아카이브 자료로 보존할 가치가 큰 마을입니다.
                    </div>
                </li>
                <li class="lst flex">
                    <div class="tit hc fs32 fwtbold">
                        <img src="@/assets/img/sub/maps_ico_2_6.png" alt="아이콘" class="ico">
                        내경리
                    </div>
                    <div class="wrt fs18 lh150 fc33">
                        우강면 동쪽 평야 지대에 위치한 농업 마을로, 벼농사가 중심입니다. 삽교호와 인접하여 물길이 생활과 밀접하게 연결되어 있으며, 오늘날에는 낚시와 여가 활동의 공간으로도
                        알려져 있습니다. 농업과 여가가 함께 공존하는 풍요로운 전원 마을입니다.
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