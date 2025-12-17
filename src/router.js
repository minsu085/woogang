// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: "/",
        name: 'layout',
        component: () => import('@/layout/layout.vue'),
        children: [      
            {path: "/", redirect: ""},
            
            // 아카이빙 소개
            {path: "vision", name: "vision", component: () => import("@/views/about/Vision.vue"), meta: { title: '비전 및 목표' }}, 
            {path: "people", name: "people", component: () => import("@/views/about/People.vue"), meta: { title: '함께하는 사람들' }},
            {path: "direction", name: "direction", component: () => import("@/views/about/Direction.vue"), meta: { title: '오시는 길' }}, 
            
            // 마을 소개
            {path: "maps01", name: "maps01", component: () => import("@/views/village/Maps01.vue"), meta: { title: '마을지도' }},
            {path: "maps02", name: "maps02", component: () => import("@/views/village/Maps02.vue"), meta: { title: '마을지도' }},
            {path: "maps03", name: "maps03", component: () => import("@/views/village/Maps03.vue"), meta: { title: '마을지도' }},
            {path: "history", name: "history", component: () => import("@/views/village/History.vue"), meta: { title: '우강면 역사' }},
            {path: "archive", name: "archive", component: () => import("@/views/village/Archive.vue"), meta: { title: '주민 아카이빙' }},
            {path: "archive-detail", name: "archiveDetail", component: () => import("@/views/village/ArchiveDetail.vue"), meta: { title: '주민 아카이빙' }},
            {path: "video", name: "video", component: () => import("@/views/village/Video.vue"), meta: { title: '영상 자료' }}, 
            
            // 체험하기 
            {path: "sights", name: "sights", component: () => import("@/views/experience/Sights.vue"), meta: { title: '기록 속 명소' }},
            {path: "download", name: "download", component: () => import("@/views/experience/Download.vue"), meta: { title: '다운로드' }},
            
            // 커뮤니티 
            {path: "notice", name: "notice", component: () => import("@/views/community/Notice.vue"), meta: { title: '공지사항' }},
            {path: "board-detail", name: "boardDetail", component: () => import("@/views/community/boardDetail.vue"), meta: { title: '게시판 상세페이지' }},
            {path: "newsletter", name: "newsletter", component: () => import("@/views/community/Newsletter.vue"), meta: { title: '우강면 소식지' }},
            {path: "faq", name: "faq", component: () => import("@/views/community/Faq.vue"), meta: { title: 'FAQ' }},

            // 저작권 정책
            {path: "copyright", name: "copyright", component: () => import("@/views/copyright/Copyright.vue"), meta: { title: '저잭권 정책' }}
        ]
    },
    // 잘못된 URL은 전부 /메인 으로
    { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 1) 마을지도 탭끼리 이동할 때는 스크롤 위치 유지
        const isMapsRoute = (name) => ['maps01', 'maps02', 'maps03'].includes(name)
        
        if (isMapsRoute(to.name) && isMapsRoute(from.name)) {
            // 아무것도 반환하지 않거나 false 반환 → 기존 스크롤 유지
            return false
        }
        
        // 2) 그 외 나머지 페이지 이동은 항상 맨 위로
        return {
            top: 0,
            behavior: 'auto',
        }
    },
})

export default router;
