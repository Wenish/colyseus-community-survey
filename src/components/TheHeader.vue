<template>
<div class="header border-b h-11">
    <div class="max-w-4xl mx-auto px-2 h-full flex items-center gap-2">
        <a class="hover:drop-shadow" href="https://colyseus.io/" target="_blank">
            <img src="/logos/colyseus-white.png" class="h-6" />
        </a>
        <router-link :to="'/'">
            <div class="text-2xl text-white hover:drop-shadow hover:text-gray-100">Community Survey</div>
        </router-link>
    </div>
</div>
</template>
<style scoped>
.header {
    background: linear-gradient(90deg, rgba(67,134,255,1) 0%, rgba(154,86,255,1) 100%);
}
</style>