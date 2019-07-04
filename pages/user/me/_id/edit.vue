<template>
    <div class="create__container">
        <h1 class="heading mb_24">ユーザー情報</h1>
        <form class="mb_32">
            <div class="field wrapper mb_16">
                <label class="label">氏名</label>
                <div class="control">
                    <input
                        v-validate="'required'"
                        class="input"
                        name="full_name"
                        type="text"
                        placeholder="田中太郎"
                        v-model="response.full_name">
                    <div v-if="errors.has('full_name')">
                        {{ errors.first('full_name') }}
                    </div>
                </div>
            </div>
            <div class="field wrapper mb_16">
                <label class="label">ふりがな</label>
                <div class="control">
                    <input
                        v-validate="'required'"
                        class="input"
                        name="full_kana"
                        type="text"
                        placeholder="たなかたろう"
                        v-model="response.full_kana">
                    <div v-if="errors.has('full_kana')">
                        {{ errors.first('full_kana') }}
                    </div>
                </div>
            </div>
            <div class="field">
                <label class="label">電話番号</label>
                <div class="control">
                    <div class="display__edit">
                        <input
                            v-validate="'required|telephone'"
                            class="input"
                            name="tel"
                            type="tel"
                            placeholder="090-1234-5678"
                            v-model="response.tel">
                        <div v-if="errors.has('tel:telephone')">
                            {{ errors.first('tel:telephone') }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="field wrapper mb_16">
                <label class="label">性別</label>
                <div class="control">
                    <div class="select">
                        <select
                            v-validate="'required'"
                            name="sex"
                            v-model="response.sex_id">
                            <option selected value="null">性別</option>
                            <option value="2">男</option>
                            <option value="3">女</option>
                            <option value="4">その他</option>
                        </select>
                        <div v-if="errors.has('sex')">
                            {{ errors.first('sex') }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="field-body mb_16">
                <div class="field">
                    <label class="label">郵便番号(上3桁)</label>
                    <div class="control">
                        <input
                            v-validate="'required|regex:\\d{3}'"
                            class="input"
                            name="zip_code1"
                            type="text"
                            placeholder="123"
                            v-model="response.zip_code1">
                        <div v-if="errors.has('zip_code1')">
                            {{ errors.first('zip_code1') }}
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label class="label">郵便番号(下4桁)</label>
                    <div class="control">
                        <input
                            v-validate="'required|regex:\\d{4}'"
                            class="input"
                            name="zip_code2"
                            type="text"
                            placeholder="4567"
                            v-model="response.zip_code2">
                        <div v-if="errors.has('zip_code2')">
                            {{ errors.first('zip_code2') }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="field-body mb_16 address_container">
                <div class="field">
                    <label class="label">都道府県</label>
                    <div class="control">
                        <input
                            v-validate="'required'"
                            class="input"
                            name="state"
                            type="text"
                            placeholder="例）東京都"
                            v-model="response.state">
                        <div v-if="errors.has('state')">
                            {{ errors.first('state') }}
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label class="label">区・市</label>
                    <div class="control">
                        <input
                            v-validate="'required'"
                            class="input"
                            name="city"
                            type="text"
                            placeholder="例）中央区、名古屋市北区"
                            v-model="response.city">
                        <div v-if="errors.has('city')">
                            {{ errors.first('city') }}
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label class="label">町村</label>
                    <div class="control">
                        <input
                            v-validate="'required'"
                            class="input"
                            name="address1"
                            type="text"
                            placeholder="例）月島"
                            v-model="response.address1">
                        <div v-if="errors.has('address1')">
                            {{ errors.first('address1') }}
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label class="label">番地・マンション名</label>
                    <div class="control">
                        <input
                            v-validate="'required'"
                            class="input"
                            name="address2"
                            type="text"
                            placeholder="例）1-1-1-201"
                            v-model="response.address2">
                        <div v-if="errors.has('address2')">
                            {{ errors.first('address2') }}
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <div class="create__button">
            <a @click="putUserParent">
                <div class="btn">
                    更新する
                </div>
            </a>
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

    let telephone = {
        getMessage(field, args) {
            return '電話番号は, 090-1234-5678,または10桁か11桁の数字で半角入力してください';
        },
        validate(value){
            let pattern;
            if (value.indexOf('-') ===  -1){
                // ハイフン無し
                pattern = /^\d{10}$|^\d{11}$/
            }else{
                // ハイフンあり
                pattern = /^\d{2,5}-\d{1,4}-\d{4}$/;
            }
            return pattern.test(value);
        }
    };
    Validator.extend('telephone', telephone);

    export default {
        name: "index",
        layout: 'user',
        data() {
            return {
                response: [],
            }
        },
        async asyncData({ $axios, params }) {
            const create_url = `users/user-parents/${params.id}`

            return $axios.$get(create_url)
                .then(res => {
                    return { response: res }
                }).catch(e => {
                    console.log(e)
                })
        },
        methods: {
            putUserParent: async function() {
                const user_master_id = this.user.id
                const payload = {
                    user_master_id: user_master_id,
                    full_name: this.response.full_name,
                    full_kana: this.response.full_kana,
                    tel: this.response.tel,
                    sex_id: this.response.sex_id,
                    zip_code1: this.response.zip_code1,
                    zip_code2: this.response.zip_code2,
                    state: this.response.state,
                    city: this.response.city,
                    address1: this.response.address1,
                    address2: this.response.address2
                }
                await this.$axios.put(`users/user-parents/${this.$route.params.id}`, payload)
                this.$router.push(`/user/me/${this.$route.params.id}`);
            },
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
    .create__container {
        padding: 16px;
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
    }
    .child-box {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    // SP横、タブレット縦
    @media screen and (min-width: 481px) {
        .create__container {
            max-width: 750px;
            margin: 0 auto;
            .address_container {
                display: block;
            }
        }
    }

    // デスクトップ、タブレット横
    @media screen and (min-width: 769px) {

    }
</style>
