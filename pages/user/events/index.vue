<template>
    <div class="events__container mb_250">
        <div class="search__container mb_16">
            <div class="search__dates">
                <h2 class="heading_h2 mb_8">検索</h2>
                <div class="date">
                    <div class="date-box bg_pink">
                        <nuxt-link to="#">
                            <div class="today">
                                <h3 class="date-box-title">こどもの年齢</h3>
                                <p class="date-box-sub-title">age</p>
                            </div>
                        </nuxt-link>
                    </div>
                    <div class="date-box bg_blue">
                        <nuxt-link to="#category">
                            <div class="today">
                                <h3 class="date-box-title">カテゴリー</h3>
                                <p class="date-box-sub-title">category</p>
                            </div>
                        </nuxt-link>
                    </div>
                    <div class="date-box bg_green">
                        <nuxt-link to="#">
                            <div class="today">
                                <h3 class="date-box-title">場所</h3>
                                <p class="date-box-sub-title">place</p>
                            </div>
                        </nuxt-link>
                    </div>
                    <div class="date-box bg_orange">
                        <nuxt-link to="#">
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
                    <div class="date-box bg_gray">
                        <div class="tomorrow">
                            <h3 class="date-box-title">日付で検索</h3>
                            <p class="date-box-sub-title">pick up date</p>
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
        background-color: rgb(66, 143, 238);
    }
    .bg_pink {
        background-color: rgb(226, 121, 133);
    }
    .bg_blue {
        background-color: rgb(31,79,181);
    }
    .bg_green {
        background-color: rgb(94, 205, 189);
    }
    .bg_gray {
        background-color: rgb(181, 181, 182);
    }
    .events__container {
        padding: 16px;
        .search__container {
            .search__dates {
                .date {
                    display: flex;
                    flex-wrap: wrap;
                    .date-box {
                        margin: 0 8px 8px 0;
                        width: calc(50% - 8px);
                        height: auto;
                        border-radius: 4px;
                        padding: 8px 12px;
                    }
                }
            }
        }
        .date-box-title {
            color: white;
            font-size: 14px;
            font-weight: 800;
        }
        .date-box-sub-title {
            color: white;
            font-size: 12px;
            font-weight: 600;
        }
        .event__container {
            margin: 24px 0;
            &__wrapper {
            }
        }
    }

    // SP横、タブレット縦
    @media screen and (min-width: 481px) {
        .events__container {
            max-width: 980px;
            margin: 0 auto;
            .search__container {
                .search__dates {
                    .date {
                        .date-box {
                            width: calc(100%/6 - 8px);
                        }
                    }
                }
            }
        }
    }

    // デスクトップ、タブレット横
    @media screen and (min-width: 769px) {
    }
</style>
