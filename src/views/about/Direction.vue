<template>

    <!-- SUB VISUAL -->
    <SubTop
    title="비전 및 목표"
    visual-class="visual01"
    :nav-groups="navGroups"
    />

    <!-- CONTENT -->
    <main id="directon">
        <div class="inner m_center inn1600">

            <div class="mapArea">
                <div class="img pc_view">
                    <img src="@/assets/img/sub/direc_map.jpg" alt="">
                </div>
                <div class="img mo_view">
                    <img src="@/assets/img/sub/direc_map_mo.jpg" alt="">
                </div>
            </div>

            <div class="direcArea flex alc">
                <div class="txtArea">
                    <div class="tit hc fs32 fwtbold lh130">
                        우강면행정복지센터<br class="mo_view"> <span class="fcb">찾아오시는 길</span>
                    </div>
                    <div class="wrt fs18 fc33">
                        우강면행정복지센터로 찾아오시는 정보입니다.
                    </div>
                </div>
                <ul class="infoArea flex">
                    <li class="flex alc fwt600 fs20">
                        <span class="prg fcf">주소</span>
                        <span class="txt">당진시 우강면 솔뫼로 51</span>
                    </li>
                    <li class="flex alc fwt600 fs20">
                        <span class="prg fcf">연락처</span>
                        <span class="txt">041-360-8451</span>
                    </li>
                </ul>
            </div>

            <div class="trafArea m_center">
                <div class="trafTit hc fs32 fwtbold">교통안내</div>
                <div class="trafDiv flex">
                    <div class="tit flex alc fs20 fwt600">
                        <img src="@/assets/img/sub/direc_ico_1.svg" alt="자가용 아이콘" class="ico">
                        자가용 이용  시
                    </div>
                    <ul class="lst01 fs18 fwt600 fc33">
                        <li>내비게이션 [우강면행정복지센터] 또는 [솔뫼로 51] 검색</li>
                        <li>
                            서해안고속도로 당진TG·IC 방면<br>
                            <span class="fwt400">합덕/예산 방면(국도 32호선) 진출 → ‘솔뫼성지’ 이정표 따라 우강면 진입 → 솔뫼로 51</span>
                        </li>
                    </ul>
                </div>
                <div class="trafDiv flex">
                    <div class="tit flex alc fs20 fwt600">
                        <img src="@/assets/img/sub/direc_ico_2.svg" alt="대중교통 아이콘" class="ico">
                        대중교통 이용 시
                    </div>
                    <ul class="lst02 flex fxwrap">
                        <li class="flex column">
                            <span class="num fs16 fwtbold fcf">240번</span>
                            <span class="txt fs18 fc33">합덕버스터미널 ↔ 우강면행정복지센터·보건지소 ↔ 솔뫼성지</span>
                        </li>
                        <li class="flex column">
                            <span class="num fs16 fwtbold fcf">552번</span>
                            <span class="txt fs18 fc33">정미/신평 방면 ↔ 우강면행정복지센터·보건지소</span>
                        </li>
                        <li class="flex column">
                            <span class="num fs16 fwtbold fcf">251번</span>
                            <span class="txt fs18 fc33">합덕버스터미널 ↔ 우강면행정복지센터 ↔ 당진보건소</span>
                        </li>
                        <li class="flex column">
                            <span class="num fs16 fwtbold fcf">554번</span>
                            <span class="txt fs18 fc33">합덕버스터미널 ↔ 우강면행정복지센터 ↔ 당진버스터미널</span>
                        </li>
                    </ul>
                </div>
            </div>

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
