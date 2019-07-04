<template>
    <div class="form__container mt_32">
        <form>
            <p class="login__title heading">新規登録</p>
            <div class="field mb_16">
                <label class="label">メールアドレス</label>
                <div class="control">
                    <input
                        v-validate="'required|email'"
                        class="input"
                        name="email"
                        type="email"
                        placeholder="半角英数"
                        v-model="email"
                        required
                        autocomplete="off"
                        autofocus>
                    <div v-if="errors.has('email')">
                        {{ errors.first('email') }}
                    </div>
                </div>
            </div>
            <div class="field mb_16">
                <label class="label">パスワード</label>
                <div class="control">
                    <input
                        v-validate="'required'"
                        class="input"
                        name="password"
                        type="password"
                        placeholder="半角英数"
                        v-model="password"
                        required
                        autocomplete="off">
                    <div v-if="errors.has('password')">
                        {{ errors.first('password') }}
                    </div>
                </div>
            </div>
            <div class="field mb_16">
                <label class="label">パスワード確認用</label>
                <div class="control">
                    <input
                        class="input"
                        v-validate="'required'"
                        name="password_confirmation"
                        type="password"
                        placeholder="半角英数"
                        v-model="password_confirmation"
                        required
                        autocomplete="off">
                    <div v-if="errors.has('password_confirmation')">
                        {{ errors.first('password_confirmation') }}
                    </div>
                </div>
            </div>
            <div class="btn__container">
                <button class="button is-block is-fullwidth" :disabled="errors.any() || !isComplete()" @click.prevent="handleRegister">
                    新規登録する
                </button>
            </div>

            <div class="reset__password">
                <nuxt-link to="/user/auth/Login">新規登録済の方はこちら</nuxt-link>
            </div>
        </form>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import Vue from 'vue'
    import VeeValidate, { Validator } from 'vee-validate'
    import ja from 'vee-validate/dist/locale/ja'

    Vue.use(VeeValidate, {
        classes: true,
        classNames: {
            valid: 'is-valid',
            invalid: 'is-invalid'
        }
    });

    Validator.localize('ja', ja);

    export default {
        layout: "user",
        data() {
            return {
                email: '',
                password: '',
                password_confirmation: ''
            }
        },
        methods: {
            ...mapActions({
                register: 'auth/register'
            }),
            async handleRegister() {
                const registerData = {
                    email                 : this.email,
                    password              : this.password,
                    password_confirmation : this.password_confirmation
                }
                await this.register(registerData).then(res => {
                    console.log(res)
                });
                // this.$router.push('/user/auth/register/confirm');
            },
            isComplete: function() {
                return this.email && this.password && this.password_confirmation
            }
        }
    }
</script>

<style lang="scss" scoped>
    .is-valid {
        border-color: rgb(94, 205, 189);
    }
    .is-invalid {
        border-color: rgb(226, 121, 133);
    }
    a {
        color: rgb(66, 143, 238);
    }
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
    .mb_8 {
        margin-bottom: 8px;
    }
    .mb_16 {
        margin-bottom: 16px;
    }
    .mt_8 {
        margin-top: 8px;
    }
    .mt_32 {
        margin-top: 32px;
    }
    .mb_250 {
        margin-bottom: 250px;
    }
    .form__container {
        padding: 16px;
        .btn-line {
            background-color: #00c300;
            border: 1px solid #00c300;
            color: white;
        }
        .login__title {
            padding-bottom: 16px;
        }
        .label {
            font-size: 12px;
            font-weight: normal;
        }
        .btn__container {
            margin-top: 24px;
            .button {
                background-color: rgb(66, 143, 238);
                border: 1px solid rgb(66, 143, 238);
                color: white;
            }
        }
        .reset__password {
            margin-top: 15px;
            text-align: center;
        }
    }
    // SP横、タブレット縦
    @media screen and (min-width: 481px) {
        .form__container {
            max-width: 750px;
            margin: 0 auto;
        }
    }

    // デスクトップ、タブレット横
    @media screen and (min-width: 769px) {

    }
</style>
