<template>
    <button type="button" class="btn btn-default" :class="[props.className, props.type]" :style="props.style" @click="emits('click')" v-if="$slots.default"><slot /></button>
</template>
<script lang="ts" setup>
import type { IButtons } from '~/types/components/button';

const emits = defineEmits(['click']);
const props = withDefaults(defineProps<IButtons>(), {
    className: '',
    style: '',
    type: ''
})
</script>
<style scoped>
.default{
    @apply text-black border hover:border-[#1677ff];
}
.primary {
    @apply text-white border hover:border-none bg-[#1677ff] hover:bg-[#69b1ff] dark:bg-blue-600  dark:hover:bg-blue-700 dark:focus:ring-blue-800;
}
.success{
    @apply text-white border hover:border-none bg-[#52c41a] hover:bg-[#95de64] dark:bg-green-600  dark:hover:bg-green-700 dark:focus:ring-green-800;
}
.danger{
    @apply text-white border hover:border-none bg-[#ff4d4f] hover:bg-[#ffa39e] dark:bg-red-600  dark:hover:bg-red-700 dark:focus:ring-red-800;
}
.warning {
    @apply text-white border hover:border-none bg-[#faad14] hover:bg-[#ffd666] dark:bg-yellow-600  dark:hover:bg-yellow-700 dark:focus:ring-yellow-800;
}
</style>