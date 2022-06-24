<script setup lang="ts">
import type { Article } from '~/types'
import BaseButton from './BaseButton.vue';

const articleProps = defineProps<{article: Article}>()
</script>

<template>
    <div class="w-full grid gap-5">
        <img :src="articleProps.article.image" class="object-cover object-center w-full h-[440px]">
        <div class="grid gap-5 text-left">
            <div class="grid gap-2.5">
                <h1 class="text-2xl font-bold text-neutral-600">{{ articleProps.article.title }}</h1>
                <p class="text-base font-normal text-[#776F8D]">{{ articleProps.article.date }}</p>
            </div>
            <BaseButton btnType="text" class="w-fit">Read More</BaseButton>
        </div>
    </div>
</template>