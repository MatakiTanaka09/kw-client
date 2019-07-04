<template>
    <div class="events__container mb_250">
        <div class="search__container">
            <div class="search__buttons mb_8">
                <div class="search__button">
                    <button class="button">
                        日付
                    </button>
                </div>
                <div class="search__button">
                    <button class="button">
                        こどもの年齢
                    </button>
                </div>
                <div class="search__button">
                    <button class="button">
                        カテゴリー
                    </button>
                </div>
                <div class="search__button">
                    <button class="button">
                        場所
                    </button>
                </div>
            </div>
            <div class="search__dates">
                <h2 class="mb_8">今日・明日で検索！</h2>
                <div class="date">
                    <div class="date-box bg_orange">
                        <nuxt-link to="/">
                            <div class="today">
                                <h3 class="date-box-title">今日</h3>
                                <p class="date-box-sub-title">today</p>
                            </div>
                        </nuxt-link>
                    </div>
                    <div class="date-box bg_sky-blue">
                        <div class="tomorrow">
                            <h3 class="date-box-title">明日</h3>
                            <p class="date-box-sub-title">tomorrow</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="event__container">
            <div class="event__container__wrapper">
                <!--<RecommendCardLists/>-->
                <RecentlyCardLists/>
                <!--<CategoryCardLists/>-->
            </div>
        </div>
    </div>
</template>

<script>
    import RecommendCardLists from "~/components/molecules/cards/users/events/recommend-card-lists/RecommendCardLists"
    import RecentlyCardLists from "~/components/molecules/cards/users/events/recently-card-lists/RecentlyCardLists"
    // import CategoryCardLists from "~/components/molecules/cards/users/events/category-master-card-lists/CategoryCardLists"
    export default {
        name: "events-index",
        layout: "user",
        components: {
            RecommendCardLists,
            RecentlyCardLists,
            // CategoryCardLists
        },
        data() {
            return {
                path: {
                    more__button: {
                        category: "/user/events/search/category-master",
                        age: "/user/events/search/age",
                        recently: "/user/events/search/date",
                    }
                },
                recentlyEvent: []
            }
        },
        asyncData() {

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
    .mb_250 {
        margin-bottom: 250px;
    }
    .bg_orange {
        background-color: #F45918;
    }
    .bg_sky-blue {
        background-color: #40C4C4;
    }
    .events__container {
        padding: 16px;
        .search__container {
            .search__buttons {
                display: flex;
                flex-wrap: wrap;
                .search__button {
                    padding: 4px;
                }
            }
            .search__dates {
                .date {
                    display: flex;
                    .date-box {
                        margin: 0 8px 8px 0;
                        width: calc((100% - 8px) / 2);
                        height: auto;
                        border-radius: 4px;
                        padding: 8px 12px;
                    }
                }
            }
        }
        .date-box-title {
            color: white;
            font-size: 16px;
            font-weight: 800;
        }
        .date-box-sub-title {
            color: white;
            font-size: 14px;
            font-weight: 600;
        }
        .event__container {
            margin: 24px 0;
            &__wrapper {
            }
        }
    }
</style>
