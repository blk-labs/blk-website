<script setup lang="ts">
import type { Service } from './../types'

const serviceProps = defineProps<{service: Service}>()
</script>

<template>
    <div class="w-fit grid gap-5 max-w-2xl">
        <img :src="serviceProps.service.image" class="object-cover object-center w-32 h-32">
        <div class="grid gap-5 text-left">
            <div class="grid gap-2.5">
                <h1 class="text-2xl font-normal text-primary">{{ serviceProps.service.title }}</h1>
                <hr class="border-primary w-3/12 border-2 bg-primary">
                <p class="text-base lg:text-lg font-normal text-tertiary">{{ serviceProps.service.text }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>