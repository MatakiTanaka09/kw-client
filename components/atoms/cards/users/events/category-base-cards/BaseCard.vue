<template>
    <div class="category-card">
        <nuxt-link :to="path">
            <figure class="image image-expand">
                <img :src="image_path" :alt="name">
            </figure>
            <p class="content_all_center">{{ name }}</p>
        </nuxt-link>
    </div>
</template>

<script>
    export default {
        name: "RecommendCard",
        props: {
            name: {
                type: String
            },
            path: {
                type: String
            },
            image_path: {
                type: String
            },
        },
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss" scoped>
    .heading_h2 {
        font-size: 18px;
        font-weight: 800;
    }
    .heading_h3 {
        font-size: 16px;
        font-weight: 600;
    }
    .mb_4 {
        margin-bottom: 4px;
    }
    .mb_8 {
        margin-bottom: 8px;
    }
    .mb_16 {
        margin-bottom: 16px;
    }
    .mb_24 {
        margin-bottom: 24px;
    }
    .mb_32 {
        margin-bottom: 32px;
    }
    .bg_orange {
        background-color: #F45918;
    }
    .bg_sky-blue {
        background-color: #40C4C4;
    }
    .icon {
        margin-right: 2px;
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
    }
    .content_all_center {
        position: absolute;
        text-align: center;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        margin:0;
        padding:0;
        z-index: 100;
        color: white;
        font-size: 24px;
        font-weight: 900;
        width: 100%;
        height: auto;
    }
    .category-card {
        position: relative;
        width: 50%;
        height: auto;
        padding: 4px;
    }
</style>
