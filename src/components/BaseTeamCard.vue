<script setup lang="ts">
import type { Team } from '~/types'

defineProps<{team: Team}>()
</script>

<template>
    <div class="grid gap-4 w-fit max-w-2xl">
        <img :src="team.image" class="object-cover object-center w-full h-[440px]">
        <div class="grid gap-1">
            <h3>{{ team.name }}</h3>
            <div class="flex items-center gap-2">
                <hr class="border-tertiary w-3/12 border-2 bg-tertiary">
                <span>{{ team.role }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>