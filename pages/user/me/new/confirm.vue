<template>
    <div class="create__container">
        <h1 class="heading mb_24">確認画面</h1>
        <div class="mb_32 parent__container">
            <h2 class="sub-heading mb_16">ユーザー情報</h2>
            <div class="field wrapper mb_16">
                <label class="label">氏名</label>
                <div class="control">
                    {{ parent.full_name }}
                </div>
            </div>
            <div class="field wrapper mb_16">
                <label class="label">ふりがな</label>
                <div class="control">
                    {{ parent.full_kana }}
                </div>
            </div>
            <div class="field">
                <label class="label">電話番号</label>
                <div class="control">
                    {{ parent.tel }}
                </div>
            </div>
            <div class="field wrapper mb_16">
                <label class="label">性別</label>
                <div class="control">
                    {{ formatParentSex(parent.sex) }}
                </div>
            </div>
            <div class="field wrapper mb_16">
                <label class="label">郵便番号</label>
                <div class="control">
                    {{ formatZipCode(parent.zip_code1, parent.zip_code2) }}
                </div>
            </div>
            <div class="field wrapper mb_16">
                <label class="label">住所</label>
                <div class="control">
                    {{ formatAddress(parent.state, parent.city, parent.address1, parent.address2)}}
                </div>
            </div>
        </div>
        <div class="mb_32 child__container">
            <h2 class="sub-heading mb_16">お子さん情報</h2>
            <div
                v-for="(child,index) in children"
                :key="child.id"
            >
                <h3 class="mb_16">{{ childCounter(index) }}人目</h3>
                <div class="child_wrapper">
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
            </div>
        </div>
        <div class="buttons__container">
            <div class="button__group">
                <nuxt-link to="/user/me/new/child">
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
                parent: '',
                children: ''
            }
        },
        methods: {
            postUserAccount: async function() {
                const data = this.createUserAccountParams(this.parent, this.children);
                await this.removeParentLocalStorage();
                await this.removeChildrenLocalStorage();
                await this.$axios.post("users/user-parents", data).then(res => {
                    this.$router.push("/user/me/new/completed");
                }).catch(e => {
                    console.log(e)
                });
            },
            getParentLocalStorage: function(){
                const ls_data = JSON.parse(window.localStorage.getItem("parent"));
                if (!ls_data) {
                    return false;
                }
                else {
                    this.parent = ls_data;
                }
            },
            getChildrenLocalStorage: function() {
                const ls_data = JSON.parse(window.localStorage.getItem("children"));
                if (!ls_data) {
                    return false;
                }
                else {
                    this.children = ls_data;
                }
            },
            removeParentLocalStorage: async function() {
                window.localStorage.removeItem("parent");
            },
            removeChildrenLocalStorage: async function() {
                window.localStorage.removeItem("children");
            },
            storeParentAndMoving: async function() {
                await this.saveLocalStorage();
                this.$router.push("/user/me/new/child");
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
                const month = d.getMonth();
                const date = d.getDate();
                return this.formatStringDate(year, month, date);
            },
            formatStringDate: function(year, month, date) {
                return year + "年" + month + "月" + date + "日";
            },
            childCounter: function(index) {
                return index + 1
            },
            createUserAccountParams: function(parent, children) {
                const user_master_id = this.auth_user.id
                const _parent = Object.assign(parent, {user_master_id: user_master_id, icon: ""});
                let _children = [];
                for(let i = 0; i < children.length; i++) {
                    delete children[i].year;
                    delete children[i].month;
                    delete children[i].day;
                    _children[i] = Object.assign(children[i], {icon: ""});
                }
                return {parent: _parent, children: _children};
            }
        },
        computed: {
            auth_user() {
                return this.$store.getters['auth/user']
            }
        },
        mounted() {
            this.getParentLocalStorage();
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
        text-align: center;
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
        .parent__container {
            padding: 16px;
            background-color: whitesmoke;
        }
        .child__container {
            padding: 16px;
            background-color: whitesmoke;
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
