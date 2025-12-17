<template>

    <!-- SUB VISUAL -->
    <SubTop
    title="비전 및 목표"
    visual-class="visual01"
    :nav-groups="navGroups"
    />

    <!-- CONTENT -->
    <main id="people">
        <div class="inner inn1600 m_center">

            <div class="title hc fs36 fwtbold t_center">
                <span class="fco">함께 모여 만드는</span><br class="mo_view"> 우강의 이야기
            </div>

            <div class="cont">
                <ul class="lstArea flex fxwrap inn1058 m_center">
                    <li class="flex column alc">
                        <span class="txt">당진시</span>
                        <span class="inblock img">
                            <img src="@/assets/img/sub/poeple_logo_1.png" alt="로고1">
                        </span>
                    </li>
                    <li class="flex column alc">
                        <span class="txt">당진도시공사</span>
                        <span class="inblock img">
                            <img src="@/assets/img/sub/poeple_logo_2.png" alt="로고2">
                        </span>
                    </li>
                    <li class="flex column alc">
                        <span class="txt">버그내순례길</span>
                        <span class="inblock img">
                            <img src="@/assets/img/sub/poeple_logo_3.png" alt="로고3">
                        </span>
                    </li>
                    <li class="flex column alc">
                        <span class="txt">당진시복지재단</span>
                        <span class="inblock img">
                            <img src="@/assets/img/sub/poeple_logo_4.png" alt="로고4">
                        </span>
                    </li>
                    <li class="flex column alc">
                        <span class="txt motxt">충남문화포털</span>
                        <span class="inblock img">
                            <img src="@/assets/img/sub/poeple_logo_5.png" alt="로고5">
                        </span>
                    </li>
                    <li class="flex column alc">
                        <span class="txt">줄다리기<br class="mo_view"> 디지털 아카이브</span>
                        <span class="inblock img">
                            <img src="@/assets/img/sub/poeple_logo_6.png" alt="로고6">
                        </span>
                    </li>
                    <li class="flex column alc">
                        <span class="txt">당진시청소년재단</span>
                        <span class="inblock img">
                            <img src="@/assets/img/sub/poeple_logo_7.png" alt="로고7">
                        </span>
                    </li>
                    <li class="flex column alc">
                        <span class="txt">삼선산수목원</span>
                        <span class="inblock img">
                            <img src="@/assets/img/sub/poeple_logo_8.png" alt="로고8">
                        </span>
                    </li>
                    <li class="flex column alc">
                        <span class="txt motxt">당진문화관광</span>
                        <span class="inblock img">
                            <img src="@/assets/img/sub/poeple_logo_9.png" alt="로고9">
                        </span>
                    </li>
                    <li class="flex column alc">
                        <span class="txt">당진도시재생<br class="mo_view"> 지원센터</span>
                        <span class="inblock img">
                            <img src="@/assets/img/sub/poeple_logo_10.png" alt="로고10">
                        </span>
                    </li>
                    <li class="flex column alc">
                        <span class="txt">당진시설관리사업소</span>
                        <span class="inblock img">
                            <img src="@/assets/img/sub/poeple_logo_11.png" alt="로고11">
                        </span>
                    </li>
                    <li class="flex column alc">
                        <span class="txt">당진농업기술센터</span>
                        <span class="inblock img">
                            <img src="@/assets/img/sub/poeple_logo_12.png" alt="로고12">
                        </span>
                    </li>
                </ul>
            </div>

        </div>

        <div class="ill01 img abs">
            <img src="@/assets/img/sub/poeple_ill_1.png" alt="일러스트1">
        </div>
        <div class="ill02 img abs">
            <img src="@/assets/img/sub/poeple_ill_2.png" alt="일러스트2">
        </div>
    </main>

</template>

<script setup>
import SubTop from '@/components/SubTop.vue'

const navGroups = [
    {
        title: '아카이빙 소개',
        activeKey: 'about',
        items: [
            {key: 'about', label: '아카이빙 소개', to: '/vision'},
            {key: 'village', label: '마을소개', to: '/maps01'},
            {key: 'experience', label: '체험하기', to: '/sights'},
            {key: 'community', label: '커뮤니티', to: '/notice'},
            {key: 'copyright', label: '저작권 정책', to: '/copyright'},
        ],
    },
    {
        title: '비전 및 목표',
        activeKey: 'people',
        items: [
            {key: 'vision', label: '비전 및 목표', to: '/vision'},
            {key: 'people', label: '함께하는 사람들', to: '/people'},
            {key: 'direction', label: '오시는 길', to: '/direction'},
        ],
    },
]
</script>