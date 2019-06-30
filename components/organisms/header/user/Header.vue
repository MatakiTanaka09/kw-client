<template>
    <header class="global-header" id="header">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="https://kw-prod-bucket.s3-ap-northeast-1.amazonaws.com/top/pc.jpg" width="120" height="28" alt="logo">
                </a>
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"  @click="dropdownToggle">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': dropdownActive }">
                <div class="navbar-end">
                    <div class="nav-lists">
                        <nuxt-link to="/user/auth/register" class="navbar-item">
                            <div class="nav-list">
                                <figure class="image nav-icon">
                                    <img src="https://img.icons8.com/material/24/000000/enter-2--v1.png">
                                </figure>
                                <div class="nav-title">新規登録</div>
                            </div>
                        </nuxt-link>
                        <nuxt-link to="/user/auth/login" class="navbar-item">
                            <div class="nav-list">
                                <figure class="image nav-icon">
                                    <img src="https://img.icons8.com/windows/24/000000/enter-2.png">
                                </figure>
                                <div class="nav-title">ログイン</div>
                            </div>
                        </nuxt-link>
                        <nuxt-link :to="'/user/me/' + params_id" class="navbar-item">
                            <div class="nav-list">
                                <figure class="image nav-icon">
                                    <img src="https://img.icons8.com/dotty/80/000000/login-as-user.png" alt="">
                                </figure>
                                <div class="nav-title">プロフィール</div>
                            </div>
                        </nuxt-link>
                        <nuxt-link to="#" class="navbar-item">
                            <div class="nav-list">
                                <figure class="image nav-icon">
                                    <img src="https://img.icons8.com/ios/50/000000/reservation-2.png">
                                </figure>
                                <div class="nav-title">予約一覧</div>
                            </div>
                        </nuxt-link>
                        <a class="navbar-item" @click="handleLogout">
                            <div class="nav-list">
                                <figure class="image nav-icon">
                                    <img src="https://img.icons8.com/android/24/000000/logout-rounded-down.png">
                                </figure>
                                <div class="nav-title">サインアウト</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </header>

</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        name: "user-header",
        data() {
            return {
                dropdownActive: false,
                authLogoutModalActive: false,
                params_id: '',
                profile_url: ''
            }
        },
        methods: {
            showAuthLogoutModalToggle() {
                this.authLogoutModalActive = !this.authLogoutModalActive
            },
            dropdownToggle() {
                this.dropdownActive = !this.dropdownActive
            },
            async signOut() {
                const confirm = confirm("本当にサインアウトしますか？");
                if(confirm) {
                    await this.handleLogout();
                }
                else {
                    return false
                }
            },
            async handleLogout() {
                await this.showAuthLogoutModalToggle();
                await this.logout();
                this.$router.push("/");
                setTimeout(
                    this.$router.go(0)
                    , 1000);
            },
            async createParamsId() {
                const id = this.user.id
                const _user = await this.$axios.$get(`/users/user-parents/${id}/user`)
                    .then(res => {
                        this.params_id = res
                    })
                    .catch(err => err.response)
            },
            createProfileUrl: function() {
                return this.profile_url = `/user/me/${this.paramsId}`
            },
            ...mapActions('auth', [
                'logout'
            ])
        },
        computed: {
            user() {
                return this.$store.getters["auth/user"]
            },
            paramsId() {
                return this.params_id
            }
        },
        mounted() {
            this.createParamsId()
            this.createProfileUrl()
        }
    }
</script>

<style lang="scss" scoped>
    a:hover {
        opacity: 0.8;
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
    .mb_8 {
        margin-bottom: 8px;
    }
    .mb_16 {
        margin-bottom: 16px;
    }
    .mt_8 {
        margin-top: 8px;
    }
    .mt_32 {
        margin-top: 32px;
    }
    .mb_250 {
        margin-bottom: 250px;
    }
    .global-header {
        .nav-lists {
            display: block;
            .nav-list {
                display: flex;
                align-items: center;
                .nav-icon {
                    width: 24px;
                    height: 24px;
                    margin-right: 8px;
                }
            }
        }
    }
    // タブレット縦 /スマートフォン横
    @media screen and (min-width: 481px) {}

    // デスクトップ/タブレット横
    @media screen and (min-width: 769px) {
        .global-header {
            .nav-lists {
                display: flex;
                align-items: center;
            }
        }
    }
</style>
