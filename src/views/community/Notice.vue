<template>

    <!-- SUB VISUAL -->
    <SubTop
    title="공지사항"
    visual-class="visual04"
    :nav-groups="navGroups"
    />

    <!-- CONTENT -->
    <main id="notice">
        <div class="inner inn1600 m_center">

            <div class="titArea t_center">
                <div class="tit hc fs36 fwtbold">
                    공지사항
                </div>
                <div class="wrt fs18 lh150 fc33">
                    우강면 디지털 아카이빙 사이트의<br class="mo_view"> 공지사항을 확인해보세요.
                </div>
            </div>

            <div id="boardTop" class="flex alc justy_btw">
                <div class="count fs16 fc33">
                    총 <b>5</b>개의 게시물이 있습니다.
                </div>
                <div class="search">
                    <input type="text" name="" value="" placeholder="검색어를 입력하세요." class="ipt">
                    <button class="submitBtn"></button>
                </div>
            </div>

            <table id="boardLst">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="notc">
                        <td class="num">공지</td>
                        <td class="subj">
                            <a href="#">우강면 디지털 아카이빙 서비스 정식 오픈</a>
                        </td>
                        <td class="wrt">관리자</td>
                        <td class="date">2025.09.19</td>
                    </tr>
                    <tr>
                        <td class="num">5</td>
                        <td class="subj">
                            <a href="#">2025년 10월 신규 자료 업로드 일정 안내</a>
                        </td>
                        <td class="wrt">관리자</td>
                        <td class="date">2025.09.12</td>
                    </tr>
                    <tr>
                        <td class="num">4</td>
                        <td class="subj">
                            <a href="#">지역 주민 구술사 인터뷰 참여자 모집</a>
                        </td>
                        <td class="wrt">관리자</td>
                        <td class="date">2025.09.05</td>
                    </tr>
                    <tr>
                        <td class="num">3</td>
                        <td class="subj">
                            <a href="#">아카이빙 사이트 정기 점검(10/15) 예정</a>
                        </td>
                        <td class="wrt">관리자</td>
                        <td class="date">2025.08.29</td>
                    </tr>
                    <tr>
                        <td class="num">2</td>
                        <td class="subj">
                            <a href="#">우강면 마을사진(1950~2000년대) 업로드 완료</a>
                        </td>
                        <td class="wrt">관리자</td>
                        <td class="date">2025.08.28</td>
                    </tr>
                    <tr>
                        <td class="num">1</td>
                        <td class="subj">
                            <a href="#">우강면 아카이빙 활용 교육 워크숍 개최</a>
                        </td>
                        <td class="wrt">관리자</td>
                        <td class="date">2025.08.27</td>
                    </tr>
                </tbody>
            </table>

            <div id="paging" class="flex alc justy_cnt">
                <a href="#" class="pg prev"></a>
                <a href="#" class="pg current">1</a>
                <a href="#" class="pg next"></a>
            </div>

        </div>
    </main>

</template>

<script setup>
import SubTop from '@/components/SubTop.vue'

// 메뉴 정보
const navGroups = [
    {
        title: '커뮤니티',
        activeKey: 'community',
        items: [
        {key: 'about', label: '아카이빙 소개', to: '/vision'},
        {key: 'village', label: '마을소개', to: '/maps01'},
        {key: 'experience', label: '체험하기', to: '/sights'},
        {key: 'community', label: '커뮤니티', to: '/notice'},
        {key: 'copyright', label: '저작권 정책', to: '/copyright'},
        ],
    },
    {
        title: '공지사항',
        activeKey: 'notice',
        items: [
        {key: 'notice', label: '공지사항', to: '/notice'},
        {key: 'newsletter', label: '우강면 소식지', to: '/newsletter'},
        {key: 'faq', label: 'FAQ', to: '/faq'},
        ],
    },
]
</script>