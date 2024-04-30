<script setup lang="ts">
import { currentClient } from '@/client-websocket/client-websocket'
</script>
<template>
  <h1>Lobby</h1>
  <h3>
    Room Code:
    <div>{{ currentClient.room }}</div>
  </h3>
</template>
