<template>
    <div class="column is-one-third">
        <div class="event__container">
            <nuxt-link to="/">
                <div class="event__container__images">
                    <figure class="image">
                        <img src="https://kw-prod-bucket.s3-ap-northeast-1.amazonaws.com/top/top_recommend_image_02.jpg" alt="サンプル">
                    </figure>
                    <!--<progressive-img class="activity__container__images&#45;&#45;image" :src="eventImagePath" />-->
                    <p class="event__container__images--title">
                        {{ imageTitleFormatDate("2019-06-19 00:00:00") }}
                    </p>
                </div>
                <div class="event__container__wrapper">
                    <div class="event__container__wrapper--category">
                        <p>
                            <!--{{ eventCategory }}-->
                            category
                        </p>
                    </div>
                    <div class="event__container__wrapper--title">
                        <p class="event__container__wrapper--title_sub">
                            <!--{{ eventTitle }}-->
                            test
                        </p>
                    </div>
                    <div class="event__container__wrapper--time">
                        <p>
                            <!--<span><i class="far fa-calendar-alt"></i></span>-->
                            <!--<span>{{ eventTimeFormatDate(eventDateTime) }}</span>-->
                            <span>2019-06-19</span>
                            <span class="event__container__wrapper--time-right_space"></span>
                            <!--<i class="fas fa-thumbtack"></i>-->
                            <!--<span>{{ eventPlace }}</span>-->
                            <span>1000</span>
                        </p>
                    </div>
                    <div class="event__container__wrapper--child_age">
                        <p>
                            <!--<span><i class="fas fa-child"></i></span>-->
                            <!--<span>{{ eventMinAge }}</span>-->
                            <span>1</span>
                            <span>歳以上</span>
                            <span class="event__container__wrapper-right_space"></span>
                            <!--<span><i class="fas fa-yen-sign"></i></span>-->
                            <span>一人あたり </span>
                            <!--<span>{{ eventPrice }}</span>-->
                            <span>1000</span>
                            <span>円</span>
                        </p>
                    </div>
                </div>
            </nuxt-link>
        </div>

    </div>
</template>

<script>
    import dateFormat from "~/utils/date-format"
    export default {
        name: "event-card",
        props: {
            eventDisplayType: {
                type: String,
                default: 'is-one-quarter'
            },
            eventId: {
                type: Number,
            },
            eventImagePath: {
                type: [String, Array]
            },
            eventTime: {
                type: String,
            },
            eventCategory: {
                type: String,
            },
            eventTitle: {
                type: String,
            },
            eventDateTime: {
                type: String,
            },
            eventPrice: {
                type: String,
            },
            eventPlace: {
                type: String,
            },
            eventMinAge: {
                type: String,
            },
        },
        data() {
            return {
                top_recommend_image_01: ''
            }
        },
        methods: {
            imageTitleFormatDate(date) {
                return dateFormat.imageTitleFormatDate(date)
            },
            eventTimeFormatDate(date) {
                return dateFormat.eventTimeFormatDate(date)
            }
        }
    }
</script>

<style lang="scss" scoped>
    // 全デバイス/画面サイズに共通かつ 480：スマートフォン縦
    .column {
        /*text-align: left;*/
        margin-bottom: 8px;
        .event__container {
            width: 100%;
            color: #7a7a7a;
            font-size: 12px;
            &:hover {
                opacity: 0.7;
            }
            &__images {
                position: relative;
                &--image {
                    border-radius: 8px;
                }
                &--title {
                    position: absolute;
                    bottom: 11%;
                    right: 6%;
                    left: 0px;
                    z-index: 10;
                    text-align: right;
                    font-weight: bold;
                    font-size: 24px;
                    letter-spacing: 5px;
                    color: white;
                    @media screen and (min-width: 768px) {
                        font-size: 36px;
                    }
                }
                .container__category {
                    &--name {
                        font-size: 13px;
                    }
                    &--title {
                        &_detail {
                            margin-bottom: 4px;
                            font-weight: bold;
                            font-size: 18px;
                        }
                    }
                    &--time_place {
                        margin-bottom: 4px;
                    }
                    &--child_age {
                        margin-bottom: 4px;
                    }
                    &--right_space {
                        margin-right: 8px;
                    }
                }
            }
        }
    }
    // タブレット縦 /スマートフォン横
    @media screen and (min-width: 481px) {}

    // デスクトップ/タブレット横
    @media screen and (min-width: 769px) {}
</style>
