<script setup lang="ts">
import BaseButton from './BaseButton.vue';

interface WorkProps {
    image: string
    title: string
    date: string
    url: string
}

const workProps = defineProps<WorkProps>()
</script>

<template>
    <div class="w-full grid gap-5">
        <img :src="workProps.image" class="object-cover object-center w-full h-[440px]">
        <div class="grid gap-5 text-left">
            <div class="grid gap-2.5">
                <h1 class="text-2xl font-bold text-neutral-600">{{ workProps.title }}</h1>
                <p class="text-base font-normal text-[#776F8D]">{{ workProps.date }}</p>
            </div>
            <BaseButton btnType="text" class="uppercase w-fit">Read More</BaseButton>
        </div>
    </div>
</template>