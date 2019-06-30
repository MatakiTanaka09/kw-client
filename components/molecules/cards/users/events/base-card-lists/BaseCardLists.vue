<template>
    <div class="base__container mb_48">
        <h2 class="heading_h2 mb_24">{{ heading }}</h2>
        <div class="event-card-lists">
            <BaseCard
                v-for="res in response"
                :key="res.id"
                :data="res"
            />
        </div>
        <div class="more__button">
            <nuxt-link :to="url">
                <div class="btn">
                    もっと見る
                </div>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
    import BaseCard from "~/components/atoms/cards/users/events/base-cards/BaseCard"
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
            },
            url: {
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
    .mb_24 {
        margin-bottom: 24px;
    }
    .mb_32 {
        margin-bottom: 32px;
    }
    .mb_48 {
        margin-bottom: 48px;
    }
    .base__container {
        .event-card-lists {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            height: auto;
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
