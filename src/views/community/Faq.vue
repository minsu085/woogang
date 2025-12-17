<template>
    
    <!-- SUB VISUAL -->
    <SubTop
    title="FAQ"
    visual-class="visual04"
    :nav-groups="navGroups"
    />
    
    <!-- CONTENT -->
    <main id="faq">
        <div class="inner inn1600 m_center">
            
            <div class="titArea t_center">
                <div class="tit hc fs36 fwtbold">
                    FAQ
                </div>
                <div class="wrt fs18 lh150 fc33">
                    우강면 디지털 아카이빙의<br class="mo_view"> 자주 묻는 질문을 확인해 보세요.
                </div>
            </div>
            
            <div id="boardTop" class="flex alc justy_btw">
                <div class="count fs16 fc33">
                    총 <b>{{ faqs.length }}</b>개의 게시물이 있습니다.
                </div>
                <div class="search">
                    <input
                    type="text"
                    placeholder="검색어를 입력하세요."
                    class="ipt"
                    v-model="keyword"
                    >
                    <button class="submitBtn" @click="onSearch"></button>
                </div>
            </div>
            
            <ul class="lstArea fs18">
                <li class="lst" v-for="item in faqs" :key="item.id" :class="{act: item.open}">
                    <div class="qArea flex alc" @click="toggle(item)">
                        <div class="qic fwtbold fcf g_center">Q</div>
                        <div class="subj">
                            {{ item.q }}
                        </div>
                    </div>                
                    <transition @enter="onEnter" @leave="onLeave" >
                        <div class="aArea" v-show="item.open">
                            <div class="inn flex alc">
                                <div class="aic fwtbold fcf g_center">A</div>
                                <div class="ans" v-html="item.a"></div>
                            </div>
                        </div>
                    </transition>
                </li>
            </ul>            
            
            <div id="paging" class="flex alc justy_cnt">
                <a href="#" class="pg prev"></a>
                <a href="#" class="pg current">1</a>
                <a href="#" class="pg next"></a>
            </div>
            
        </div>
    </main>   
    
    
</template>

<script setup>
import { ref } from 'vue'
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
    title: 'FAQ',
    activeKey: 'faq',
    items: [
    {key: 'notice', label: '공지사항', to: '/notice'},
    {key: 'newsletter', label: '우강면 소식지', to: '/newsletter'},
    {key: 'faq', label: 'FAQ', to: '/faq'},
    ],
},
]


// 검색어
const keyword = ref('')

// FAQ 데이터
const faqs = ref([
{
    id: 1,
    q: '정기적으로 새로운 자료가 업데이트되나요?',
    a: `네, 아카이빙 자료는 한 번에 대량으로 추가되지는 않지만, 정기적으로 검토·관리 과정을 거쳐 새로운 자료가 업데이트될 예정입니다.<br>
    자료 수집과 검증, 디지털화 과정에 시간이 소요되기 때문에 주기는 잦지 않을 수 있으나, 안정적으로 이용하실 수 있도록 꾸준히 보강해 나가겠습니다.`,
    open: false,
},
{
    id: 2,
    q: '사이트 오류나 잘못된 정보를 발견하면 어디로 문의하나요?',
    a: '답변입력',
    open: false,
},
// ... 나머지 FAQ들
])

const toggle = (item) => {
    item.open = !item.open
}

const onSearch = () => {
    console.log('검색어:', keyword.value)
}

// enter 훅: 0 → 실제 높이
const onEnter = (el) => {
    el.style.height = '0px'
    el.style.opacity = '0'
    el.style.overflow = 'hidden'
    
    const height = el.scrollHeight
    
    requestAnimationFrame(() => {
        el.style.transition = 'height 0.25s ease, opacity 0.25s ease'
        el.style.height = height + 'px'
        el.style.opacity = '1'
    })
    
    const cleanup = () => {
        el.style.height = 'auto' 
        el.style.overflow = ''
        el.style.transition = ''
        el.removeEventListener('transitionend', cleanup)
    }
    
    el.addEventListener('transitionend', cleanup)
}

// leave 훅: 실제 높이 → 0
const onLeave = (el) => {
    el.style.overflow = 'hidden'
    const height = el.scrollHeight
    el.style.height = height + 'px'
    el.style.opacity = '1'
    
    requestAnimationFrame(() => {
        el.style.transition = 'height 0.25s ease, opacity 0.25s ease'
        el.style.height = '0px'
        el.style.opacity = '0'
    })
    
    const cleanup = () => {
        el.style.height = ''
        el.style.overflow = ''
        el.style.transition = ''
        el.removeEventListener('transitionend', cleanup)
    }
    
    el.addEventListener('transitionend', cleanup)
}

</script>
