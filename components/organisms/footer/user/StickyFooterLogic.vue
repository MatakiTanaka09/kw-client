<template>
    <StickyFooter
        :path="path"
        :price="price"
    />
</template>

<script>
    import StickyFooter from "./StickyFooter"
    export default {
        name: "StickyFooterLogic",
        components: {
            StickyFooter
        },
        props: {
            path: {
                type: String
            },
            price: {
                type: Number
            }
        }
    }
</script>

<style scoped>

</style>
