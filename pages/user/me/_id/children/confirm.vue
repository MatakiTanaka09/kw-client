<template>
    <div class="create__container">
        <h1 class="heading mb_24">確認画面</h1>
        <div class="mb_32"
             v-for="(child,index) in children"
             :key="index"
        >
            <div class="field wrapper mb_16">
                <label class="label">お名前</label>
                <div class="control">
                    {{ child.full_name }}
                </div>
            </div>
            <div class="field wrapper mb_16">
                <label class="label">ふりがな</label>
                <div class="control">
                    {{ child.full_kana }}
                </div>
            </div>
            <div class="field wrapper mb_16">
                <label class="label">性別</label>
                <div class="control">
                    {{ formatChildSex(child.sex_id) }}
                </div>
            </div>
            <div class="field wrapper mb_16">
                <label class="label">誕生日</label>
                <div class="control">
                    {{ formatDate(child.birth_day) }}
                </div>
            </div>
        </div>
        <div class="buttons__container">
            <div class="button__group">
                <nuxt-link :to="back_url">
                    <div class="btn light-green">
                        前に戻る
                    </div>
                </nuxt-link>
            </div>
            <div class="button__group">
                <a @click="postUserAccount">
                    <div class="btn pink">
                        保存する
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "user-me-new-confirm",
        layout: "user",
        data() {
            return {
                children: '',
                me_url: `/user/me/${this.$route.params.id}`,
                back_url: `/user/me/${this.$route.params.id}/children/new`
            }
        },
        methods: {
            postUserAccount: async function() {
                const data = this.createUserAccountParams(this.children);
                await this.removeChildrenLocalStorage();
                console.log(data)
                await this.$axios.post(`users/user-children/${this.$route.params.id}`, data).then(res => {
                    this.$router.push(this.me_url);
                }).catch(e => {
                    console.log(e)
                });
            },
            getChildrenLocalStorage: function() {
                const ls_data = JSON.parse(window.localStorage.getItem("children_new"));
                if (!ls_data) {
                    return false;
                }
                else {
                    this.children = ls_data;
                }
            },
            removeChildrenLocalStorage: async function() {
                window.localStorage.removeItem("children_new");
            },
            formatParentSex: function(sex) {
                return ["", "男", "女", "その他"][sex-1]
            },
            formatChildSex: function(sex) {
                return ["", "男の子", "女の子", "その他"][sex-1]
            },
            formatZipCode: function(zc1, zc2) {
                return [zc1, zc2].join("-")
            },
            formatAddress: function(state, city, addr1, addr2) {
                return [state, city, addr1, addr2].join("");
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
            childCounter: function(index) {
                return index + 1
            },
            createUserAccountParams: function(children) {
                let _children = [];
                for(let i = 0; i < children.length; i++) {
                    delete children[i].year;
                    delete children[i].month;
                    delete children[i].day;
                    _children[i] = Object.assign(children[i], {icon: ""});
                }
                return {children: _children};
            }
        },
        computed: {
            auth_user() {
                return this.$store.getters['auth/user']
            }
        },
        mounted() {
            this.getChildrenLocalStorage();
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
