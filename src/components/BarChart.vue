<template>
    <div>
        <h2>What genre of multiplayer game are you developing?</h2>
        <Bar 
        :chart-options="{
            responsive: true,
            indexAxis: 'y',
        }"
            :chart-data="chartData"
        />
    </div>
</template>
<script lang="ts" setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

const chartData = {
      labels: [
        'Shooter',
        'MOBA',
        'Platformer',
        'RPG',
        'Puzzlers and Party Game',
        'Turn-based Game',
        'Sandbox',
        'Other'
      ],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [19, 17, 11, 33, 25, 38, 12, 8]
        }
      ]
    }

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
</script>