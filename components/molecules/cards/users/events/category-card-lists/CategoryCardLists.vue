<template>
    <div class="category__container mb_32">
        <h2 class="heading_h2 mb_8">{{ heading }}</h2>
        <div class="category-card-lists">
            <BaseCard
                v-for="(p,index) in params"
                :key="index"
                :name="p.name"
                :path="createUrl(p.id)"
                :image_path="p.filename"
            />
        </div>
    </div>
</template>

<script>
    import BaseCard from "~/components/atoms/cards/users/events/category-base-cards/BaseCard"
    export default {
        components: {
            BaseCard
        },
        data() {
            return {
                heading: 'カテゴリー一覧',
                url: '/user/events/search/category',
                params: []
            }
        },
        methods: {
            createUrl: function(category_id) {
                const q = "?q=";
                const sort = "updated_at";
                const order = "desc";
                return `${this.url}${q}` + category_id + `&sort=${sort}&order=${order}`
            },
            gainFirstData() {
                const create_url = `users/category-masters`;

                return this.$axios.$get(create_url)
                    .then(res => {
                        this.params = res
                    }).catch(e => {
                        console.log(e)
                    })
            }
        },
        mounted() {
            this.gainFirstData()
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
    .category__container {
        .category-card-lists {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            height: auto;
        }
    }
</style>
