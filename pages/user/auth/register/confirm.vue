<template>
    <div class="confirm__container mb_250">
        <h1 class="heading mb_24">ユーザー登録完了！</h1>
        <div class="confirm-message">
            <p>ユーザー登録ありがとうございます。まだ本登録はされていません。</p><br>
            <p>メールを送付しましたので、添付されているURLをクリックして、本登録を済ませていただくよう、ご協力お願いいたします。</p>
        </div>
    </div>
</template>

<script>
    export default {
        layout: "user"
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
        font-weight: 500;
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
    .mb_250 {
        margin-bottom: 250px;
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
    .confirm__container {
        padding: 16px;
        .confirm-message {
            background-color: whitesmoke;
            border-radius: 4px;
            font-size: 12px;
            padding: 8px;
        }
    }
</style>
