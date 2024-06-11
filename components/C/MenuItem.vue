<template>
    <div class="menu-item" :class="props.className" :style="props.style" v-if="$slots.default" @click="emits('click')">
        <!-- icon code here -->
        <!-- <component :isComponent="computedIcon" v-if="props.icon" /> -->
        <computedIcon 
            class="mr-1" 
            :class="props.iconClass" 
            :style="props.iconStyle"
            :strokeWidth="props.iconStrokeWidth" 
            :size="props.iconSize"
        />
        <slot></slot>
    </div>
</template>
<script lang="ts" setup>
import type { IMenuItems } from '~/types/components/menu-item';
import lucid from 'lucide-vue-next'


// const props = withDefaults(defineProps<IMenuItems>(), {})
const props = defineProps({
    className: {
        type: String,
        required: false,
    },
    style: {
        type: Object,
        required: false,
        defaultValue: {}
    },
    icon: {
        type: String,
        required: false,
        defaultValue: ''
    },
    iconClass: {
        type: String,
        required: false,
    },
    iconStyle: {
        type: String,
        required: false
    },
    iconSize: {
        type: Number || String,
        required: false
    },
    iconStrokeWidth: {
        type: String,
        required: false
    }
})
const emits = defineEmits(['click'])

const computedIcon = computed(() => {
    if(props.icon){
        // @ts-ignore
        return lucid[props.icon]
    } return ''
})
</script>
<style scoped>
.menu-item{
    @apply block flex px-[15px] py-[10px] hover:bg-[#e6f4ff] font-normal rounded-md hover:text-[#1677ff] text-sm items-center; 
}
</style>