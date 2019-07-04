<template>
    <div class="create__container">
        <h1 class="heading mb_24">お子さん情報</h1>
        <form class="mb_32"
              v-for="(child,index) in response"
              :key="index"
        >
            <div class="form__title">
                <h3 class="mb_16">{{ childCounter(index) }}人目のお子さん</h3>
                <!--<template v-if="checkChildNumForRemoveButton(index)">-->
                    <!--<div class="remove__button">-->
                        <!--<a @click="removeUserChild">-->
                            <!--<div class="btn">-->
                                <!--取り消す-->
                            <!--</div>-->
                        <!--</a>-->
                    <!--</div>-->
                <!--</template>-->
            </div>
            <div class="field wrapper mb_16">
                <label class="label">名字</label>
                <div class="control">
                    <input class="input" type="text" placeholder="田中又暉" v-model="child.full_name">
                </div>
            </div>
            <div class="field wrapper mb_16">
                <label class="label">名前</label>
                <div class="control">
                    <input class="input" type="text" placeholder="たなかゆうき" v-model="child.full_kana">
                </div>
            </div>
            <div class="field wrapper mb_16">
                <label class="label">性別</label>
                <div class="control">
                    <div class="select">
                        <select v-model="child.sex_id">
                            <option selected>性別</option>
                            <option value="2">男</option>
                            <option value="3">女</option>
                            <option value="4">その他</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="mb_24">
                <div class="wrapper mb_8">
                    <label class="label">誕生日</label>
                    <p class="">{{ formatDate(child.birth_day) }}</p>
                </div>
            </div>
        </form>
        <div class="buttons__container mb_48">
            <div class="button__group">
                <nuxt-link :to="back_url">
                    <div class="btn light-green">
                        前に戻る
                    </div>
                </nuxt-link>
            </div>
            <div class="button__group">
                <a @click.prevent="putChildren">
                    <div class="btn pink">
                        保存する
                    </div>
                </a>
            </div>
        </div>
        <div class="additional_child">
            <h2 class="additional-heading mb_16">お子さん情報を追加したい方は、こちら</h2>
            <div class="add__child mb_32">
                <nuxt-link :to="new_url">
                    <div class="btn">
                        お子さん情報を追加する
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
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

    import { mapGetters } from 'vuex'
    export default {
        name: "",
        layout: "user",
        data() {
            return {
                response: [],
                new_url: `/user/me/${this.$route.params.id}/children/new`,
                back_url: `/user/me/${this.$route.params.id}`,
            }
        },
        async asyncData({ $axios, params }) {
            return $axios.$get(`/users/user-parents/${params.id}/children`)
                .then(res => {
                    return { response: res["children"] }
                }).catch(e => {
                    console.log(e)
                })
        },
        methods: {
            putChildren: async function() {
                let _children = [];
                let ok = 0
                const children = this.response
                for(let i = 0; i < children.length; i++) {
                    _children[i] = Object.assign(children[i], {icon: ""});
                }
                _children.forEach((el,i) => {
                    console.log(`users/user-children/${el.id}`)
                    this.$axios.put(`users/user-children/${el.id}`, el)
                        .then(res => ok += 0)
                        .catch(e => console.log(e))
                })
                ok === 0 ? this.$router.push(`/user/me/${this.$route.params.id}`) : this.$router.push("./")
            },
            // addUserChild() {
            //     const userChild = {
            //         full_name: '',
            //         full_kana: '',
            //         sex_id: '',
            //         birth_day: {
            //             date: '',
            //             year: '',
            //             month: '',
            //             day: ''
            //         }
            //     }
            //     this.edit_children.push(userChild)
            // },
            // removeUserChild() {
            //     this.response.pop()
            // },
            checkChildNumForRemoveButton: function(index) {
                return index >= 1
            },
            childCounter: function(index) {
                return index + 1
            },
            range: function(min,max){
                let array = [],
                    j = 0;
                for(let i = min; i <= max; i++){
                    array[j] = i;
                    j++;
                }
                return array;
            },
            checkYear: function() {
                const now = new Date();
                return now.getFullYear()
            },
            formatBirthDay: function(year, month, day) {
                const date = [year, month, day].join("-");
                return new Date(date);
            },
            formatDate: function(birth_day) {
                const d = new Date(birth_day);
                const year = d.getFullYear();
                const month = d.getMonth() + 1;
                const date = d.getDate();
                return this.formatStringDate(year, month, date);
            },
            formatStringDate: function(year, month, date) {
                return year + "年" + month + "月" + date + "日";
            },
            checkUnprocessableUserChildren: async function(user_children) {
                await this.$nextTick();
                return user_children.length !== 0;
            }
        },
        computed: {
            user() {
                return this.$store.getters['auth/user']
            },
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
    .additional-heading {
        font-size: 14px;
        font-weight: 600;
        text-align: center;
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
    .mt_8 {
        margin-top: 8px;
    }
    .mr_16 {
        margin-right: 16px;
    }
    a {
        color: gray;
    }
    .create__container {
        padding: 16px;
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
    .form__title {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .remove__button {
        width: 33%;
        text-align: center;
        .btn {
            padding: 4px 6px;
            border: 1px solid red;
            border-radius: 4px;
            color: red;
            font-size: 14px;
            font-weight: 600;
        }
    }

    // SP横、タブレット縦
    @media screen and (min-width: 481px) {
        .create__container {
            max-width: 750px;
            margin: 0 auto;
        }
    }
    // デスクトップ、タブレット横
    @media screen and (min-width: 769px) {

    }
</style>
