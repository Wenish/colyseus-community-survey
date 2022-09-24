<template>
<div class="border-b h-11 bg-blue-500">
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