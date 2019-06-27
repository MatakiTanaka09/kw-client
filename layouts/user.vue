<template>
    <div>
        <TopHeader/>
        <nuxt/>
        <TopFooter/>
    </div>
</template>

<script>
    import TopHeader from "~/components/organisms/header/user/Header"
    import TopFooter from "~/components/organisms/footer/user/Footer"
    export default {
        components: {
            TopHeader,
            TopFooter
        }
    }
</script>

<style lang="scss">
    body {
        font-size: 14px;
    }

</style>
