<template>
    <div class="card" :class="props.cardClass" :style="props.style"  >
        <div class="card-header"  :headerClass="props.headerClass" :style="props.headerStyle" v-if="(props.header && props.title ) || ($slots.title || $slots.extra)"  >
            <h2 class="card-title" v-if="props.title">{{ props.title }}</h2>
            <slot name="title" v-else />
            <div class="card-extra" v-if="$slots.extra"><slot name="extra" /></div>
        </div>
        <div class="card-body" :class="props.bodyClass" :style="props.bodyStyle" v-if="$slots.default" ><slot /></div>
        <div class="card-footer" :class="props.footerClass" :style="props.footerStyle"  v-if="$slots.footer" ><slot name="footer" /></div>
    </div>
</template>
<script lang="ts" setup>
import type { ICards } from '~/types/components/card';
const props = withDefaults(defineProps<ICards>(), {
    title: '',
    cardClass: '',
    headerClass: '',
    bodyClass: '',
    footerClass: '',
    style: '',
    headerStyle: '',
    bodyStyle: '',
    footerStyle: '',
    header: true,
    footer: false,
});
</script>
<style scoped>

</style>

