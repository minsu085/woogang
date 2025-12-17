<template>

<!-- SUB VISUAL -->
    <SubTop
    title="다운로드"
    visual-class="visual03"
    :nav-groups="navGroups"
    />

<!-- CONTENT -->
<main id="download">
    <div class="inner inn1600 m_center">

        <div class="titArea t_center">
            <div class="tit hc fs36 fwtbold">다운로드</div>
            <div class="wrt fs18 lh150 fc33">
                우강면의 이야기와 흔적을 담은 자료실입니다.<br>
                연구와 교육, 그리고 기억의 공유를 위해 필요한 자료를 다운로드할 수 있습니다.
            </div>
        </div>

        <div id="boardTop" class="flex alc justy_btw">
            <div class="count fs16 fc33">
                총 <b>96</b>개의 게시물이 있습니다.
            </div>
            <div class="search">
                <input type="text" name="" value="" placeholder="검색어를 입력하세요." class="ipt">
                <button class="submitBtn"></button>
            </div>
        </div>

        <ul class="downLst">
            <li class="lst flex alc justy_btw">
                <div class="txtArea">
                    <div class="subj fs20 lh150">우강면 마을 연혁과 변천사(연도별 기록집)</div>
                    <div class="info fs16 fc88 lh150">
                        <span class="cate">문서</span>
                        <span class="date">2025.08.25</span>
                    </div>
                </div>
                <a href="#" class="downBtn fs18 fwtbold lh150">다운로드</a>
            </li>
            <li class="lst flex alc justy_btw">
                <div class="txtArea">
                    <div class="subj fs20 lh150">지역 주민 구술사 인터뷰 모음집</div>
                    <div class="info fs16 fc88 lh150">
                        <span class="cate">문서</span>
                        <span class="date">2025.08.25</span>
                    </div>
                </div>
                <a href="#" class="downBtn fs18 fwtbold lh150">다운로드</a>
            </li>
            <li class="lst flex alc justy_btw">
                <div class="txtArea">
                    <div class="subj fs20 lh150">우강면 주요 축제 사진</div>
                    <div class="info fs16 fc88 lh150">
                        <span class="cate">문서</span>
                        <span class="date">2025.08.25</span>
                    </div>
                </div>
                <a href="#" class="downBtn fs18 fwtbold lh150">다운로드</a>
            </li>
            <li class="lst flex alc justy_btw">
                <div class="txtArea">
                    <div class="subj fs20 lh150">경관 변화 지도 자료</div>
                    <div class="info fs16 fc88 lh150">
                        <span class="cate">문서</span>
                        <span class="date">2025.08.25</span>
                    </div>
                </div>
                <a href="#" class="downBtn fs18 fwtbold lh150">다운로드</a>
            </li>
            <li class="lst flex alc justy_btw">
                <div class="txtArea">
                    <div class="subj fs20 lh150">전통 가옥 및 건축양식 조사 보고서</div>
                    <div class="info fs16 fc88 lh150">
                        <span class="cate">문서</span>
                        <span class="date">2025.08.25</span>
                    </div>
                </div>
                <a href="#" class="downBtn fs18 fwtbold lh150">다운로드</a>
            </li>
        </ul>

        <div id="paging" class="flex alc justy_cnt">
            <a href="#" class="pg prev"></a>
            <a href="#" class="pg current">1</a>
            <a href="#" class="pg">2</a>
            <a href="#" class="pg">3</a>
            <a href="#" class="pg next"></a>
        </div>

    </div>
</main>

</template>

<script setup>

import SubTop from '@/components/SubTop.vue'

const navGroups = [
    {
        title: '체험하기',
        activeKey: 'experience',
        items: [
            {key: 'about', label: '아카이빙 소개', to: '/vision'},
            {key: 'village', label: '마을소개', to: '/maps01'},
            {key: 'experience', label: '체험하기', to: '/sights'},
            {key: 'community', label: '커뮤니티', to: '/notice'},
            {key: 'copyright', label: '저작권 정책', to: '/copyright'},
        ],
    },
    {
        title: '다운로드',
        activeKey: 'download',
        items: [
            {key: 'sights', label: '기록 속 명소', to: '/sights'},
            {key: 'download', label: '다운로드', to: '/download'},
        ],
    },
]

</script>