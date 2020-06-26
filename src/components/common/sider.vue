

<template>
    <sidebar-menu :menu="menu" />
</template>

<script>
import Vue from 'vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

Vue.use(VueSidebarMenu)
export default {
    data() {
        return {
            menu: [
                {
                    href: '/heroes',
                    title: 'Hero',
                    icon: 'fa fa-user'
                },
                {
                    href: '/foo',
                    title: 'Foo',
                    icon: 'fa fa-user'
                },
                {
                    href: '/bar',
                    title: 'Bar',
                    icon: 'fa fa-chart-area'
                }
            ]
        }
    }
}
</script>

<style>

</style>