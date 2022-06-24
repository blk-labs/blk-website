<script setup lang="ts">
import type { Service } from '~/types'

const serviceProps = defineProps<{service: Service}>()
</script>

<template>
    <div class="w-fit grid gap-5 max-w-2xl">
        <img :src="serviceProps.service.image" class="object-cover object-center w-32 h-32">
        <div class="grid gap-5 text-left">
            <div class="grid gap-2.5">
                <h1 class="text-2xl lg:text-4xl font-bold text-neutral-600">{{ serviceProps.service.title }}</h1>
                <p class="text-base lg:text-2xl font-normal text-[#776F8D]">{{ serviceProps.service.text }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>