<template>
    <div id="menu" class=" w-full">
        <div id="mega-menu-full-cta" class="items-center justify-between w-full">
            <div class="mt-4 w-full truncate" :class="props.mode" :style="props.style">
                <slot />
            </div>
        </div>  
    </div>
</template>
<script lang="ts" setup>
const props = defineProps({
    mode: {
        type: String,
        required: false,
    },
    style: {
        type: Object,
        required: false,
        defaultValue: {}
    }
})
</script>
<style scoped>
.vertical{
    @apply flex;
}
.theme {
    .dark{
        @apply bg-[#000];
    }
    .white{
        @apply bg-[#fff];
    }
}
.inline{

}
.vertical{
    @apply flex flex-col;
}
.horizontal{
    @apply flex flex-row  mt-4 font-medium rtl:space-x-reverse;
}
</style>