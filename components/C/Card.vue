<template>
    <div class="card" :class="props.className" > 
        <div class="card-header" v-if="props.header">
            <h2 class="card-title" v-if="props.title">{{ props.title }}</h2>
            <slot name="title" v-else />
            <div class="card-extra"><slot name="extra" /></div>
        </div>
        
        <!-- <div class="card-body" :class="props.bodyClass" :style="props.bodyStyle"> -->
        <slot :class="props.bodyClass" :style="props.bodyStyle" />
        <!-- </div> -->
        <slot name="footer" />
    </div>
</template>
<script lang="ts" setup>
import type { ICards } from '~/types/components/card';
const props = withDefaults(defineProps<ICards>(), {
    style: '',
    bodyStyle: '',
    title: '',
    cardClass: '',
    bodyClass: '',
    footerClass: '',
    header: true
});
</script>
<style scoped>

</style>

