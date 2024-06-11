<template>
    <aside id="default-sidebar" class="sidebar" aria-label="Sidebar">
        <div class="sidebar-header">
            <img :src="logo" alt="" class="w-16">
        </div>
        <c-menu mode="vertical">
            <c-menu-item v-for="(item, index) in items" :icon="item.icon" :key="index" @click="console.log(index)">
                {{ item.label }}
            </c-menu-item>
        </c-menu>
    </aside>
</template>
<script lang="ts" setup>
import { useThemes } from '~/composables/useTheme';
const { logo } = useThemes();

const items: any = [
    {label:'Dashboard', icon: 'Home'},
    {label:'Catalog Management', icon: 'Home'}, 
    {label: 'Circulations', icon: 'Home'}, 
    {label: 'Patrons', icon: ''}, 
    {label: 'Reservation', icon: 'Home'},
    {label:'Loan Management', icon: 'Home'}, 
    {label: 'Fines and Fee', icon: 'Home'}, 
    {label: 'Reports', icon: 'Home'}, 
    {label: 'Settings',  icon: 'Home'}
    ];
</script>
<style scoped>
.sidebar{
    @apply fixed left-0 top-0 p-2 z-40 h-screen w-[200px] border border-e-[#e6e6e6] transition-transform -translate-x-full sm:translate-x-0;
}
.sidebar-header{
    @apply flex justify-center;
}
</style>