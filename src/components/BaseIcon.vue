<script setup lang="ts">
import { Icon } from '@iconify/vue';

interface IconProps {
    icon: string
}

defineProps<IconProps>()
</script>

<template>
    <Icon :icon="icon" />
</template>

<style scoped>

</style>