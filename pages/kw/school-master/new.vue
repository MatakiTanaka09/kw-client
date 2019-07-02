<template>
    <div class="category__container">
        <div class="category__wrapper mb_32">
            <h2>
                <strong>SchoolMaster</strong>
            </h2>
        </div>
        <div class="create__container mb_32">
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
                            v-model="name">
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
                            v-model="detail">
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
                            v-model="email">
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
                            v-model="tel">
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
                            v-model="url">
                        <div v-if="errors.has('url')">
                            {{ errors.first('url') }}
                        </div>
                    </div>
                </div>
                <div class="field mb_16">
                    <label class="label">会社アイコン</label>
                    <div class="control">
                        <input
                            v-validate="''"
                            class="input"
                            name="icon"
                            type="text"
                            placeholder="Text input"
                            v-model="icon">
                        <div v-if="errors.has('icon')">
                            {{ errors.first('icon') }}
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
            <div class="buttons__container">
                <div class="button__group">
                    <nuxt-link :to="back_url">
                        <button class="button btn light-green">
                            前に戻る
                        </button>
                    </nuxt-link>
                </div>
                <div class="button__group">
                    <button class="button btn pink" @click="postSchoolMaster" :disabled="errors.any() || !isComplete()">
                        作成する
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
        name: "kw-school-master-new",
        layout: 'kw',
        data() {
            return {
                name: '',
                detail: '',
                email: '',
                url: '',
                tel: '',
                icon: '',
                zip_code1: '',
                zip_code2: '',
                state: '',
                city: '',
                address1: '',
                address2: '',
                longitude: 0.0,
                latitude: 0.0,
                back_url: `/kw/school-master`
            }
        },
        methods: {
            async postSchoolMaster() {
                const confirm_delete = confirm(`「新カテゴリー ${this.name}」を、本当に作成しますか？`)
                if(confirm_delete) {
                    const payload = {
                        name: this.name,
                        detail: this.detail,
                        email: this.email,
                        url: this.url,
                        tel: this.tel,
                        icon: this.icon,
                        zip_code1: this.zip_code1,
                        zip_code2: this.zip_code2,
                        state: this.state,
                        city: this.city,
                        address1: this.address1,
                        address2: this.address2,
                        longitude: this.longitude,
                        latitude: this.latitude,
                    }
                    await this.$axios.post("kw/school-masters", payload)
                    this.$router.push("/kw/school-master")
                }
                else {
                    return false
                }
            },
            isComplete: function() {
                return this.name && this.detail && this.email && this.tel && this.url && this.icon && this.zip_code1 && this.zip_code2 && this.state && this.city && this.address1 && this.address2
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
        .create__container {
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
