<template>
    <div class="create__container">
        <h1 class="heading mb_24">ユーザーアカウント登録</h1>
        <!--<div class="progress-value mb_24">-->
            <!--<h2 class="sub-heading mb_8">②お子さん基本情報登録</h2>-->
            <!--<progress class="progress is-link" value="66" max="100">66%</progress>-->
        <!--</div>-->
        <form class="mb_32"
              v-for="(child,index) in children"
              :key="index"
        >
            <div class="form__title">
                <h3 class="mb_16">{{ childCounter(index) }}人目のお子さん</h3>
                <template v-if="checkChildNumForRemoveButton(index)">
                    <div class="remove__button">
                        <a @click="removeUserChild">
                            <div class="btn">
                                取り消す
                            </div>
                        </a>
                    </div>
                </template>
            </div>
            <div class="field wrapper mb_16">
                <label class="label">名字</label>
                <div class="control">
                    <input
                        v-validate="'required'"
                        class="input"
                        :name="'full_name' + index"
                        type="text"
                        placeholder="田中又暉"
                        v-model="child.full_name">
                    <div v-if="errors.has(`full_name${index}`)">
                        {{ errors.first(`full_name${index}`) }}
                    </div>
                </div>
            </div>
            <div class="field wrapper mb_16">
                <label class="label">名前</label>
                <div class="control">
                    <input
                        v-validate="'required'"
                        class="input"
                        :name="'full_kana' + index"
                        type="text"
                        placeholder="たなかゆうき"
                        v-model="child.full_kana">
                    <div v-if="errors.has(`full_kana${index}`)">
                        {{ errors.first(`full_kana${index}`) }}
                    </div>
                </div>
            </div>
            <div class="field wrapper mb_16">
                <label class="label">性別</label>
                <div class="control">
                    <div class="select">
                        <select
                            v-validate="'required'"
                            :name="'sex' + index"
                            v-model="child.sex_id">
                            <option selected value="null">性別</option>
                            <option value="2">男</option>
                            <option value="3">女</option>
                            <option value="4">その他</option>
                        </select>
                        <div v-if="errors.has(`sex${index}`)">
                            {{ errors.first(`sex${index}`) }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="field wrapper mb_16">
                <label class="label">お誕生日</label>
                <div class="control">
                    <div class="select">
                        <select
                            v-validate="'required'"
                            :name="'birth_day.year' + index"
                            v-model="child.birth_day.year">
                            <option
                                v-for="n in range(checkYear()-15,checkYear())"
                                :key="n"
                                :value="n"
                            >{{ n }}年</option>
                        </select>
                        <div v-if="errors.has(`birth_day.year${index}`)">
                            {{ errors.first(`birth_day.year${index}`) }}
                        </div>
                    </div>
                    <div class="select">
                        <select
                            v-validate="'required'"
                            :name="'birth_day.month' + index"
                            v-model="child.birth_day.month">
                            <option
                                v-for="n in 12"
                                :key="n"
                                :value="n"
                            >{{ n }}月</option>
                        </select>
                        <div v-if="errors.has(`birth_day.month${index}`)">
                            {{ errors.first(`birth_day.month${index}`) }}
                        </div>
                    </div>
                    <div class="select">
                        <select
                            v-validate="'required'"
                            :name="'birth_day.day' + index"
                            v-model="child.birth_day.day">
                            <option
                                v-for="n in 31"
                                :key="n"
                                :value="n"
                            >{{ n }}日</option>
                        </select>
                        <div v-if="errors.has(`birth_day.day${index}`)">
                            {{ errors.first(`birth_day.day${index}`) }}
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <div class="add__child mb_32">
            <a @click="addUserChild">
                <div class="btn">
                    お子さん情報を追加する
                </div>
            </a>
        </div>
        <div class="buttons__container">
            <div class="button__group">
                <nuxt-link to="/user/me/new/parent">
                    <button class="button btn light-green">
                        前に戻る
                    </button>
                </nuxt-link>
            </div>
            <div class="button__group">
                <button class="button btn pink" @click="storeParentAndMoving" :disabled="errors.any() || !isComplete(children)">
                    確認画面へ
                </button>
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
        name: "user-events-id-reserve",
        layout: "user",
        data() {
            return {
                children: [
                    {
                        full_name: '',
                        full_kana: '',
                        sex_id: '',
                        birth_day: {
                            date: new Date(),
                            year: '',
                            month: '',
                            day: ''
                        }
                    }
                ]
            }
        },
        methods: {
            addUserChild() {
                const userChild = {
                    full_name: '',
                    full_kana: '',
                    sex_id: '',
                    birth_day: {
                        date: new Date(),
                        year: '',
                        month: '',
                        day: ''
                    }
                };
                this.children.push(userChild)
            },
            removeUserChild() {
                this.children.pop()
            },
            checkChildNumForRemoveButton: function(index) {
                return index>=1
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
            saveLocalStorage: function() {
                const children = this.children;
                let array = [];
                for(let i = 0; i < children.length; i++) {
                    const year = children[i].birth_day.year
                    const month = children[i].birth_day.month
                    const day = children[i].birth_day.day
                    array[i] = {
                        full_name : children[i].full_name,
                        full_kana : children[i].full_kana,
                        birth_day : this.formatBirthDay(year, month, day),
                        year      : year,
                        month     : month,
                        day       : day,
                        sex_id    : children[i].sex_id
                    };
                }
                window.localStorage.setItem("children", JSON.stringify(array));
            },
            getLocalStorage: function(){
                const ls_data = JSON.parse(window.localStorage.getItem("children"));
                if (!ls_data) {
                    return false;
                }
                else {
                    let _ = this;
                    let children = _.children;
                    // console.log(children)
                    for(let i = 0; i < ls_data.length; i++) {
                        children[i] = {
                            full_name: ls_data[i].full_name,
                            full_kana: ls_data[i].full_kana,
                            birth_day: {
                                date: ls_data[i].birth_day,
                                year: ls_data[i].year,
                                month: ls_data[i].month,
                                day: ls_data[i].day
                            },
                            sex_id: ls_data[i].sex_id
                        };
                    }
                }
            },
            storeParentAndMoving: async function() {
                await this.saveLocalStorage();
                this.$router.push("/user/me/new/confirm");
            },
            isComplete: function(children) {
                let result = 0;
                children.forEach((el,i) => {
                    Object.values(el).forEach(e => {
                        if(typeof e === 'object') {
                            Object.values(e).forEach(k => {
                                (k === "" || k === null || k === "undefined") ? result++ : result
                            })
                        }
                        (e === "" || e === null || e === "undefined") ? result++ : result
                    })
                });
                return result === 0
            }

        },
        watch: {
            birth_day: function() {
                this.formatBirthDay(this.birth_day.year, this.birth_day.month, this.birth_day.day)
            }
        },
        computed: {
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
        .add__child {
            width: 100%;
            text-align: center;
            .btn {
                padding: 4px;
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
                    width: 100%;
                    height: 120%;
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
