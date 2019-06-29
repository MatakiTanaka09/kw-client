<template>
    <div class="user__container">

            <div class="parent__container mb_48">
                <h1 class="heading mb_24">ユーザー情報</h1>
                <no-ssr>
                    {{user}}
                    <!--<div class="mb_24">-->
                        <!--<div class="wrapper mb_8">-->
                            <!--<label class="label">氏名</label>-->
                            <!--<p class="sub-heading">{{ user.full_name }}</p>-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<div class="mb_24">-->
                        <!--<div class="wrapper mb_8">-->
                            <!--<label class="label">ふりがな</label>-->
                            <!--<p class="sub-heading">{{user.full_kana}}</p>-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<div class="mb_24">-->
                        <!--<div class="wrapper mb_8">-->
                            <!--<label class="label">性別</label>-->
                            <!--<p class="sub-heading">{{formatParentSex(user.sex_id)}}</p>-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<div class="mb_24">-->
                        <!--<div class="wrapper mb_8">-->
                            <!--<label class="label">電話番号</label>-->
                            <!--<p class="sub-heading">{{ user.tel }}</p>-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<div class="mb_24">-->
                        <!--<div class="wrapper mb_8">-->
                            <!--<label class="label">郵便番号</label>-->
                            <!--<p class="sub-heading">-->
                                <!--{{ formatZipCode(user.zip_code1,user.zip_code2) }}-->
                            <!--</p>-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<div class="mb_24">-->
                        <!--<div class="wrapper mb_8">-->
                            <!--<label class="label">住所</label>-->
                            <!--<p class="sub-heading">-->
                                <!--{{ formatAddress(user.state, user.city, user.address1, user.address2) }}-->
                            <!--</p>-->
                        <!--</div>-->
                    <!--</div>-->
                </no-ssr>
                <div class="edit__button">
                    <nuxt-link to="/user/me/parent/edit">
                        <div class="btn light-green">
                            更新する
                        </div>
                    </nuxt-link>
                </div>
            </div>
            <div class="children__container mb_24">
                <h1 class="heading mb_24">お子さん情報</h1>
                <no-ssr>
                    <div
                        v-for="(child,index) in children"
                        :key="child.id"
                    >
                        <h3 class="mb_16">{{ childCounter(index) }}人目のお子さん</h3>
                        <div class="mb_24">
                            <div class="wrapper mb_8">
                                <label class="label">名字</label>
                                <p class="sub-heading">{{ child.full_name }}</p>
                            </div>
                        </div>
                        <div class="mb_24">
                            <div class="wrapper mb_8">
                                <label class="label">名前</label>
                                <p class="sub-heading">{{ child.full_kana }}</p>
                            </div>
                        </div>
                        <div class="mb_24">
                            <div class="wrapper mb_8">
                                <label class="label">性別</label>
                                <p class="sub-heading">{{ formatChildSex(child.sex_id) }}</p>
                            </div>
                        </div>
                        <div class="mb_24">
                            <div class="wrapper mb_8">
                                <label class="label">誕生日</label>
                                <p class="sub-heading">{{ formatDate(child.birth_day) }}</p>
                            </div>
                        </div>
                    </div>
                </no-ssr>
                <div class="edit__button">
                    <nuxt-link to="/user/me/children/edit">
                        <div class="btn light-green">
                            更新する
                        </div>
                    </nuxt-link>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        name: "user-events-id-reserve",
        layout: "user",
        data() {
            return {}
        },
        methods: {
            formatChildSex: function(sex) {
                return ["", "男の子", "女の子", "その他"][sex-1]
            },
            formatParentSex: function(sex) {
                return ["", "男", "女", "その他"][sex-1]
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
            async firstFetch() {
                const id = this.auth_user.id
                const _user = await this.$axios.$get(`/users/user-parents/${id}/user`)
                    .then(res => {
                        this.$store.dispatch('user/GET_USER_CHILDREN', { id: res })
                    })
                    .catch(err => err.response)
            }
        },
        // async asyncData({ $axios, params }) {
        //     const id = "68608530-9813-11e9-8c77-457e6b5eed6d";
        //     return $axios.$get(`users/user-parents/${id}/children`)
        //         .then(res => {
        //             return { response: res }
        //         }).catch(e => {
        //             console.log(e)
        //         })
        // },
        computed: {
            auth_user() {
                return this.$store.getters['auth/user']
            },
            children() {
                return this.$store.getters['user/children']
            },
            user() {
                return this.$store.getters['user/user']
            }
        },
        mounted() {
            this.firstFetch()
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
        font-weight: 500;
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
    .mb_48 {
        margin-bottom: 48px;
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
    .user__container {
        padding: 16px;
        .edit__button {
            width: 100%;
            text-align: center;
            .btn {
                padding: 8px 12px;
                border-radius: 4px;
                font-size: 16px;
                font-weight: 800;
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
</style>
