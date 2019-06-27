<template>
    <div class="create__container">
        <h1 class="heading mb_24">お子さん情報</h1>
        <form class="mb_32"
              v-for="(child,index) in response.children"
              :key="index"
        >
            <div class="form__title">
                <h3 class="mb_16">{{ childCounter(index) }}人目のお子さん</h3>
                <div class="remove__button">
                    <a @click="deleteUserChild(child.id)">
                        <div class="btn">
                            取り消す
                        </div>
                    </a>
                </div>
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
                <nuxt-link to="#">
                    <div class="btn light-green">
                        前に戻る
                    </div>
                </nuxt-link>
            </div>
            <div class="button__group">
                <nuxt-link to="#">
                    <div class="btn pink">
                        保存する
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        layout: "user",
        data() {
            return {
                response: [],
            }
        },
        async asyncData({ $axios, params, context }) {
            // const id = "c6294090-97fe-11e9-89b4-11d300c8a5c2";
            const id = "907ed180-9804-11e9-80c2-832c94dac7a5"
            return $axios.$get(`users/user-parents/${id}/children`)
                .then(res => {
                    return { response: res };
                }).catch(e => {
                    console.log(context.e)
                })
        },
        methods: {
            addUserChild() {
                const userChild = {
                    full_name: '',
                    full_kana: '',
                    sex_id: '',
                    birth_day: {
                        date: '',
                        year: '',
                        month: '',
                        day: ''
                    }
                }
                this.response.children.push(userChild)
            },
            async deleteUserChild(child_id) {
                const confirm_delete = confirm("お子さま情報を、本当に削除しますか？")
                if(confirm_delete) {
                    await this.$axios.delete(`users/user-children/${child_id}`)
                    this.$router.push(0)
                }
                else {
                    return false
                }
            },
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
            formatDateYear: function(_date) {
                const d = new Date(_date);
                this.birth_day.year = d.getFullYear();
            },
            formatDateMonth: function(_date) {
                const d = new Date(_date);
                this.birth_day.month = d.getMonth();
            },
            formatDate: function(_date) {
                const d = new Date(_date);
                this.birth_day.date = d.getDate();
            },
            checkUnprocessableUserChildren: async function(user_children) {
                await this.$nextTick();
                return user_children.length !== 0;

            }
        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
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
