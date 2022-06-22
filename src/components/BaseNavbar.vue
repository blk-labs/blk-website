<script setup lang="ts">
import BaseIcon from './BaseIcon.vue';

</script>

<template>
    <nav>
        <div class="container mx-auto px-4 lg:px-0 pt-8">
            <div class="flex justify-between items-center">
                <img alt="BLK" src="https://blklabs.co/static/media/blk-logoDark.13e50d81.png" class="w-24 h-24" />
                <BaseButton type="button" class="rounded-full p-4 bg-white drop-shadow-xl border-none">
                    <BaseIcon icon="heroicons-outline:menu-alt-4" class="text-2xl text-black" />
                </BaseButton>
            </div>
        </div>
    </nav>
</template>