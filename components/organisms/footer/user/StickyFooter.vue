<template>
    <div class="sticky__footer">
        <div class="sticky__footer__container">
            <div class="sticky__footer__container__wrapper">
                <div class="left__item">
                    <div class="price">
                        <span class="price-title">{{ price }}</span>
                        <span>円/ 1人</span>
                    </div>
                </div>
                <div class="right__item">
                    <div class="buttons">
                        <nuxt-link :to="path">
                            <button class="button reserve-request-button">
                                {{ reserve_request }}
                            </button>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StickyFooter",
        data() {
            return {
                reserve_request: "申込リクエスト"
            }
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

<style lang="scss" scoped>
    .sticky__footer {
        height: 70px;
        position: fixed;
        bottom: 0;
        width: 100%;
        border-top: 1px solid #EBEBEB;
        box-shadow: 0 3px 9px 3px rgba(0, 0, 0, 0.05);
        background-color: white;
        z-index: 1000;
        &__container {
            padding: 12px;
            height: 100%;
            &__wrapper {
                display: flex;
                justify-content: space-around;
                align-items: center;
                height: 100%;
                .left__item {
                    .price {
                        .price-title {
                            font-weight: 800;
                            font-size: 16px;
                        }

                    }
                }
                .right__item {
                    .buttons {
                        .reserve-request-button {
                            font-weight: 800;
                            background-color: rgb(226, 121, 133);
                            border: 1px solid rgb(226, 121, 133);
                            color: white;
                        }

                    }
                }
            }
        }
    }
</style>
