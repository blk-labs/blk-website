<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const project = ref([])
const description = ref('')
const email = ref('')
</script>

<template>
    <section class="bg-accent/10 pt-64 pb-32">
        <div class="container mx-auto px-4 lg:px-0">
            <div class="grid gap-5">
                <h1 class="font-bold text-[#121633] text-4xl lg:text-7xl">Hello!</h1>
                <p class="font-normal text-lg lg:text-3xl text-neutral-600">Talk to us, we'd love to hear about you and the solutions we can offer your business.</p>
            </div>
        </div>
    </section>
    <section class="py-24">
        <div class="container mx-auto grid gap-12 lg:gap-24 lg:px-0">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div class="grid content-start gap-14 px-4">
                    <FormKit type="form" :actions="false" :incomplete-message="false" form-class="grid gap-9">
                        <FormKit v-model="name" type="text" label="MY NAME IS" label-class="text-accent" wrapper-class="grid gap-2.5" outer-class="grid gap-1" input-class="py-2.5 pl-5 border border-[#02051D]/20 focus:outline-0 focus:border-accent transition-all ease delay-100 w-full" validation-visibility="submit" validation="required" placeholder="Full name" />
                        <FormKit v-model="project" type="checkbox" label="AND I WOULD LIKE" legend-class="text-accent" :options="['A UI/UX Design', 'A Website', 'A Web Application', 'A Mobile Application', 'Web Management Services']" wrapper-class="flex items-center gap-4" options-class="grid gap-4 mt-4" label-class="text-base text-[#564D73]" input-class="w-10 h-10 border border-[#02051D]/20 focus:outline-0 focus:border-accent transition-all ease delay-100" validation="required|min:1" validation-visibility="submit" />
                        <FormKit v-model="description" type="textarea" rows="10" label="FOR MY PROJECT" label-class="text-accent" wrapper-class="grid gap-2.5" outer-class="grid gap-1" input-class="py-2.5 pl-5 border border-[#02051D]/20 focus:outline-0 focus:border-accent transition-all ease delay-100 w-full" validation-visibility="submit" validation="required" placeholder="Tell us about your project" />
                        <FormKit v-model="email" type="email" label="YOU CAN MAIL ME AT" label-class="text-accent" wrapper-class="grid gap-2.5" outer-class="grid gap-1" input-class="py-2.5 pl-5 border border-[#02051D]/20 focus:outline-0 focus:border-accent transition-all ease delay-100 w-full" validation-visibility="submit" validation="required|email" placeholder="Email address" />
                        <BaseButton btnType="action" class="py-5 px-20 w-fit">SEND</BaseButton>
                    </FormKit>
                </div>
                <div class="grid gap-16 content-start">
                    <div class="grid gap-8">
                        <div class="grid gap-3 content-start">
                            <span class="text-accent text-sm">HOURS</span>
                            <div class="flex items-center gap-2.5">
                                <img src="/assets/vuesax/bulk/timer.svg">
                                <span class="text-[#564D73] text-base">Monday - Friday 8AM - 6PM</span>
                            </div>
                        </div>
                        <div class="grid gap-3 content-start">
                            <span class="text-accent text-sm">CONTACT US</span>
                            <div class="flex items-center gap-2.5">
                                <img src="/assets/vuesax/bulk/sms.svg">
                                <a href="mailto:hello@blklabs.co" class="text-[#564D73] text-base">hello@blklabs.co</a>
                            </div>
                        </div>
                        <div class="grid gap-3 content-start">
                            <span class="text-accent text-sm">CUSTOMER SUPPORT</span>
                            <div class="flex items-center gap-2.5">
                                <img src="/assets/vuesax/bulk/24-support.svg">
                                <a href="mailto:support@blklabs.co" class="text-[#564D73] text-base">support@blklabs.co</a>
                            </div>
                        </div>
                    </div>
                    <img src="/assets/instant_message.png">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>