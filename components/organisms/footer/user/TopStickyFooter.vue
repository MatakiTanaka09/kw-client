<template>
    <div class="sticky__footer">
        <div class="sticky__footer__container">
            <div class="sticky__footer__container__wrapper">
                <div class="left__item">
                    <div class="buttons">
                        <a>
                            <button class="button reserve-request-button">
                                子供の年齢
                            </button>
                        </a>
                    </div>
                </div>
                <div class="right__item">
                    <div class="buttons">
                        <a>
                            <button class="button reserve-request-button">
                                {{ reserve_request }}
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopStickyFooter",
        data() {
            return {
                reserve_request: "探す"
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
                width: 100%;
                height: 100%;
                .left__item {
                    .buttons {
                        display: flex;
                        align-items: center;
                        justify-content: space-around;
                        .reserve-request-button {
                            padding: 0 64px;
                            font-weight: 800;
                            border: 1px solid rgb(226, 121, 133);
                            color: rgb(226, 121, 133);
                        }

                    }
                }
                .right__item {
                    .buttons {
                        .reserve-request-button {
                            padding: 0 24px;
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
