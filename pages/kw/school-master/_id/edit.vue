<template>
    <div class="category__container">
        <div class="category__wrapper mb_32">
            <h2>
                <strong>SchoolMaster編集画面</strong>
            </h2>
            <p>id: {{ response.id }}</p>
        </div>
        <div class="edit__container mb_32">
            <form class="mb_32">
                <div class="field mb_16">
                    <label class="label">スクール名</label>
                    <div class="control">
                        <input
                            v-validate="'required'"
                            class="input"
                            name="name"
                            type="text"
                            placeholder="Text input"
                            v-model="response.name">
                        <div v-if="errors.has('name')">
                            {{ errors.first('name') }}
                        </div>
                    </div>
                </div>
                <div class="field mb_16">
                    <label class="label">スクール詳細</label>
                    <div class="control">
                        <textarea
                            v-validate="'required'"
                            class="textarea"
                            name="detail"
                            placeholder="Text input"
                            v-model="response.detail">
                        </textarea>
                        <div v-if="errors.has('detail')">
                            {{ errors.first('detail') }}
                        </div>
                    </div>
                </div>
                <div class="field mb_16">
                    <label class="label">メールアドレス</label>
                    <div class="control">
                        <input
                            v-validate="'required|email'"
                            class="input"
                            name="email"
                            type="text"
                            placeholder="Text input"
                            v-model="response.email">
                        <div v-if="errors.has('email')">
                            {{ errors.first('email') }}
                        </div>
                    </div>
                </div>
                <div class="field mb_16">
                    <label class="label">電話番号</label>
                    <div class="control">
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
                <div class="field mb_16">
                    <label class="label">URL（HPなど）</label>
                    <div class="control">
                        <input
                            v-validate="'required'"
                            class="input"
                            name="url"
                            type="text"
                            placeholder="Text input"
                            v-model="response.url">
                        <div v-if="errors.has('url')">
                            {{ errors.first('url') }}
                        </div>
                    </div>
                </div>
                <div class="field mb_16">
                    <label class="label">会社アイコン</label>
                    <div class="control">
                        <input
                            v-validate="'required'"
                            class="input"
                            name="url"
                            type="text"
                            placeholder="Text input"
                            v-model="response.url"
                            :disabled="true">
                        <div v-if="errors.has('url')">
                            {{ errors.first('url') }}
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
            <div class="buttons__container">
                <div class="button__group">
                    <nuxt-link :to="back_url">
                        <button class="button btn light-green">
                            前に戻る
                        </button>
                    </nuxt-link>
                </div>
                <div class="button__group">
                    <button class="button btn pink" @click="putSchoolMaster" :disabled="errors.any() || !isComplete(response)">
                        更新する
                    </button>
                </div>
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
        name: "kw-school-master-id-edit",
        layout: 'kw',
        data() {
            return {
                response: {},
                data: {},
                back_url: `/kw/school-master`
            }
        },
        asyncData({ $axios, route }) {
            return $axios.$get('kw/school-masters')
                .then(res => {
                    const school_master = res["data"].find(sch => sch.id === route.params.id)
                    return { response: school_master, data: res }
                }).catch(e => {
                    console.log(e)
                })
        },
        methods: {
            async putSchoolMaster() {
                const confirm_delete = confirm(`「スクールID ${this.$route.params.id}」を、本当に更新しますか？`)
                if(confirm_delete) {
                    const payload = {
                        name: this.response.name,
                        detail: this.response.detail,
                        email: this.response.email,
                        url: this.response.url,
                        tel: this.response.tel,
                        icon: this.response.icon,
                        zip_code1: this.response.zip_code1,
                        zip_code2: this.response.zip_code2,
                        state: this.response.state,
                        city: this.response.city,
                        address1: this.response.address1,
                        address2: this.response.address2,
                        longitude: this.response.longitude,
                        latitude: this.response.latitude,
                    }
                    await this.$axios.put(`kw/school-masters/${this.$route.params.id}`, payload)
                    this.$router.push("/kw/school-master")
                }
                else {
                    return false
                }
            },
            isComplete: function(response) {
                return response.name && response.detail && response.email && response.tel && response.icon && response.zip_code1 && response.zip_code2 && response.state && response.city && response.address1 && response.address2
            }
        }
    }
</script>

<style scoped lang="scss">
    .is-valid {
        border-color: rgb(94, 205, 189);
    }
    .is-invalid {
        border-color: rgb(226, 121, 133);
    }
    .mb_16 {
        margin-bottom: 16px;
    }
    .mb_32 {
        margin-bottom: 32px;
    }
    .category__container {
        .category__wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .edit__container {
            width: 100%;
            .buttons__container {
                display: flex;
                width: 100%;
                .button__group {
                    width: 50%;
                    padding: 4px;
                    .btn {
                        width: 100%;
                        height: 100%;
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
    }
</style>
