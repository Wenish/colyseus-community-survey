<template>
    <div>
        <Doughnut :chartData="chartData" :chartOptions="chartOptions"></Doughnut>
    </div>
</template>
<script lang="ts" setup>

import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  Plugin
} from 'chart.js'
import { TChartData } from 'vue-chartjs/dist/types';

defineProps<{
  chartData: TChartData<"doughnut", number[], unknown>
}>()

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)


const chartOptions = {
    responsive: true,
    maintainAspectRatio: false
}
</script>