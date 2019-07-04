<template>
    <div class="category__container">
        <div class="category__wrapper mb_32">
            <h2>
                <strong>EventMaster 作成画面</strong>
            </h2>
        </div>
        <div class="create__container mb_32">
            <form class="mb_32">
                <div class="field mb_16">
                    <label class="label">スクールマスターID</label>
                    <div class="control">
                        <input
                            v-validate="'required'"
                            class="input"
                            name="school_master_id"
                            type="text"
                            placeholder="Text input"
                            v-model="school_master_id">
                        <div v-if="errors.has('school_master_id')">
                            {{ errors.first('school_master_id') }}
                        </div>
                    </div>
                </div>
                <div class="field wrapper mb_16">
                    <label class="label">カテゴリー</label>
                    <div class="control">
                        <div class="select">
                            <select
                                name="parent_attendant"
                                v-model="category_master_id">
                                <option selected value="1">その他</option>
                                <option value="2">アート</option>
                                <option value="3">教育</option>
                                <option value="4">外国語	</option>
                                <option value="5">音楽</option>
                                <option value="6">テクノロジー</option>
                                <option value="7">スポーツ</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="field mb_16">
                    <label class="label">イベント名</label>
                    <div class="control">
                        <input
                            v-validate="'required'"
                            class="input"
                            name="title"
                            type="text"
                            placeholder="Text input"
                            v-model="title">
                        <div v-if="errors.has('title')">
                            {{ errors.first('title') }}
                        </div>
                    </div>
                </div>
                <div class="field mb_16">
                    <label class="label">イベント詳細</label>
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
                    <label class="label">持ち物</label>
                    <div class="control">
                        <input
                            v-validate="'required'"
                            class="input"
                            name="handing"
                            type="text"
                            placeholder="Text input"
                            v-model="handing">
                        <div v-if="errors.has('handing')">
                            {{ errors.first('handing') }}
                        </div>
                    </div>
                </div>
                <div class="field mb_16">
                    <label class="label">イベント時間（単位：分）</label>
                    <div class="control">
                        <input
                            v-validate="'required'"
                            class="input"
                            name="event_minutes"
                            type="number"
                            placeholder="60"
                            v-model="event_minutes">
                        <div v-if="errors.has('event_minutes')">
                            {{ errors.first('event_minutes') }}
                        </div>
                    </div>
                </div>
                <div class="field wrapper mb_16">
                    <label class="label">付き添い有無</label>
                    <div class="control">
                        <div class="select">
                            <select
                                name="parent_attendant"
                                v-model="parent_attendant">
                                <option value="0">有り</option>
                                <option selected value="1">無し</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="field wrapper mb_16">
                    <label class="label">最小対象年齢</label>
                    <div class="control">
                        <div class="select">
                            <select
                                v-validate="'required'"
                                name="target_min_age"
                                v-model="target_min_age">
                                <option
                                    v-for="n in range(0,15)"
                                    :key="n"
                                    :value="n"
                                >{{ n }}歳</option>
                            </select>
                            <div v-if="errors.has('target_min_age')">
                                {{ errors.first('target_min_age') }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="field wrapper mb_16">
                    <label class="label">最大対象年齢</label>
                    <div class="control">
                        <div class="select">
                            <select
                                v-validate="'required'"
                                name="target_max_age"
                                v-model="target_max_age">
                                <option
                                    v-for="n in range(0,15)"
                                    :key="n"
                                    :value="n"
                                >{{ n }}歳</option>
                            </select>
                            <div v-if="errors.has('target_max_age')">
                                {{ errors.first('target_max_age') }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="field wrapper mb_16">
                    <label class="label">イベント価格</label>
                    <div class="control">
                        <input
                            v-validate="'required'"
                            class="input"
                            name="price"
                            type="number"
                            placeholder="Text input"
                            v-model="price">
                        <div v-if="errors.has('price')">
                            {{ errors.first('price') }}
                        </div>
                    </div>
                </div>
                <div class="field wrapper mb_16">
                    <label class="label">キャンセルポリシー</label>
                    <div class="control">
                        <input
                            v-validate="'required'"
                            class="input"
                            name="cancel_policy"
                            type="text"
                            placeholder="Text input"
                            v-model="cancel_policy">
                        <div v-if="errors.has('cancel_policy')">
                            {{ errors.first('cancel_policy') }}
                        </div>
                    </div>
                </div>
                <div class="field wrapper mb_16">
                    <label class="label">公開ステータス</label>
                    <div class="control">
                        <div class="select">
                            <select
                                name="pub_state"
                                v-model="pub_state">
                                <option selected value=0>公開</option>
                                <option value=1>非公開</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="field wrapper mb_16">
                    <label class="label">集合時刻（何分前に集合するか？単位：分）</label>
                    <div class="control">
                        <input
                            v-validate="'required'"
                            class="input"
                            name="arrived_at"
                            type="number"
                            placeholder="Text input"
                            v-model="arrived_at">
                        <div v-if="errors.has('arrived_at')">
                            {{ errors.first('arrived_at') }}
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
        name: "kw-event-master-new",
        layout: 'kw',
        data() {
            return {
                title: '',
                detail: '',
                handing: '',
                event_minutes: '',
                target_min_age: '',
                target_max_age: '',
                parent_attendant: '',
                price: '',
                cancel_policy: '',
                pub_state: '',
                arrived_at: '',
                zip_code1: '',
                zip_code2: '',
                state: '',
                city: '',
                address1: '',
                address2: '',
                longitude: 0.0,
                latitude: 0.0,
                school_master_id: '',
                category_master_id: [],
                back_url: `/kw/event-master`
            }
        },
        methods: {
            async postSchoolMaster() {
                const confirm_delete = confirm(`「新しいイベントマスター ${this.title}」を、本当に作成しますか？`)
                if(confirm_delete) {
                    const payload = {
                        title: this.title,
                        detail: this.detail,
                        handing: this.handing,
                        event_minutes: this.event_minutes,
                        target_min_age: this.target_min_age,
                        target_max_age: this.target_max_age,
                        parent_attendant: this.parent_attendant,
                        price: this.price,
                        cancel_policy: this.cancel_policy,
                        pub_state: this.pub_state,
                        arrived_at: this.arrived_at,
                        zip_code1: this.zip_code1,
                        zip_code2: this.zip_code2,
                        state: this.state,
                        city: this.city,
                        address1: this.address1,
                        address2: this.address2,
                        longitude: this.longitude,
                        latitude: this.latitude,
                        school_master_id: this.school_master_id,
                        category_master_id: this.category_master_id
                    }
                    await this.$axios.post("kw/event-masters", payload)
                    this.$router.push("/kw/event-master")
                }
                else {
                    return false
                }
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
            isComplete: function() {
                return this.title && this.detail && this.handing && this.event_minutes && this.target_min_age && this.target_max_age && this.price && this.cancel_policy && this.arrived_at && this.zip_code1 && this.zip_code2 && this.state && this.city && this.address1 && this.address2
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
