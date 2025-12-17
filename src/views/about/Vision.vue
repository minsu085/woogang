<template>

    <!-- SUB VISUAL -->
    <SubTop
    title="비전 및 목표"
    visual-class="visual01"
    :nav-groups="navGroups"
    />

    <main id="vision">

        <div class="s1">
            <div class="inner m_center inn1600 flex alc justy_btw">
                <div class="txtArea">
                    <div class="tit fs36 hc fwtbold lh130">
                        우강의 <span class="fcb">시간과 기억을 기록</span>하고,<br>
                        모두와 나눕니다.
                    </div>
                    <div class="wrt fs20 lh150 fc33 ">
                        우강면은 오랜 역사와 마을 공동체의 삶을 간직한 마을입니다.<br><br>

                        우강면의 시간과 기억을 디지털로 보존하기 위해 아카이브를 설립하였으며,<br class="pc_view">
                        이를 통해 지역의 이야기를 공유하고 후대에 전승하고자 합니다.<br><br>

                        <b>우강면의 아카이브는 주민과 함께 성장하는 기록의 터전</b>이 될 것입니다.
                    </div>
                </div>
                <div class="imgArea img">
                    <img src="@/assets/img/sub/vision_img_1.png" alt="비젼이미지">
                </div>
            </div>
        </div>

        <div class="s2">
            <div class="inner m_center inn1600">
                <ul class="lstArea flex">
                    <li class="lst">
                        <div class="imgArea img">
                            <img src="@/assets/img/sub/vision_lst_1.jpg" alt="보존 이미지" class="mimg">
                            <img src="@/assets/img/sub/vision_ico_1.png" alt="보존 아이콘" class="ico">
                        </div>
                        <div class="txtArea flex column alc t_center">
                            <div class="tit hc fs18 fwtbold fcf">보존</div>
                            <div class="subt fs24 fwtbold">지역 정체성 보존</div>
                            <div class="wrt fs18 fc66 lh150">
                                우강면의 역사, 마을별 특징, 인물, 문화자원 등을<br class="pc_view">
                                체계적으로 기록·보존하여 후대에 전승
                            </div>
                        </div>
                    </li>
                    <li class="lst">
                        <div class="imgArea img">
                            <img src="@/assets/img/sub/vision_lst_2.jpg" alt="공유 이미지" class="mimg">
                            <img src="@/assets/img/sub/vision_ico_2.png" alt="공유 아이콘" class="ico">
                        </div>
                        <div class="txtArea flex column alc t_center">
                            <div class="tit hc fs18 fwtbold fcf">공유</div>
                            <div class="subt fs24 fwtbold">공동체 기억의 공유</div>
                            <div class="wrt fs18 fc66 lh150">
                                주민이 직접 참여하여 사진, 구술, 문서 등을<br class="pc_view">
                                올림으로써 지역민의 삶과 경험을 공유
                            </div>
                        </div>
                    </li>
                    <li class="lst">
                        <div class="imgArea img">
                            <img src="@/assets/img/sub/vision_lst_3.jpg" alt="활용 이미지" class="mimg">
                            <img src="@/assets/img/sub/vision_ico_3.png" alt="활용 아이콘" class="ico">
                        </div>
                        <div class="txtArea flex column alc t_center">
                            <div class="tit hc fs18 fwtbold fcf">활용</div>
                            <div class="subt fs24 fwtbold">문화 · 교육<br class="mo_view"> 자원화</div>
                            <div class="wrt fs18 fc66 lh150">
                                우강면의 유무형 자산을 교육 자료·연구 자료·관광<br class="pc_view">
                                콘텐츠로 활용 가능하도록 디지털 아카이브 구축
                            </div>
                        </div>
                    </li>
                    <li class="lst">
                        <div class="imgArea img">
                            <img src="@/assets/img/sub/vision_lst_4.jpg" alt="브랜드화 이미지" class="mimg">
                            <img src="@/assets/img/sub/vision_ico_4.png" alt="브랜드화 아이콘" class="ico">
                        </div>
                        <div class="txtArea flex column alc t_center">
                            <div class="tit hc fs18 fwtbold fcf">브랜드화</div>
                            <div class="subt fs24 fwtbold">외부 홍보<br class="mo_view"> 및 브랜드화</div>
                            <div class="wrt fs18 fc66 lh150">
                                단순 농촌이 아닌, 역사와 문화가 있는 살아있는<br class="pc_view">
                                마을로서 외부 방문객과 연구자들에게 알림
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div class="bg1 img abs">
            <img src="@/assets/img/sub/vision_bg_1.png" alt="">
        </div>

        <div class="bg2 img abs">
            <img src="@/assets/img/sub/vision_bg_2.png" alt="">
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
        activeKey: 'vision',
        items: [
            {key: 'vision', label: '비전 및 목표', to: '/vision'},
            {key: 'people', label: '함께하는 사람들', to: '/people'},
            {key: 'direction', label: '오시는 길', to: '/direction'},
        ],
    },
]
</script>