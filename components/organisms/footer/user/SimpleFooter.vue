<template>
    <footer class="global-footer mb_64" id="footer">
        <div class="footer-bottom">
            <div class="social-group">
                <a href="https://www.facebook.com/kidsweekendInc/" target="_blank" class="facebook">
                    <figure class="image social">
                        <img src="https://img.icons8.com/dotty/240/000000/facebook-f.png" alt="Facebook">
                    </figure>
                </a>
                <a href="https://www.instagram.com/kidsweekend_official/" target="_blank" class="instgram">
                    <figure class="image social">
                        <img src="https://img.icons8.com/wired/64/000000/instagram.png" alt="Instgram">
                    </figure>
                </a>
                <a href="https://kidsweekend.blog/" target="_blank" class="blog">
                    <figure class="image social">
                        <img src="https://img.icons8.com/ios/50/000000/blogger.png" alt="Blog">
                    </figure>
                </a>
            </div>
            <div class="links mb_24 mt_8">
                <div class="link-group">
                    <div class="link">
                        <nuxt-link to="/">Kidsweekendとは</nuxt-link>
                    </div>
                    <div class="link">
                        <nuxt-link to="/">会社概要</nuxt-link>
                    </div>
                    <div class="link">
                        <nuxt-link to="/">個人情報取り扱いについて</nuxt-link>
                    </div>
                    <div class="link">
                        <nuxt-link to="/">会員利用規約</nuxt-link>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <p>© 2019 Kidseeds inc. All rights reserved</p>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "SimpleFooter"
    }
</script>

<style lang="scss" scoped>
    a {
        color: gray;
    }
    .mb_24 {
        margin-bottom: 24px;
    }
    .mb_64 {
        margin-bottom: 64px;
    }
    .mt_8 {
        margin-top: 8px;
    }
    .global-footer {
        margin: 32px 0;
        padding: 16px;
        width: 100%;
        height: 250px;
        bottom: 0;
        .footer-bottom {
            padding: 4px;
            .social-group {
                display: flex;
                justify-content: center;
                align-items: center;
                .social {
                    width: 48px;
                    height: 48px;
                    margin: 8px;
                    padding: 4px;
                }
            }
            .links {
                .link-group {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    .link {
                        padding: 4px;
                    }
                }
            }
            .footer-copyright {
                text-align: center;
            }
        }
    }
</style>
