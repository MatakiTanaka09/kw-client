<template>
    <div class="top__container mb_150">
        <div class="top">
            <div class="content_all_center">
                <h1 class="title">こどもの好きを<br>見つけよう</h1>
                <p class="sub-title">こどもの「やりたい」を好きなだけ体験できる新しい学びスタイル</p>
            </div>
            <div class="top__image mb_32">
                <figure class="image">
                    <img src="http://placehold.jp/450x700.png" alt="">
                </figure>
            </div>
            <div class="search__buttons mb_24">
                <div class="search__button">
                    <div class="">
                        <button class="button btn custom">子どもの年齢</button>
                    </div>
                    <div class="">
                        <button class="button btn">さがす</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="main__content mb_64">
                <h2 class="heading mb_32">Kidsweekendとは</h2>
                <div class="description">
                    <p>お子様の興味に合わせて、様々なジャンルの習い事やアクティビティを、 年齢、場所、時間から簡単に検索し予約できるサービスです。</p><br>
                    <p>一回参加型のアクティビティを中心に、興味のあるものを好きなだけ体験する中で、 子供の「好き」や「好奇心」を広げます。</p><br>
                    <p>Kidsweekendは、未来を生き抜く子供たちに新しい学びのカタチを提供します！</p><br>
                </div>
            </div>
            <div class="how_to_use">
                <h2 class="heading mb_32">つかいかた</h2>
                <div class="find__experience mb_48">
                    <h3 class="heading_h3 mb_12">さがす</h3>
                    <figure class="image how_to_use_image">
                        <img src="https://kw-prod-bucket.s3-ap-northeast-1.amazonaws.com/top/sp_find_image.png" alt="find">
                    </figure>
                    <div class="how_to_use_description mt_12">
                        <p>日時・年齢・場所から</p>
                        <p>アクティビティを見つける</p>
                    </div>
                </div>
                <div class="reserve__experience mb_48">
                    <h3 class="heading_h3 mb_12">予約する</h3>
                    <figure class="image how_to_use_image">
                        <img src="https://kw-prod-bucket.s3-ap-northeast-1.amazonaws.com/top/sp_reserve_image.png" alt="reserve">
                    </figure>
                    <div class="how_to_use_description mt_12">
                        <p>気に入ったアクティビティを</p>
                        <p>そのまま簡単に予約する</p>
                    </div>
                </div>
                <div class="enjoy__experience mb_48">
                    <h3 class="heading_h3 mb_12">体験する</h3>
                    <figure class="image how_to_use_image">
                        <img src="https://kw-prod-bucket.s3-ap-northeast-1.amazonaws.com/top/sp_experience_image.png" alt="enjoy">
                    </figure>
                    <div class="how_to_use_description mt_12">
                        <p>あとはお子様をつれていくだけ！</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="event__container mb_24">
            <div class="event__container__wrapper">
                <RecentlyCardLists/>
            </div>
        </div>
        <div class="end__content mb_64">
            <div class="mb_32">
                <div class="content_all_center">
                    <h1 class="title">こどもの好きを<br>見つけよう</h1>
                    <p class="sub-title mb_12">こどもの「やりたい」を好きなだけ体験できる新しい学びスタイル</p>
                    <div class="button-box">
                        <nuxt-link to="/user/auth/register">
                            <button class="btn">登録する</button>
                        </nuxt-link>
                    </div>
                </div>
                <figure class="image">
                    <img src="http://placehold.jp/450x450.png" alt="">
                </figure>
            </div>
        </div>
    </div>
</template>

<script>

    import RecentlyCardLists from "~/components/molecules/cards/users/events/recently-card-lists/RecentlyCardLists"
    export default {
        layout: "user",
        components: {
            RecentlyCardLists
        },
        data() {
            return {
            }
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    .heading_h3 {
        font-size: 20px;
        color: white;
        font-weight: 800;
        text-align: center;
    }
    .mb_8 {
        margin-bottom: 8px;
    }
    .mb_12 {
        margin-bottom: 12px;
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
    .mb_64 {
        margin-bottom: 64px;
    }
    .mb_150 {
        margin-bottom: 150px;
    }
    .mt_12 {
        margin-top: 12px;
    }
    // 全デバイス、SP縦（max-width: 480px）
    .top__container {
        .title {
            color: white;
            font-size: 36px;
            font-weight: 900;
        }
        .sub-title {
            color: white;
            font-size: 16px;
            font-weight: 600;
        }
        .top {
            position: relative;
            &__image {}
            .search__buttons {
                .search__button {
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    .btn {
                        padding: 0 36px;
                        font-weight: 800;
                        border: 1px solid rgb(226, 121, 133);
                        color: rgb(226, 121, 133);
                    }
                    .custom {
                        background-color: rgb(226, 121, 133);
                        border: 2px solid rgb(226, 121, 133);
                        color: white;
                    }
                }
            }
        }
        .main {
            padding: 16px;
            &__content {
                .description {
                    line-height: 200%;
                    text-align: center;
                }
            }
            .how_to_use {
                padding: 24px;
                margin: -16px;
                background-color: rgb(94, 205, 189);
                .how_to_use_description {
                    text-align: center;
                    color: white;
                    line-height: 200%;
                    font-weight: 600;
                }
                .how_to_use_image {
                    width: 75%;
                    height: auto;
                    margin: 0 auto;
                }
                .find__experience {
                }
                .reserve__experience {}
            }
        }
        .event__container {
            padding: 16px;
        }
        .end__content {
            position: relative;
            .btn {
                text-align: center;
                padding: 8px 12px;
                background-color: rgb(226, 121, 133);
                border: 2px solid rgb(226, 121, 133);
                border-radius: 4px;
                color: white;
                font-size: 16px;
                font-weight: 800;
                width: 75%;
            }
        }
    }
    
    // SP横、タブレット縦
    @media screen and (min-width: 481px) {

    }

    // デスクトップ、タブレット横
    @media screen and (min-width: 769px) {

    }
    .heading {
        position: relative;
        letter-spacing: 5px;
        font-size: 28px;
        color: rgb(31, 79, 181);
        font-weight: 800;
        padding-bottom: 12px;
        text-align: center;
        &::before {
            width: 50%;
            content: '';
            bottom: 0;
            right: 0;
            left: 25%;
            position: absolute;
            border-bottom: 2px solid rgb(31, 79, 181);
        }
    }
    .content_all_center {
        position: absolute;
        text-align: center;
        z-index: 100;
        width: 100%;
        height: auto;
        top: 50%;
        left: 50%;
         -ms-transform: translate(-50%,-50%);
         -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        margin: 0;
        padding: 8px;
    }
</style>
