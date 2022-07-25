<script setup lang="ts">
import BaseButton from './BaseButton.vue';

interface WorkProps {
    image: string
    title: string
    text: string
}

const workProps = defineProps<WorkProps>()
</script>

<template>
    <div class="grid gap-5 w-[488px]">
        <img :src="workProps.image" class="object-cover object-center w-full h-[440px]">
        <div class="grid gap-5 text-left">
            <div class="grid gap-2.5">
                <h1 class="text-2xl lg:text-4xl font-bold text-neutral-600">{{ workProps.title }}</h1>
                <p class="text-base lg:text-2xl font-normal text-[#776F8D]">{{ workProps.text }}</p>
            </div>
            <BaseButton btnType="outline" class="uppercase w-fit py-4 px-5">View project</BaseButton>
        </div>
    </div>
</template>

<style scoped>

</style>