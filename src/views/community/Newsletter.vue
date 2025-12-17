<template>

    <!-- SUB VISUAL -->
     <SubTop
    title="우강면 소식지"
    visual-class="visual04"
    :nav-groups="navGroups"
    />

    <!-- CONTENT -->
    <main id="newsletter">
        <div class="inner inn1600 m_center">

            <div class="titArea t_center">
                <div class="tit hc fs36 fwtbold">
                    우강면 소식지
                </div>
                <div class="wrt fs18 lh150 fc33">
                    우강면 곳곳의 다양한 소식과<br class="mo_view"> 보도자료 등을 확인해 보세요.
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
                    <tr>
                        <td class="num">5</td>
                        <td class="subj">
                            <a href="#">우강면 주민총회서 9개 사업 확정.</a>
                        </td>
                        <td class="wrt">관리자</td>
                        <td class="date">2025.09.12</td>
                    </tr>
                    <tr>
                        <td class="num">4</td>
                        <td class="subj">
                            <a href="#">우강면 마을관리소 1주년 행사 개최</a>
                        </td>
                        <td class="wrt">관리자</td>
                        <td class="date">2025.09.05</td>
                    </tr>
                    <tr>
                        <td class="num">3</td>
                        <td class="subj">
                            <a href="#">충남 2호 '당진시 우강면 마을관리소' 개소</a>
                        </td>
                        <td class="wrt">관리자</td>
                        <td class="date">2025.08.29</td>
                    </tr>
                    <tr>
                        <td class="num">2</td>
                        <td class="subj">
                            <a href="#">당진 우강면, 삽교호 송전선로 노선 철회 및 지중화 요구</a>
                        </td>
                        <td class="wrt">관리자</td>
                        <td class="date">2025.08.28</td>
                    </tr>
                    <tr>
                        <td class="num">1</td>
                        <td class="subj">
                            <a href="#">당진시, 2024년 우강면민 화합 한마당 축제 성료</a>
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
        title: '우강면 소식지',
        activeKey: 'newsletter',
        items: [
        {key: 'notice', label: '공지사항', to: '/notice'},
        {key: 'newsletter', label: '우강면 소식지', to: '/newsletter'},
        {key: 'faq', label: 'FAQ', to: '/faq'},
        ],
    },
]
</script>