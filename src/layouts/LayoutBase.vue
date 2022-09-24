<template>
    <div>
        <header>
            <TheHeader />
        </header>
        <main>
            <slot></slot>
        </main>
    </div>
</template>
<script lang="ts" setup>
import TheHeader from '../components/TheHeader.vue';</script>
<style scoped>
main {
    @apply p-4 max-w-4xl mx-auto;
}
</style>