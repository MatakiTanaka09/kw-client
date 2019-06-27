<template>
    <div class="complete__container">
        <h1 class="heading mb_24">ユーザーアカウント登録完了</h1>
        <div class="wrapper mb_32">
            <h2 class="sub-heading mb_8">ご登録ありがとうございます。</h2>
            <div class="content">
                アカウント登録が完了しました。これで簡単3ステップで、ご予約することができます。<br><br>
                子育てを頑張るすべての人が、「もっと自由に、自分らしく、子育てをアップデート」できることを、Kidsweekendは全力で応援してまいります！
            </div>
        </div>
        <div class="create__button">
            <nuxt-link :to="path">
                <div class="btn">
                    さっそく、検索する
                </div>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "user-events-id-reserve",
        layout: "user",
        data() {
            return {
                path: "/user/events/"
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
    .create__button {
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
    .complete__container {
        padding: 16px;
        .wrapper {
            .content {
                line-height: 200%;
            }
        }
        .add__child {
            width: 100%;
            text-align: center;
            .btn {
                padding: 8px 12px;
                border: 2px solid gray;
                border-radius: 4px;
                color: gray;
                font-size: 16px;
                font-weight: 800;
            }
        }
        .buttons__container {
            display: flex;
            width: 100%;
            .button__group {
                width: 50%;
                padding: 4px;
                .btn {
                    padding: 8px 12px;
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
    .child-box {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    input[type=checkbox] {
        display: none;
    }
    .checkbox {
        box-sizing: border-box;
        -webkit-transition: background-color 0.2s linear;
        transition: background-color 0.2s linear;
        position: relative;
        display: inline-block;
        padding: 10px 10px 10px 32px;
        border-radius: 8px;
        background-color: #f6f7f8;
        vertical-align: middle;
        cursor: pointer;
        overflow: hidden;
        width: 100%;
    }
    .checkbox:hover {
        background-color: #e2edd7;
    }
    .checkbox:hover:after {
        border-color: #53b300;
    }
    .checkbox:after {
        -webkit-transition: border-color 0.2s linear;
        transition: border-color 0.2s linear;
        position: absolute;
        top: 55%;
        left: 7px;
        display: block;
        margin-top: -10px;
        width: 16px;
        height: 16px;
        border: 2px solid #bbb;
        border-radius: 6px;
        content: '';
    }
    .checkbox:before {
        -webkit-transition: opacity 0.2s linear;
        transition: opacity 0.2s linear;
        position: absolute;
        top: 50%;
        left: 13px;
        display: block;
        margin-top: -7px;
        width: 5px;
        height: 9px;
        border-right: 3px solid #53b300;
        border-bottom: 3px solid #53b300;
        content: '';
        opacity: 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    input[type=checkbox]:checked + .checkbox:before {
        opacity: 1;
    }
</style>
