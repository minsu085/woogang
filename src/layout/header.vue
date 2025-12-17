<template>

    <!-- HEADER -->
    <header id="header" class="abs w100 top0">
        <!--pcHeader-->
        <div class="pcHeader pc_view">
            <div class="inner inn1600 m_center flex alc justy_btw">
                <h1 class="logo">
                    <router-link to="/">
                        <img src="@/assets/img/logo.svg" alt="우강면 아카이빙 로고" />
                    </router-link>
                </h1>
                <ul class="gnb flex fs20 fcf5">
                    <li class="lst">
                        <router-link :to="{ name: 'vision' }">아카이빙 소개</router-link>
                    </li>
                    <li class="lst">
                        <router-link :to="{ name: 'maps01' }">마을소개</router-link>
                    </li>
                    <li class="lst">
                        <router-link :to="{ name: 'sights' }">체험하기</router-link>
                    </li>
                    <li class="lst">
                        <router-link :to="{ name: 'notice' }">커뮤니티</router-link>
                    </li>
                </ul>
            </div>
        </div>

        <!--moHeader-->
        <div class="moHeader">

        </div>
    </header>


</template>


<script setup>

</script>


<style scoped>

</style>
