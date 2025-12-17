<template>
    
    <!-- SUB VISUAL -->
    <SubTop
    title="주민 아카이빙"
    visual-class="visual02"
    :nav-groups="navGroups"
    />
    
    <!-- CONTENT -->
    <main id="archiving">
        <div class="inner inn1600 m_center">
            
            <div class="titArea t_center">
                <div class="tit hc fs36 fwtbold">사람</div>
                <div class="wrt fs18 lh150 fc33">
                    우강의 시간은 곧 사람들의 이야기입니다. 이곳에서 태어나고, 살아가고,<br class="pc_view">
                    떠나간 이들의 웃음과 눈물이 곧 마을의 역사이자 기억이 됩니다.
                </div>
            </div>
            
            <ul class="tabArea flex justy_cnt fs18 lh150 fc33">
                <li class="on">사람</li>
                <li>자연</li>
                <li>학교</li>
                <li>신앙과 유산</li>
                <li>삶의 리듬</li>
            </ul>
            
            <div id="boardTop" class="flex alc justy_btw">
                <div class="count fs16 fc33">
                    총 <b>96</b>개의 게시물이 있습니다.
                </div>
                <div class="search">
                    <input type="text" name="" value="" placeholder="검색어를 입력하세요." class="ipt">
                    <button class="submitBtn"></button>
                </div>
            </div>
            
            <ul id="gallery" class="flex fxwrap">
                <li class="galLst">
                    <a href="">
                        <div class="subj">사람 주제의 이미지</div>
                        <div class="date">2025.08.25</div>
                        <div class="thumb img">
                            <img src="@/assets/img/sub/gallery_thumb_1.jpg" alt="">
                        </div>
                    </a>
                </li>
                <li class="galLst">
                    <a href="">
                        <div class="subj">사람 주제의 이미지</div>
                        <div class="date">2025.08.25</div>
                        <div class="thumb img">
                            <img src="@/assets/img/sub/gallery_thumb_2.jpg" alt="">
                        </div>
                    </a>
                </li>
                <li class="galLst">
                    <a href="">
                        <div class="subj">사람 주제의 이미지</div>
                        <div class="date">2025.08.25</div>
                        <div class="thumb img">
                            <img src="@/assets/img/sub/gallery_thumb_3.jpg" alt="">
                        </div>
                    </a>
                </li>
                <li class="galLst">
                    <a href="">
                        <div class="subj">사람 주제의 이미지</div>
                        <div class="date">2025.08.25</div>
                        <div class="thumb img">
                            <img src="@/assets/img/sub/gallery_thumb_4.jpg" alt="">
                        </div>
                    </a>
                </li>
                <li class="galLst">
                    <a href="">
                        <div class="subj">사람 주제의 이미지</div>
                        <div class="date">2025.08.25</div>
                        <div class="thumb img">
                            <img src="@/assets/img/sub/gallery_thumb_1.jpg" alt="">
                        </div>
                    </a>
                </li>
                <li class="galLst">
                    <a href="">
                        <div class="subj">사람 주제의 이미지</div>
                        <div class="date">2025.08.25</div>
                        <div class="thumb img">
                            <img src="@/assets/img/sub/gallery_thumb_2.jpg" alt="">
                        </div>
                    </a>
                </li>
                <li class="galLst">
                    <a href="">
                        <div class="subj">사람 주제의 이미지</div>
                        <div class="date">2025.08.25</div>
                        <div class="thumb img">
                            <img src="@/assets/img/sub/gallery_thumb_3.jpg" alt="">
                        </div>
                    </a>
                </li>
                <li class="galLst">
                    <a href="">
                        <div class="subj">사람 주제의 이미지</div>
                        <div class="date">2025.08.25</div>
                        <div class="thumb img">
                            <img src="@/assets/img/sub/gallery_thumb_4.jpg" alt="">
                        </div>
                    </a>
                </li>
            </ul>
            
            <div id="paging" class="flex alc justy_cnt">
                <a href="#" class="pg prev"></a>
                <a href="#" class="pg current">1</a>
                <a href="#" class="pg">2</a>
                <a href="#" class="pg">3</a>
                <a href="#" class="pg">4</a>
                <a href="#" class="pg">5</a>
                <a href="#" class="pg next"></a>
            </div>
            
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
        title: '주민 아카이빙',
        activeKey: 'archive',
        items: [
            {key: 'maps', label: '마을지도', to: '/maps01'},
            {key: 'history', label: '우강면 역사', to: '/history'},
            {key: 'archive', label: '주민 아카이빙', to: '/archive'},
            {key: 'video', label: '영상자료', to: '/video'},
        ],
    },
]

</script>
