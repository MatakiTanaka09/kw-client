<template>
    <div class="reserve__container">
        <h1 class="heading mb_24">予約受付完了！</h1>
        <div class="wrapper mb_16">
            ご予約ありがとうございます。これで【予約完了】となります。<br><br>
            スクール状況によって、満席・キャンセルがある場合は、Kidsweekend運営からお客様にご連絡することがあります。予めご了承ください。
        </div>
        <div class="buttons__container">
            <div class="button__group">
                <nuxt-link :to="path.user_account">
                    <div class="btn pink">
                        予約したイベントを確認する
                    </div>
                </nuxt-link>
            </div>
            <div class="button__group">
                <nuxt-link :to="path.search_events">
                    <div class="btn light-green">
                        続けてイベントを探す
                    </div>
                </nuxt-link>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "user-events-id-reserved",
        layout: "user",
        data() {
            return {
                path: {
                    user_account: "/user/me",
                    search_events: "/user/events/"
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    a:hover {
        opacity: 0.6;
    }
    .heading {
        font-size: 24px;
        font-weight: 800;
        text-align: center;
    }
    .sub-heading {
        font-size: 16px;
        font-weight: 800;
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
    .mt_8 {
        margin-top: 8px;
    }
    .mr_16 {
        margin-right: 16px;
    }
    a {
        color: gray;
    }

    table {
        width: 100%;
        table-layout: fixed;
    }
    table td {
        overflow-wrap : break-word;
    }
    .reserve__container {
        padding: 16px;
        .wrapper {
            line-height: 200%;
            padding: 16px;
            background-color: whitesmoke;
        }
        .buttons__container {
            display: flex;
            width: 100%;
            .button__group {
                width: 50%;
                padding: 8px;
                margin: 4px;
                .btn {
                    padding: 4px 12px;
                    border-radius: 4px;
                    font-size: 16px;
                    font-weight: 800;
                    text-align: center;
                }
                .pink {
                    color: rgb(226, 121, 133);
                    border: 2px solid rgb(226, 121, 133);
                }
                .light-green {
                    color: rgb(94, 205, 189);
                    border: 2px solid rgb(94, 205, 189);
                }
            }
        }
    }
    // SP横、タブレット縦
    @media screen and (min-width: 481px) {
        .reserve__container {
            max-width: 750px;
            margin: 0 auto;
        }
    }

    // デスクトップ、タブレット横
    @media screen and (min-width: 769px) {
    }
</style>
