<template>
    <div class="event-card mb_16">
        <nuxt-link :to="createUrl()">
            <div class="event-card-image mb_8">
                <figure class="image">
                    <img :src="data.image[0]['url']" alt="">
                    <!--<img src="http://placehold.jp/230x230.png" alt="">-->
                </figure>
            </div>
            <div class="event-card-contents">
                <div class="event-card-contents-title mb_4">
                    <h3 class="heading_h3">
                        {{ data.event_master.title }}
                    </h3>
                </div>
                <div class="event-card-contents-age mb_4">
                    <span>参加するお子さん： </span>
                    <div class="">
                        <!--<span>{{ data.event_master.target_min_age }}</span>-->
                    </div>
                </div>
                <div class="event-card-contents-age mb_4">
                    <span>開催日時： </span>
                    <div class="">
                        <!--<span>{{ data.event_master.target_min_age }}</span>-->
                    </div>
                </div>
                <div class="event-card-contents-price mb_4">
                    <span>料金： </span>
                    <div class="">
                        {{ data.event_master.price }}
                        <span>円</span>
                    </div>
                </div>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
    export default {
        name: "RecommendCard",
        props: {
            data: {
                type: Object,
                default: () => {}
            }
        },
        methods: {
            createUrl: function() {
                return `/user/events/${this.data.id}`
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
    .events__container {
        padding: 16px;
        .event-card-lists {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            height: auto;
            .event-card {
                width: 50%;
                height: auto;
                padding: 4px;
                a {
                    color: gray;
                }
                .event-card-contents {
                    .event-card-contents-category {
                        display: flex;
                        flex-wrap: wrap;

                        .category:first-child {
                            margin: 4px 4px 4px 0;
                        }

                        .category {
                            margin: 4px;
                            padding: 2px;
                            color: gray;
                            border: 1px solid gray;
                            border-radius: 4px;
                        }
                    }
                    .event-card-contents-title {
                    }
                    .event-card-contents-age {
                        display: flex;
                    }
                    .event-card-contents-price {
                        display: flex;
                    }
                }
            }
        }
        .more__button {
            width: 100%;
            text-align: center;
            .btn {
                padding: 8px 12px;
                border: 2px solid rgb(226, 121, 133);
                border-radius: 4px;
                color: rgb(226, 121, 133);
                font-size: 16px;
                font-weight: 800;
            }
        }
    }
</style>
