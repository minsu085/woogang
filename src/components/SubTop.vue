<template>
    <!-- SUB VISUAL -->
    <div id="subTop">
        <div class="visual" :class="visualClass">
            <div class="tit hc fs52 fwtbold fcf t_center">
                {{ title }}
            </div>
        </div>
        
        <!-- SUB NAV -->
        <div class="subNav">
            <div class="inner m_center inn1600 flex">
                
                <!-- 홈 버튼 -->
                <RouterLink to="/" class="home inblock g_center img">
                    <img src="@/assets/img/ic_home.svg" alt="홈 아이콘" />
                </RouterLink>
                
                <!-- nav 그룹 (좌측/우측 두 개) -->
                <div v-for="(group, index) in navGroups" :key="group.title" class="navLnb fc33 fs18">
                    <div class="tit pointer" @click.stop="toggleMenu(index)">
                        {{ group.title }}
                    </div>                    
                    <transition name="slide">
                        <ul v-show="openIndex === index" class="lnb abs w100">
                            <li v-for="item in group.items" :key="item.key" class="lnbLst" :class="{ on: item.key === group.activeKey }" >
                                <RouterLink v-if="item.to" :to="item.to">{{ item.label }}</RouterLink>
                                <a v-else :href="item.href || '#'">{{ item.label }}</a>
                            </li>
                        </ul>
                    </transition>
                </div>        

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
    title: String,
    visualClass: String,
    navGroups: {
        type: Array,
        default: () => [],
    },
})

// 열리는 메뉴 상태 (index별로 true/false)
const openIndex = ref(null)

// tit 클릭 → 자신만 열고 나머지는 닫기 (jQuery slideToggle과 동일)
function toggleMenu(index) {
    openIndex.value = openIndex.value === index ? null : index
}

// 바깥 클릭 → 전체 닫기
function handleOutsideClick(e) {
    const subTop = document.getElementById('subTop')
    if (subTop && !subTop.contains(e.target)) {
        openIndex.value = null
    }
}

onMounted(() => {
    document.addEventListener('click', handleOutsideClick)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', handleOutsideClick)
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {transition: all 0.4s ease; overflow: hidden;}

.slide-enter-from,
.slide-leave-to {max-height: 0;}

.slide-enter-to,
.slide-leave-from {max-height: 300px;}
</style>