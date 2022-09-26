<template>
  <div>
    <Bar :chart-data="chartData" :chart-options="{
        responsive: true,
        indexAxis: 'y',
    }" />
  </div>
</template>
<script lang="ts" setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { TChartData } from 'vue-chartjs/dist/types';

defineProps<{
  chartData: TChartData<"bar", number[], unknown>
}>()

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
</script>