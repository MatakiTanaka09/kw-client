<template>
    <footer class="global-footer mb_64" id="footer">
        <nav class="clearfix">
            <div class="footer-cell"></div>
            <div class="footer-cell"></div>
            <div class="footer-cell"></div>
        </nav>
        <div class="footer-bottom">
            <nuxt-link to="/" class="">
                <figure class="image footer-logo">
                    <img src="https://kw-prod-bucket.s3-ap-northeast-1.amazonaws.com/top/logo.png" alt="ロゴ画像">
                </figure>
            </nuxt-link>
            <div class="links mb_24 mt_8">
                <div class="link-group">
                    <h3 class="link-title">Kidsweekend</h3>
                    <span></span>
                    <div class="inner">
                        <nuxt-link to="/">会社概要</nuxt-link>
                        <nuxt-link to="/">個人情報取り扱いについて</nuxt-link>
                        <nuxt-link to="/">Kidsweekend利用規約</nuxt-link>
                        <nuxt-link to="/">Kidsweekendブログ</nuxt-link>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <p>© 2019 Kidseeds inc. All rights reserved</p>
                <div class="social">
                    <a href="https://www.instagram.com/kidsweekend_official/" target="_blank" class="instgram">instgram</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "user-footer",
        methods: {
            setFunction: function() {
                const footerLinks = document.querySelector('#footer .links')
                const linkGroups = footerLinks.querySelectorAll('.link-group')
                linkGroups.forEach(function(linkGroup) {
                    let collapsed = true
                    const title = linkGroup.querySelector('.link-title')
                    title.addEventListener('click', function(evt){
                        collapsed = !collapsed
                        collapsed ? linkGroup.classList.remove('open') : linkGroup.classList.add('open')
                    })
                })
            }
        },
        mounted() {
            this.setFunction()
        }
    }
</script>

<style lang="scss" scoped>
    .mb_64 {
        margin-bottom: 64px;
    }
    .global-footer {
        padding: 16px;
        .footer-bottom {
            .footer-logo {
                width: 250px;
                height: auto;
                margin: 0 auto;
                .image {
                    width: 250px;
                    height: auto;
                }
            }
            .links {
                .link-group {
                    .inner {
                        height: 0;
                        overflow: hidden;
                    }
                }
                .link-group.open {
                    .inner {
                        display: flex;
                        flex-direction: column;
                        height: auto;
                    }
                }
            }
            .footer-copyright {
                text-align: center;
            }
        }
    }
</style>
