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
const props = defineProps({
    title: {
        type: String,
        required: false,
    },
    cardClass: {
        type: String,
        required: false,
    },
    headerClass: {
        type: String,
        required: false
    },
    bodyClass: {
        type: String,
        required: false
    },
    footerClass: {
        type: String,
        required: false
    },
    style: {
        type: Object,
        required: false,
        defaultValue: {}
    },
    headerStyle: {
        type: Object,
        required: false,
        defaultValue: {}
    },
    bodyStyle: {
        type: Object,
        required: false,
        defaultValue: {}
    },
    footerStyle: {
        type: String,
        required: false
    },
    header: {
        type: Boolean, 
        required: false,
        defaultValue: true
    },
    footer: {
        type: Boolean,
        required: false,
        defaultValue: false
    }
})
</script>
<style scoped>

</style>

