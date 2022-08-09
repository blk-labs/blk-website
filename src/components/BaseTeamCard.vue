<script setup lang="ts">
import type { Team } from './../types'

defineProps<{team: Team}>()
</script>

<template>
    <div class="grid gap-4 justify-center">
        <img :src="team.image" class="object-contain h-[334px]">
        <div class="grid gap-1 font-normal">
            <h3 class="text-accent text-xl">{{ team.name }}</h3>
            <div class="flex items-center gap-2">
                <hr class="border-tertiary w-1/12 border-2 bg-tertiary">
                <span class="text-tertiary text-base">{{ team.role }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>