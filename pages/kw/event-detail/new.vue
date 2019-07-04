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
                    <label class="label">イベントマスターID</label>
                    <div class="control">
                        <input
                            class="input"
                            name="event_master_id"
                            type="text"
                            placeholder="Text input"
                            v-model="event_master_id">
                        <div v-if="errors.has('event_master_id')">
                            {{ errors.first('event_master_id') }}
                        </div>
                    </div>
                </div>
                <div class="field mb_16">
                    <label class="label">イベントPR ID</label>
                    <div class="control">
                        <input
                            class="input"
                            name="id"
                            type="number"
                            placeholder="Text input"
                            v-model="event_pr_id"
                            :disabled="true">
                    </div>
                </div>
                <div class="field wrapper mb_16">
                    <label class="label">開始時間</label>
                    <div class="control">
                        <div class="select">
                            <select
                                v-validate="'required'"
                                name="started_at.year"
                                v-model="started_at.year">
                                <option
                                    v-for="n in range(checkYear(),checkYear()+3)"
                                    :key="n"
                                    :value="n"
                                >{{ n }}年</option>
                            </select>
                            <div v-if="errors.has('started_at.year')">
                                {{ errors.first('started_at.year') }}
                            </div>
                        </div>
                        <div class="select">
                            <select
                                v-validate="'required'"
                                name="started_at.month"
                                v-model="started_at.month">
                                <option
                                    v-for="n in 12"
                                    :key="n"
                                    :value="n"
                                >{{ n }}月</option>
                            </select>
                            <div v-if="errors.has('started_at.month')">
                                {{ errors.first('started_at.month') }}
                            </div>
                        </div>
                        <div class="select">
                            <select
                                v-validate="'required'"
                                name="started_at.date"
                                v-model="started_at.date">
                                <option
                                    v-for="n in 31"
                                    :key="n"
                                    :value="n"
                                >{{ n }}日</option>
                            </select>
                            <div v-if="errors.has('started_at.date')">
                                {{ errors.first('started_at.date') }}
                            </div>
                        </div>
                        <div class="select">
                            <select
                                v-validate="'required'"
                                name="started_at.hour"
                                v-model="started_at.hour">
                                <option
                                    v-for="n in 24"
                                    :key="n"
                                    :value="n"
                                >{{ n }}時</option>
                            </select>
                            <div v-if="errors.has('started_at.hour')">
                                {{ errors.first('started_at.hour') }}
                            </div>
                        </div>
                        <div class="select">
                            <select
                                v-validate="'required'"
                                name="started_at.min"
                                v-model="started_at.min">
                                <option
                                    v-for="n in 60"
                                    :key="n"
                                    :value="n"
                                >{{ n -1 }}分</option>
                            </select>
                            <div v-if="errors.has('started_at.min')">
                                {{ errors.first('started_at.min') }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="field wrapper mb_16">
                    <label class="label">終了時間</label>
                    <div class="control">
                        <div class="select">
                            <select
                                v-validate="'required'"
                                name="expired_at.year"
                                v-model="expired_at.year">
                                <option
                                    v-for="n in range(checkYear(),checkYear()+3)"
                                    :key="n"
                                    :value="n"
                                >{{ n }}年</option>
                            </select>
                            <div v-if="errors.has('expired_at.year')">
                                {{ errors.first('expired_at.year') }}
                            </div>
                        </div>
                        <div class="select">
                            <select
                                v-validate="'required'"
                                name="expired_at.month"
                                v-model="expired_at.month">
                                <option
                                    v-for="n in 12"
                                    :key="n"
                                    :value="n"
                                >{{ n }}月</option>
                            </select>
                            <div v-if="errors.has('expired_at.month')">
                                {{ errors.first('expired_at.month') }}
                            </div>
                        </div>
                        <div class="select">
                            <select
                                v-validate="'required'"
                                name="expired_at.date"
                                v-model="expired_at.date">
                                <option
                                    v-for="n in 31"
                                    :key="n"
                                    :value="n"
                                >{{ n }}日</option>
                            </select>
                            <div v-if="errors.has('expired_at.date')">
                                {{ errors.first('expired_at.date') }}
                            </div>
                        </div>
                        <div class="select">
                            <select
                                v-validate="'required'"
                                name="expired_at.hour"
                                v-model="expired_at.hour">
                                <option
                                    v-for="n in 24"
                                    :key="n"
                                    :value="n"
                                >{{ n }}時</option>
                            </select>
                            <div v-if="errors.has('expired_at.hour')">
                                {{ errors.first('expired_at.hour') }}
                            </div>
                        </div>
                        <div class="select">
                            <select
                                v-validate="'required'"
                                name="expired_at.min"
                                v-model="expired_at.min">
                                <option
                                    v-for="n in 60"
                                    :key="n"
                                    :value="n"
                                >{{ n -1 }}分</option>
                            </select>
                            <div v-if="errors.has('expired_at.min')">
                                {{ errors.first('expired_at.min') }}
                            </div>
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
                    <button class="button btn pink" @click="postCategory" :disabled="errors.any() || !isComplete()">
                        確認画面へ
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
        name: "kw-event-detail-id-new",
        layout: 'kw',
        data() {
            return {
                response: {},
                started_at: {
                    format: new Date(),
                    year: '',
                    month: '',
                    date: '',
                    hour: '',
                    min: ''
                },
                expired_at: {
                    format: new Date(),
                    year: '',
                    month: '',
                    date: '',
                    hour: '',
                    min: ''
                },
                event_pr_id: 1,
                pub_state: '',
                zip_code1: '',
                zip_code2: '',
                state: '',
                city: '',
                address1: '',
                address2: '',
                longitude: 0.0,
                latitude: 0.0,
                event_master_id: '',
                back_url: `/kw/category`
            }
        },
        methods: {
            async postCategory() {
                const confirm_delete = confirm(`新しいイベント詳細を、本当に作成しますか？`)
                if(confirm_delete) {
                    const payload = {
                        event_master_id: this.event_master_id,
                        event_pr_id: this.event_pr_id,
                        started_at: this.createParams(this.started_at),
                        expired_at: this.createParams(this.expired_at),
                        pub_state: this.pub_state,
                        zip_code1: this.zip_code1,
                        zip_code2: this.zip_code2,
                        state: this.state,
                        city: this.city,
                        address1: this.address1,
                        address2: this.address2,
                        longitude: this.longitude,
                        latitude: this.latitude,
                    }
                    console.log(payload)
                    await this.$axios.post("kw/event-details", payload)
                    this.$router.push("/kw/event-detail")
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
            checkYear: function() {
                const now = new Date();
                return now.getFullYear()
            },
            getDate: function(_date) {
                const d = new Date(_date);
                const year = d.getFullYear();
                const month = d.getMonth();
                const date = d.getDate();
                const hour = d.getHours();
                const minutes = d.getMinutes();
                return [year, month, date, hour, minutes];
            },
            isComplete: function() {
                return this.event_master_id && this.started_at && this.expired_at && this.zip_code1 && this.zip_code2 && this.state && this.city && this.address1 && this.address2
            },
            createDateParams: function(year, month, date) {
                return [year, month, date].join("-")
            },
            createTimeParams: function(hour, min) {
                return [hour, min, "00"].join(":")
            },
            createParams: function(obj) {
                const date = this.createDateParams(obj.year, obj.month, obj.date)
                const time = this.createTimeParams(obj.hour, obj.min)
                const data = [date, time].join(" ")
                return new Date(data)
            }
        },
        mounted() {
            [
                this.started_at.year,
                this.started_at.month,
                this.started_at.date,
                this.started_at.hour,
                this.started_at.min,
            ] = this.getDate(this.response.started_at);

            [
                this.expired_at.year,
                this.expired_at.month,
                this.expired_at.date,
                this.expired_at.hour,
                this.expired_at.min,
            ] = this.getDate(this.response.expired_at);
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
