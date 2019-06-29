<template>
    <div class="form__container mt_32">
        <form>
            <p class="login__title heading">ログイン</p>
            <div class="field mb_16">
                <label class="label">メールアドレス</label>
                <div class="control">
                    <input
                        class="input"
                        v-validate="'required|email'"
                        type="email"
                        name="email"
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
                        type="password"
                        name="password"
                        placeholder="半角英数"
                        v-model="password"
                        autocomplete="off"
                        required>
                    <div v-if="errors.has('password')">
                        {{ errors.first('password') }}
                    </div>
                </div>
            </div>

            <div class="btn__container">
                <button class="button is-block is-fullwidth" :disabled="errors.any() || !isComplete()" @click.prevent="postLogin">
                    ログインする
                </button>
            </div>

            <div class="reset__password">
                <nuxt-link to="/user/auth/Register">
                    新規登録の方はこちら
                </nuxt-link>
                <!--<span class="is-hidden-mobile">/</span><br class="is-hidden-desktop">-->
                <!--<a>パスワードを忘れた方はこちら</a>-->
            </div>
        </form>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapActions } from "vuex";
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
        middleware: "authenticated",
        layout: "user",
        data () {
            return {
                email: '',
                password: '',
            }
        },
        methods: {
            ...mapActions('auth', [
                'login',
                'logout'
            ]),
            postLogin: async function() {
                const params = {
                    email: this.email,
                    password: this.password
                };
                try {
                    await this.login(params).then(res => console.log(res));
                    // this.$toast.show('保存しました')
                } catch(e) {
                    console.log("error",e);
                }
            },
            isComplete: function() {
                return this.email && this.password
            }
        },
        computed: {
            ...mapGetters('auth', ['user'])
        },
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
</style>
