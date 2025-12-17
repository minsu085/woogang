<template>
    <!-- SUB VISUAL -->
    <SubTop
    title="저작권 정책"
    visual-class="visual05"
    :nav-groups="navGroups"
    />

    <!-- CONTENT -->
    <main id="copyright">
        <div class="inner inn1058 m_center">

            <div class="titArea t_center">
                <div class="tit hc fs36 fwtbold">
                    저작권 정책
                </div>
                <div class="wrt fs18 lh150 fc33">
                    우강면 디지털 아카이빙 사이트의 저작권 정책
                </div>
            </div>

            <div class="cont flex column alc">
                <div class="box fs18 fc33 lh150">
                    당진시 누리집(홈페이지)에서 제공하는 자료 중에서 당진시가 저작재산권의 전부를 보유한 저작물의 경우에는 저작권법 제24조의2(공공저작물의 자유이용)에 따라 별도의 이용허락 없이 자유이용이 가능합니다.
                </div>
                <div class="box fs18 fc33 lh150">
                    단, 위 규정에 따라 자유이용이 가능한 자료는 “공공저작물 자유이용허락표시기준(공공누리, KOGL) 제1유형”을 부착하여 개방하고 있으므로 공공누리 표시가 부착된 저작물인지를 확인한 이후에 자유롭게 이용하시기 바랍니다.
                </div>
                <div class="box fs18 fc33 lh150">
                    그 밖에도 권리자의 동의가 있는 경우를 비롯하여, 널리 자유이용을 허락하는 것이 바람직한 자료들은 공공누리(제1유형 내지 제4유형) 표시를 부착하여 개방하고 있습니다.<br><br>

                    공공누리 제2유형은 상업적 이용을, 제3유형은 변경 이용을, 제4유형은 상업적 이용과 변경 이용을 금지하고 있으니, 반드시 그 이용조건을 확인하신 후 해당 이용조건의 범위 안에서 자유롭게 이용하시기 바랍니다.<br><br>

                    또한 제1유형을 포함하여 어느 유형이든 출처(해당 공공기관명과 홈페이지 URL, 저작물 작성자의 성명이 표시된 경우에는 그 성명도 포함)는 반드시 표시하여야 함을 유의하시기 바랍니다.
                </div>
                <a href="#" class="linkBtn flex alc fs18 fwtbold">
                    공공누리 유형안내
                    <img src="@/assets/img/sub/copy_ico.svg" alt="아이콘">
                </a>
            </div>

        </div>
    </main>
</template>

<script setup>
import SubTop from '@/components/SubTop.vue'

// 메뉴 정보
const navGroups = [
{
    title: '저작권 정책',
    activeKey: 'copyright',
    items: [
    {key: 'about', label: '아카이빙 소개', to: '/vision'},
    {key: 'village', label: '마을소개', to: '/maps01'},
    {key: 'experience', label: '체험하기', to: '/sights'},
    {key: 'community', label: '커뮤니티', to: '/notice'},
    {key: 'copyright', label: '저작권 정책', to: '/copyright'},
    ],
},
]
</script>