<template>
    <LayoutBase>
        <h1>Overview</h1>
        <br />
        <div class="list">
            <div class="grid">
                <router-link :to="'/survey/2022'">
                    <div class="w-full h-full bg-violet-500 hover:bg-violet-400 p-8 grid rounded-sm">
                        <div class="inline-grid">
                            <span class="text-lg">Results</span>
                            <span class="text-4xl font-bold">2022 Sept.</span>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </LayoutBase>
</template>
<script lang="ts" setup>
import LayoutBase from '../layouts/LayoutBase.vue';
</script>
<style scoped>
.list {
    @apply grid;
    grid-template-columns: repeat(auto-fill, minmax(242px, 1fr));
}
</style>