<template>
    <div class="create__container">
        <h1 class="heading mb_24">ユーザーアカウント登録</h1>
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
                        v-model="full_name">
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
                        v-model="full_kana">
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
                            v-model="tel">
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
                            v-model="sex_id">
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
                            v-model="zip_code1">
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
                            v-model="zip_code2">
                        <div v-if="errors.has('zip_code2')">
                            {{ errors.first('zip_code2') }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="field-body mb_16">
                <div class="field">
                    <label class="label">都道府県</label>
                    <div class="control">
                        <input
                            v-validate="'required'"
                            class="input"
                            name="state"
                            type="text"
                            placeholder="例）東京都"
                            v-model="state">
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
                            v-model="city">
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
                            v-model="address1">
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
                            v-model="address2">
                        <div v-if="errors.has('address2')">
                            {{ errors.first('address2') }}
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <div class="create__button">
            <button class="button btn" @click="storeParentAndMoving" :disabled="errors.any() || !isComplete()">
                続けてお子さん情報を登録する
            </button>
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
        name: "user-me-new-parent",
        layout: "user",
        data() {
            return {
                full_name: '',
                full_kana: '',
                tel: '',
                sex_id: '',
                zip_code1: '',
                zip_code2: '',
                state: '',
                city: '',
                address1: '',
                address2: ''
            }
        },
        methods: {
            saveLocalStorage: function() {
                const userParentData = {
                    full_name : this.full_name,
                    full_kana : this.full_kana,
                    tel       : this.tel,
                    sex_id    : this.sex_id,
                    zip_code1 : this.zip_code1,
                    zip_code2 : this.zip_code2,
                    state     : this.state,
                    city      : this.city,
                    address1  : this.address1,
                    address2  : this.address2
                };
                window.localStorage.setItem("parent", JSON.stringify(userParentData));
            },
            getLocalStorage: function(){
                const ls_data = JSON.parse(window.localStorage.getItem("parent"));
                if (!ls_data) {
                    return false;
                }
                else {
                    this.full_name = ls_data.full_name;
                    this.full_kana = ls_data.full_kana;
                    this.tel = ls_data.tel;
                    this.sex_id = ls_data.sex_id;
                    this.zip_code1 = ls_data.zip_code1;
                    this.zip_code2 = ls_data.zip_code2;
                    this.state = ls_data.state;
                    this.city = ls_data.city;
                    this.address1 = ls_data.address1;
                    this.address2 = ls_data.address2;
                }
            },
            storeParentAndMoving: async function() {
                await this.saveLocalStorage();
                this.$router.push("/user/me/new/child");
            },
            isComplete: function() {
                return this.full_name && this.full_kana && this.tel && this.sex_id && this.zip_code1 && this.zip_code2 && this.state && this.city && this.address1 && this.address2
            }
        },
        mounted() {
            this.getLocalStorage()
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
            height: 50px;
            text-align: center;
            .button {
                margin: 0 auto;
            }
            .btn {
                width: 100%;
                height: 100%;
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
