<template>
    <div class="recommend__container mb_48">
        <h2 class="heading_h2 mb_24">{{ heading }}</h2>
        <div class="event-card-lists">
            <BaseCard
                v-for="res in response"
                :key="res.id"
                :data="res"
            />
        </div>
    </div>
</template>

<script>
    import BaseCard from "~/components/atoms/cards/users/books/base-cards/BaseCard"
    export default {
        name: "BaseCardLists",
        components: {
            BaseCard
        },
        data() {
            return {
            }
        },
        props: {
            response: {
                type: Array,
                default: () => []
            },
            heading: {
                type: String
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
    .mb_48 {
        margin-bottom: 48px;
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
