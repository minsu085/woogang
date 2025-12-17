<template>
    
    <!-- SUB VISUAL -->
    <SubTop
    title="기록 속 명소"
    visual-class="visual03"
    :nav-groups="navGroups"
    />
    
    <!-- CONTENT -->
    <main id="sights">
        <div class="inner inn1600 m_center">
            
            <div class="titArea t_center">
                <div class="tit hc fs36 fwtbold">과거의 기록이 살아<br class="mo_view"> 숨 쉬는 우강의 명소</div>
                <div class="wrt fs18 lh150 fc33">
                    간척의 들판, 신앙의 성지, 전쟁의 흔적, 세월을 견딘 나무까지. 기록 속에 잠들어 있던 장소들이 오늘도 살아 숨 쉽니다.<br class="pc_view">
                    ‘기록 속 명소’는 우강의 시간을 품은 자리들을 다시 찾아가고, 그 의미를 오늘의 시선으로 새겨보는 길잡이가 됩니다.<br class="pc_view">
                    사진 속에 머물던 우강의 풍경을 직접 걸으며 만나보세요.
                </div>
            </div>                
            
            <ul class="tabArea flex fxwrap justy_cnt t_center fs18 fc33">
                <li v-for="tab in tabs" :key="tab.id" :class="{on: activeTabId === tab.id}" @click="activeTabId = tab.id">
                    {{ tab.label }}
                </li>
            </ul>
            
            <!-- 탭 타입 sight / 우강면 명소 -->
            <div class="sightArea flex" v-if="activeTab?.type === 'sight'">
                
                <div class="thumbArea">
                    <div v-for="(imgSrc, idx) in activeSight?.thumbs || []" :key="idx" class="thumb img">
                        <img :src="imgSrc" alt="" />
                    </div>
                </div>
                    
                <div class="infoArea" v-if="activeSight">
                    <div class="tit hc fs36 fwtbold">
                        {{ activeSight.title }}
                    </div>
                    <div class="subt fs20 fc66 lh150">
                        {{ activeSight.subtitle }}
                    </div>
                    <div class="wrt fs18 fc33 lh150" v-html="activeSight.text.replace(/\n/g, '<br><br>')"></div>
                    
                    <div class="map">
                        <div class="img">
                            <img :src="activeSight.mapImg" alt="" />
                        </div>
                        <div class="addr fs14 fc33">
                            <b>- 주소</b> : {{ activeSight.address }}
                        </div>
                    </div>
                </div>
                
            </div>
            
            <!-- 탭 타입 item / 우강면 특산품 -->
            <ul class="itemArea" v-else-if="activeTab?.type === 'item'">
                <li class="item flex alc">
                    <div class="imgArea img">
                        <img src="@/assets/img/sub/item_1.jpg" alt="">
                    </div>
                    <div class="txtArea">
                        <div class="tit flex alc">
                            <span class="num fs18 fcf fwtbold g_center">01</span>
                            <span class="txt hc fs36 fwtbold">우강쌀</span>
                        </div>
                        <div class="wrt fs18 fc33 lh150">
                            우강쌀은 충청남도 당진시 우강면의 비옥한 충적평야와 맑은 수자원에서 자라난 고품질 쌀이다. 삽교천 방조제(1979년 완공)와 합덕방죽 등 안정적인 수리 시설 덕분에 풍부한 용수 공급이 가능하며, 이는 우강쌀을 더욱 맛있고 윤기 나는 쌀로 키워낸다.<br><br>

                            예로부터 우강은 당진 지역의 대표적인 곡창지대로, 쌀은 단순한 주식(主食)을 넘어 지역 주민의 삶과 의례, 그리고 향토문화를 지탱해온 중심 자원이었다. 설·추석 명절의 송편, 백설기와 같은 떡, 짚가리술 같은 전통주, 그리고 다양한 향토음식의 근간이 바로 우강쌀이었다.<br><br>

                            오늘날 우강쌀은 청결 재배·친환경 농법을 바탕으로 생산되며, 지역 농협과 생산자 단체를 통해 유통되고 있다. 그 품질은 당진의 농업을 대표하는 브랜드로 자리 잡아 전국 소비자에게 신뢰받고 있다.
                        </div>
                    </div>
                </li>

                <li class="item flex alc">
                    <div class="imgArea img">
                        <img src="@/assets/img/sub/item_2.jpg" alt="">
                    </div>
                    <div class="txtArea">
                        <div class="tit flex alc">
                            <span class="num fs18 fcf fwtbold g_center">02</span>
                            <span class="txt hc fs36 fwtbold">짚누리(가리)술</span>
                        </div>
                        <div class="wrt fs18 fc33 lh150">
                            짚가리술은 당진의 우강면, 합덕읍 일대에서 수확한 쌀로 술을 만들어 짚가리에서 발효, 숙성한 술이다. 술의 이름은 일제 강점기 밀주 단속에서 비롯되었는데, 단속원을 피하기 위해 짚가리 속에 숨겨 두었던 술이라고 해서 '짚가리술'이라 부르게 되었다.<br><br>

                            쌀, 누룩, 이스트, 사카린, 물 등이 술의 재료이다. 짚가리술은 충청남도 당진 뿐만 아니라 아산 지방에서도 전통주로 전승되고 있다.<br><br>

                            <span class="prg fs14 fc88">[출처] 한국학중앙연구원 - 향토문화전자대전</span>
                        </div>
                    </div>
                </li>

                <li class="item flex alc">
                    <div class="imgArea img">
                        <img src="@/assets/img/sub/item_3.jpg" alt="">
                    </div>
                    <div class="txtArea">
                        <div class="tit flex alc">
                            <span class="num fs18 fcf fwtbold g_center">03</span>
                            <span class="txt hc fs36 fwtbold">솔뫼생강한과</span>
                        </div>
                        <div class="wrt fs18 fc33 lh150">
                            충청남도 당진시 우강면에서 생산되는 솔뫼 생강 한과는 2005년도에 설립되어 한과를 만들기 시작했다. 기계를 이용하지 않고 모든 제조 과정을 전통 방식 그대로 수작업을 통해 만들고 있다. 솔뫼 생강 한과는 한과의 여러 종류 중 달지 않으면서 은은한 생강향이 풍기는 유과류를 주로 생산하고 있다. 급냉동한 갈은 생강을 사용해서 한과가 느끼하지 않고 개운하다는 평가를 받고 있다.<br><br>

                            또한 솔뫼 생강 한과는 직접 농사지은 찹쌀, 맵쌀에 서산 생강을 이용하고, 쌀로 만든 조청이 아니라 옥수수로 만든 조청을 사용한다. 최고의 해나루 쌀 생산지로 유명한 우강 지역에서 나는 쌀과 알싸한 생강을 직접 재배해 솔뫼 생강 한과를 만든다. 모든 농산물이 당진 지역에서 나는 재료를 이용하는 것이 특징이다.<br><br>

                            솔뫼 생강 한과를 방 안 실온에 두었다 먹으면 포슬포슬한 과자는 더욱 부드럽고, 한과에 바른 엿은 쫄깃쫄깃한 식감을 자랑해 더욱 맛있게 즐길 수 있다. 솔뫼 생강 한과에서는 생강 한과뿐만 아니라 파래 한과, 당근 정과, 생강 정과 등도 판매하고 있다.<br><br>

                            <span class="prg fs14 fc88">[출처] 한국학중앙연구원 - 향토문화전자대전</span>
                        </div>
                    </div>
                </li>

                <li class="item flex alc">
                    <div class="imgArea img">
                        <img src="@/assets/img/sub/item_4.jpg" alt="">
                    </div>
                    <div class="txtArea">
                        <div class="tit flex alc">
                            <span class="num fs18 fcf fwtbold g_center">04</span>
                            <span class="txt hc fs36 fwtbold">보나전통식품</span>
                        </div>
                        <div class="wrt fs18 fc33 lh150">
                            보나전통식품은 충남 당진 우강면에서 전통의 맛과 멋을 지켜온 향토 식품 제조·가공 업체이다. 우강의 비옥한 평야에서 수확한 쌀과 곡물, 지역에서 이어온 발효·가공 기술을 바탕으로 떡·한과·전통주·장류 등 다양한 전통 먹거리를 생산하며, 지역 농산물의 가치를 높이고 있다.<br><br>

                            보나는 단순히 먹거리를 만드는 데 그치지 않고, 우강의 생활문화와 민속 전통을 함께 계승하는 데에 큰 의미를 두고 있다. 특히 농촌의 장독대 문화, 짚가리술 같은 토속주 전승, 산자와 같은 가문 전래 과자를 현대적으로 재해석하여 상품화하고 있다.<br><br>

                            또한 안전하고 깨끗한 제조 환경을 갖추고 HACCP 등 식품 안전 인증을 기반으로 소비자에게 믿음을 주며, 지역 농가와 상생 협력을 통해 농업·식품 산업의 선순환 구조를 만들어 가고 있다.
                        </div>
                    </div>
                </li>
            </ul>            
   
        </div>
    </main>


</template>

<script setup>

import { ref, computed } from 'vue'
import SubTop from '@/components/SubTop.vue'

// 메뉴 정보
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
        title: '기록 속 명소',
        activeKey: 'sights',
        items: [
        {key: 'sights', label: '기록 속 명소', to: '/sights'},
        {key: 'download', label: '다운로드', to: '/download'},
        ],
    },
]

// 탭 정보
const tabs = [
    { id: 'tab01', label: '솔뫼성지', type: 'sight' },
    { id: 'tab02', label: '당진 한갑동 가옥', type: 'sight' },
    { id: 'tab03', label: '창리 토성', type: 'sight' },
    { id: 'tab04', label: '우강면 송산리', type: 'sight' },
    { id: 'tab05', label: '우강 팽나무', type: 'sight' },
    { id: 'tab06', label: '소들평야', type: 'sight' },
    { id: 'tab07', label: '부장리 남원포구', type: 'sight' },
    { id: 'tab08', label: '소들섬 / 소들쉼터', type: 'sight' },
    { id: 'tab09', label: '우강면 행정복지센터', type: 'sight' },
    { id: 'tab10', label: '우강면 특산품', type: 'item' }, // ← 이 탭만 item 영역
]

// 현재 선택된 탭 id (초기값: 솔뫼성지)
const activeTabId = ref('tab01')

//솔뫼성지 이미지 import
import sight11 from '@/assets/img/sub/sight_1_1.jpg'
import sight12 from '@/assets/img/sub/sight_1_2.jpg'
import sight13 from '@/assets/img/sub/sight_1_3.jpg'
import sight14 from '@/assets/img/sub/sight_1_4.jpg'
import sight15 from '@/assets/img/sub/sight_1_5.jpg'
import sight1_map from '@/assets/img/sub/sight_map_1.jpg'

// 각 명소별 내용
const sightsContent = {
    tab01: {
        title: '솔뫼성지',
        subtitle: '김대건 신부 생가 유적',
        text: `솔뫼성지는 한국 천주교 역사에서 중요한 의미를 지닌 장소로, 김대건 안드레아 신부의 출생지이자 순교의 땅입니다. 김대건 신부는 한국인 최초의 사제로, 1846년 25세의 나이로 순교하였으며, 그의 생가는 현재 복원되어 기념관과 순례시설이 함께 조성되어 있습니다. 이곳은 매년 수많은 순례자들이 방문하여 신앙의 뿌리를 되새기고, 김대건 신부의 숭고한 정신을 기리고 있습니다.\n\n솔뫼성지는 단순한 유적지가 아닌, 한국 천주교 신앙의 근본이자 순교 정신을 계승하는 상징적인 장소로서, 그 역사적·종교적 중요성이 매우 큽니다. 또한, 이곳은 지역 신앙사와 근현대 순교자 가문과의 연관성으로 인해, 문헌, 사진, 구술 기록 등 다양한 형태의 아카이빙 자료로서 보존 가치가 높습니다.\n\n이러한 이유로 솔뫼성지는 단순한 관광 명소를 넘어, 한국 천주교 역사와 신앙의 깊이를 이해하고, 그 의미를 되새길 수 있는 중요한 장소로 평가받고 있습니다.`,
        thumbs: [sight11, sight12, sight13, sight14, sight15],
        mapImg: [sight1_map],
        address: '충남 당진시 우강면 솔뫼로 132 (우)31754',
    },
    // tab02 .. tab03 .. 
}

// 현재 선택된 탭의 타입 & 내용
const activeTab = computed(() => tabs.find(t => t.id === activeTabId.value))
const activeSight = computed(() => sightsContent[activeTabId.value])

</script>