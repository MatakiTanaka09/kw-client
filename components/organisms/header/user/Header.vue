<template>
    <header>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="https://kw-prod-bucket.s3-ap-northeast-1.amazonaws.com/top/pc.jpg" width="120" height="28" alt="logo">
                </a>
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-primary">
                                <strong>新規登録</strong>
                            </a>
                            <a class="button is-light">
                                ログイン
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>

</template>

<script>
    export default {
        name: "user-header",
        data() {
            return {
                dropdownActive: false,
                authLogoutModalActive: false
            }
        },
        computed: {
        },
        methods: {
            // showAuthLogoutModalToggle() {
            //     this.authLogoutModalActive = !this.authLogoutModalActive
            // },
            // dropdownToggle() {
            //     this.dropdownActive = !this.dropdownActive
            // },
            // async handleLogout() {
            //     await this.showAuthLogoutModalToggle();
            //     await this.logout();
            //     this.$router.push("/");
            //     this.$router.go(0);
            // }
        },
    }
</script>

<style lang="scss" scoped>
    /*header {*/
        /*box-shadow: 0 3px 25px rgba(77,77,99,0.1);*/
        /*font-weight: bold;*/
        /*position: fixed;*/
        /*z-index: 1000;*/
        /*width: 100%;*/
        /*height: 64px;*/
        /*background-color: white;*/
        /*nav.navbar {*/
            /*max-width: 1088px;*/
            /*margin: 0 auto;*/
            /*.navbar-brand, .navbar-burger {*/
                /*height: 63px;*/
            /*}*/
            /*.navbar__item--logo {*/
                /*letter-spacing: 5px;*/
                /*color: #03A1EB;*/
            /*}*/
            /*.buttons {*/
                /*font-size: 14px;*/
                /*.buttons__btn--login {*/
                    /*border: 1px solid #03A1EB;*/
                    /*background-color: #03A1EB;*/
                    /*color: white;*/
                    /*&:hover {*/
                        /*opacity: 0.7;*/
                    /*}*/
                /*}*/
            /*}*/
            /*.after__login__buttons {*/
                /*display: flex;*/
                /*align-items: center;*/
                /*font-size: 14px;*/
                /*&--button {*/
                    /*margin: 8px;*/
                    /*span {*/
                        /*color: rgb(89, 87, 87);*/
                        /*&:hover {*/
                            /*color: rgb(94, 205, 189);*/
                        /*}*/
                    /*}*/
                    /*.letter--modified {*/
                        /*color: rgb(226, 121, 133);*/
                    /*}*/
                /*}*/
            /*}*/
        /*}*/
    /*}*/
    /*.mobile {*/
        /*@media screen and (max-width: 768px) {*/
            /*display: none;*/
        /*}*/
    /*}*/
    /*.tablet {*/
        /*@media screen and (min-width: 768px) {*/
            /*display: none;*/
        /*}*/
    /*}*/
</style>
