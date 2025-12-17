<template>

    <!-- SUB VISUAL -->
    <SubTop
    title="공지사항"
    visual-class="visual04"
    :nav-groups="navGroups"
    />

    <!-- CONTENT -->
    <main id="boardView">
        <div class="inner inn1600 m_center">

            <div class="titArea flex alend justy_btw">
                <div class="tit hc fs32 fwtbold">
                    우강면 디지털 아카이빙 서비스 정식 오픈
                </div>
                <div class="info flex fs16 fc88">
                    <span class="nots">공지</span>
                    <span>2025.08.25</span>
                    <span>관리자</span>
                </div>
            </div>

            <div class="fileArea fs16">
                <span class="opt fc33">첨부파일 :</span>
                <span class="name fc88">첨부파일이 없습니다.</span>
            </div>

            <div class="contArea">
                <img src="@/assets/img/sub/board_view_thumb.jpg" alt="">
                <p class="fs18 lh150 fc33">
                    우강면 디지털 아카이빙 홈페이지 오픈, 공지사항 예시 페이지 입니다.<br>
                    텍스트와 이미지, 첨부파일 업로드가 가능한 게시판이며 게시글은 관리자만 작성할 수 있습니다.
                </p>
            </div>

            <div class="lstBtn fs18 lh150 fwtbold">
                <a href="#" class="btn">목록으로</a>
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