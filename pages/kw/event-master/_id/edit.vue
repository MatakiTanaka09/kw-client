<template>
    <div class="category__container">
        <div class="category__wrapper mb_32">
            <h2>
                <strong>EventMaster 編集画面</strong>
            </h2>
            <p>id: {{ response.id }}</p>
        </div>
        <div class="edit__container mb_32">
            <form class="mb_32">
                <div class="field mb_16">
                    <label class="label">イベント名</label>
                    <div class="control">
                        <input
                            v-validate="'required'"
                            class="input"
                            name="title"
                            type="text"
                            placeholder="Text input"
                            v-model="response.title">
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
                            v-model="response.detail">
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
                            v-model="response.handing">
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
                            v-model="response.event_minutes">
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
                                v-model="response.parent_attendant">
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
                                v-model="response.target_min_age">
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
                                v-model="response.target_max_age">
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
                            v-model="response.price">
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
                            v-model="response.cancel_policy">
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
                                v-model="response.pub_state">
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
                            v-model="response.arrived_at">
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
                    <button class="button btn pink" @click="putEventMaster" :disabled="errors.any() || !isComplete(response)">
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

    export default {
        name: "kw-event-master-id-edit",
        layout: 'kw',
        data() {
            return {
                response: {},
                data: {},
                back_url: `/kw/event-master`
            }
        },
        asyncData({ $axios, route }) {
            return $axios.$get('kw/event-masters')
                .then(res => {
                    const event_master = res["data"].find(evm => evm.id === route.params.id)
                    return { response: event_master, data: res }
                }).catch(e => {
                    console.log(e)
                })
        },
        methods: {
            async putEventMaster() {
                const confirm_delete = confirm(`「スクールID ${this.$route.params.id}」を、本当に更新しますか？`)
                if(confirm_delete) {
                    const payload = {
                        title: this.response.title,
                        detail: this.response.detail,
                        handing: this.response.handing,
                        event_minutes: this.response.event_minutes,
                        target_min_age: this.response.target_min_age,
                        target_max_age: this.response.target_max_age,
                        parent_attendant: this.response.parent_attendant,
                        price: this.response.price,
                        cancel_policy: this.response.cancel_policy,
                        pub_state: this.response.pub_state,
                        arrived_at: this.response.arrived_at,
                        zip_code1: this.response.zip_code1,
                        zip_code2: this.response.zip_code2,
                        state: this.response.state,
                        city: this.response.city,
                        address1: this.response.address1,
                        address2: this.response.address2,
                        longitude: this.response.longitude,
                        latitude: this.response.latitude,
                    }
                    await this.$axios.put(`kw/event-masters/${this.$route.params.id}`, payload)
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
            isComplete: function(response) {
                return response.title && response.detail && response.handing && response.event_minutes && response.target_min_age && response.target_max_age && response.price && response.cancel_policy && response.arrived_at && response.zip_code1 && response.zip_code2 && response.state && response.city && response.address1 && response.address2
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
