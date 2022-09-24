<template>
    <LayoutBase>
        <h1>Results</h1>
        <br />
        <div class="list grid gap-4">
            <router-link :to="'/survey/2022'">
                <div class="w-full h-full bg-violet-500 hover:bg-violet-400 p-8 grid rounded-sm">
                    <div class="inline-grid">
                        <span class="text-4xl font-bold">2022 Sept.</span>
                    </div>
                </div>
            </router-link>
        </div>
    </LayoutBase>
</template>
<script lang="ts" setup>
import LayoutBase from '../layouts/LayoutBase.vue';
</script>
<style scoped>
.list {
    grid-template-columns: repeat(auto-fill, minmax(242px, 1fr));
}
</style>