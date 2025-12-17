<template>

    <!-- SUB VISUAL -->
    <SubTop
    title="우강면 역사"
    visual-class="visual02"
    :nav-groups="navGroups"
    />

    <!-- CONTENT -->
    <main id="history">
        <div class="inner inn1058 m_center">
            <div class="cont flex column alc t_center">
                <div class="subt fcb fs20 hc fwt300">Ugang-myeon History</div>
                <div class="tit hc fs44 fwtbold">우강 아카이브 연대기</div>
                <div class="wrt fs18 fc33 lh150">
                    우강면은 서해의 바람과 평야의 햇살 속에서 살아온 사람들의 이야기로 채워진 마을입니다.<br class="pc_view">
                    갯뚝을 막아 일군 땅에서 시작해, 전쟁의 아픔을 견디고, 마을마다 전해 내려온 전설과 믿음을 품어 오늘에 이르렀습니다.<br><br>

                    우강 아카이브는 <b>사라져가는 기억과 일상의 흔적들을 모아, 모두가 함께 나누고 미래로 전하는 공간</b>입니다.
                </div>
                <div class="mimg img">
                    <img src="@/assets/img/sub/history_img.jpg" alt="이미지">
                </div>
                <div class="prg sk fwt500 fs36 lh150">
                    이곳에서 <span class="fcdo">우강의 시간은 기록</span>이 되고, 기록은 다시 <span class="fcb">우리의 삶과 이어집니다.</span>
                </div>
            </div>

            <div class="timeline">
                <div class="txtArea">
                    <div class="tit flex alc hc fs24 fwtbold">
                        <img src="@/assets/img/sub/history_ico.svg" alt="아이콘" class="ico">
                        주요 타임라인
                    </div>
                    <div class="wrt fs18 fc33 lh150">
                        우강면은 원래 면천군과 홍주군의 일부가 합쳐져 1914년 행정구역 개편 때 범천면이라는 이름으로 출발했습니다. 이후 농민 운동과 일제강점기를 거쳐, 1942년 ‘우강면’으로
                        개칭되었습니다. 한국전쟁 시기에는 민간인 학살이라는 아픈 역사를 겪었고, 최근에는 『우강면지』 발간을 통해 역사와 문화를 기록·정리하며 마을 정체성을 이어가고 있습니다.
                    </div>
                </div>
                <ul class="lstArea fs18 fc66">
                    <li class="lst flex alc on">
                        <div class="year">2025</div>
                        <div class="txt">송산리 일대 한국전쟁 민간인 희생자 유해 발굴</div>
                    </li>
                    <li class="lst flex alc">
                        <div class="year">2014</div>
                        <div class="txt">교황 프란치스코 솔뫼성지 방문</div>
                    </li>
                    <li class="lst flex alc">
                        <div class="year">2014</div>
                        <div class="txt">우강면 행정복지센터 신청사 개청</div>
                    </li>
                    <li class="lst flex alc">
                        <div class="year">2008</div>
                        <div class="txt">『우강면지』 증보판 발간, 역사·농업·민속·문화유산·식생활 등 체계적 기록</div>
                    </li>
                    <li class="lst flex alc">
                        <div class="year">2003</div>
                        <div class="txt">향토 자료집 『우강면지』 초판 발간</div>
                    </li>
                    <li class="lst flex alc">
                        <div class="year">1984</div>
                        <div class="txt">교황 요한바오르 2세, 솔뫼성지 방문</div>
                    </li>
                    <li class="lst flex alc">
                        <div class="year">1950</div>
                        <div class="txt">한국전쟁 시기 민간인 학살 발생, 송산리 전파관리소 인근에서 약 90여 구 유해 발굴</div>
                    </li>
                    <li class="lst flex alc">
                        <div class="year">1942</div>
                        <div class="txt">범천면에서 우강면으로 명칭 변경 (‘우’는 우평, ‘강’은 강문평야에서 따옴)</div>
                    </li>
                    <li class="lst flex alc">
                        <div class="year">1924</div>
                        <div class="txt">합덕·우강·신평 지역 농민들이 참여한 당진 소작조합 결성 – 농민 권익 운동의 출발점</div>
                    </li>
                    <li class="lst flex alc">
                        <div class="year">1914</div>
                        <div class="txt">군·면 통폐합으로 면천군 일부와 홍주군 일부가 합쳐져 당진군 범천면으로 편입</div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="bg1 abs img">
            <img src="@/assets/img/sub/history_bg_1.png" alt="">
        </div>
        <div class="bg2 abs img">
            <img src="@/assets/img/sub/history_bg_2.png" alt="">
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
        title: '우강면 역사',
        activeKey: 'history',
        items: [
            {key: 'maps', label: '마을지도', to: '/maps01'},
            {key: 'history', label: '우강면 역사', to: '/history'},
            {key: 'archive', label: '주민 아카이빙', to: '/archive'},
            {key: 'video', label: '영상자료', to: '/video'},
        ],
    },
]
</script>