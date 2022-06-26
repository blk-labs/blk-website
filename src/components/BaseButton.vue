<script setup lang="ts">
import { computed } from 'vue';

interface BtnProps {
    btnType?: string
}

const btnProps = defineProps<BtnProps>()
const btnTypes = ['text', 'outline', 'action']

const onClick = defineEmits<{ (e: 'click'): void }>()

const classes = computed(() => {
    return {
        'transition-all ease-in delay-100 uppercase': true,
        [`blk--btn-${btnProps.btnType}`]: `${btnTypes.indexOf(btnProps.btnType!) !== -1}`,
    }
})
</script>

<template>
    <button v-bind="$attrs" :class="classes" type="button" @click="onClick('click')">
        <slot></slot>
    </button>
</template>

<style scoped>
.blk--btn-text {
    @apply text-primary hover:text-accent text-base font-bold;
}
.blk--btn-outline {
    @apply text-primary border border-primary hover:border-white hover:bg-white hover:shadow-md text-base font-bold;
}
.blk--btn-action {
    @apply text-white hover:text-primary border border-primary bg-primary hover:bg-primary/5 text-base font-medium;
}
</style>