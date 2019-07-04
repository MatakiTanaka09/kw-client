<template>
    <div class="event__detail mb_64">
        <div class="event__detail__container">
            <div class="image__container">
                <div class="image__groups">
                    <figure class="image">
                        <img :src="response.images[0]['url']" alt="">
                        <!--<img src="http://placehold.jp/375x375.png" alt="">-->
                    </figure>
                </div>
            </div>
            <div class="detail__container">
                <div class="category__container">
                    <div class="category"
                         v-for="c in response.category"
                         :key="c.id"
                    >
                        {{ c.name }}
                    </div>
                </div>
                <div class="title__container mb_8">
                    <div class="event-title">
                        {{ response.event_master.title }}
                    </div>
                </div>
                <div class="simple__place__container mb_16">
                    <div class="simple-place">
                        <span class="state">
                            {{ response.event_master.state }}
                        </span>
                        <span>,</span>
                        <span class="city">
                            {{ response.event_master.address1 }}
                        </span>
                    </div>
                </div>
                <div class="content__container mb_32">
                    <h1 class="heading">体験できること</h1>
                    <div class="content">
                        {{ response.event_master.detail }}
                    </div>
                </div>
                <div class="place__container mb_32">
                    <h1 class="heading">会場</h1>
                    <div class="place">
                        <a href="#">{{ formatAddress(response) }}</a>
                    </div>
                </div>
                <div class="age__container mb_32">
                    <h1 class="heading">対象年齢</h1>
                    <div class="age">
                        <span>{{ response.event_master.target_min_age }}</span>歳 〜
                        <span>{{ response.event_master.target_max_age }}</span>歳
                    </div>
                </div>
                <div class="date__container mb_32">
                    <h1 class="heading">開催日時</h1>
                    <div class="date">
                        {{ formatDate(response.started_at, response.expired_at) }}
                    </div>
                </div>
                <div class="attendance__container mb_32">
                    <h1 class="heading">付き添い有無</h1>
                    <div class="attendance">
                        {{ formatAttendant(response.event_master.parent_attendant) }}
                    </div>
                </div>
                <div class="school__container mb_32">
                    <h1 class="heading">主催</h1>
                    <div class="school">
                        <div class="sentence">
                            {{ response.school_master[0].detail }}
                        </div>
                        <div class="name-logo-box">
                            <div class="logo mr_16">
                                <figure class="image image-expand">
                                    <img :src="response.school_master[0].icon" alt="スクールロゴ">
                                </figure>
                            </div>
                            <div class="name">
                                {{ response.school_master[0].name }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="belongs__container mb_32">
                    <h1 class="heading">持ち物</h1>
                    <div class="belongs">
                        {{ response.event_master.handing }}
                    </div>
                </div>
                <div class="remarks__container mb_32">
                    <h1 class="heading">備考</h1>
                    <div class="remarks">
                        <div class="remarks-box mb_4">
                            <h2 class="sub-heading">
                                キャンセルポリシー
                            </h2>
                            {{ response.event_master.cancel_policy}}
                        </div>
                        <!--<div class="remarks-box mb_4">-->
                            <!--<h2 class="sub-heading">写真のお取り扱いについて</h2>-->
                        <!--</div>-->
                        <!--<div class="remarks-box mb_4">-->
                            <!--<h2 class="sub-heading">個人情報取り扱いについて</h2>-->
                        <!--</div>-->
                    </div>
                    <div class="more-button mt_8">
                        <span class="button-expand">
                            <nuxt-link to="#">もっと詳しく</nuxt-link>
                        </span>
                    </div>
                </div>
                <div class="tags__container mb_32">
                    <h1 class="heading">タグ</h1>
                    <div class="tag-group">
                        <div class="tag"
                             v-for="t in response.tag"
                             :key="t.id"
                        >
                            {{t.title}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <StickyFooter
            :path="path"
            :price="price"
        />
    </div>
</template>

<script>
    import StickyFooter from "~/components/organisms/footer/user/StickyFooterLogic";
    export default {
        name: "user-events-id",
        layout: "user",
        components: {
            StickyFooter
        },
        data() {
            return {
                response: [],
                path: `${this.$route.path}/reserve`,
                price: 1500
            }
        },
        async asyncData({ $axios, params }) {
            const create_url = `users/event-details/${params.id}`

            return $axios.$get(create_url)
                .then(res => {
                    return { response: res["data"][0] }
                }).catch(e => {
                    console.log(e)
                })
        },
        methods: {
            formatAttendant: function(parent_attendant) {
                switch(parent_attendant) {
                    case 0:
                        return "あり";
                        break;
                    case 1:
                        return "なし";
                        break;
                }
            },
            formatStartedAt: function(str_date) {
                const d = new Date(str_date);
                const str_day = [ "日", "月", "火", "水", "木", "金", "土" ];

                const month = d.getMonth() + 1;
                const date = d.getDate();
                const day = str_day[d.getDay()];
                const hour = d.getHours();
                const min = d.getMinutes();

                return {
                    month: month,
                    date: date,
                    day: day,
                    hour: hour,
                    min: min
                }
            },
            formatExpiredAt: function(str_date) {
                const d = new Date(str_date);
                const hour = d.getHours();
                const min = d.getMinutes();

                return {
                    hour: hour,
                    min: min
                }
            },
            formatDate: function(started_at, expired_at) {
                const format_started_at = this.formatStartedAt(started_at)
                const format_expired_at = this.formatExpiredAt(expired_at)
                return format_started_at.month + "月" + format_started_at.date + "日" + " (" + format_started_at.day + ")" + " " + format_started_at.hour + "時" + format_started_at.min + "分 〜 " + format_expired_at.hour + "時" + format_expired_at.min + "分"
            },
            formatAddress: function(response) {
                return response.state + response.city + response.address1 + response.address2;
            }
        }
    }
</script>

<style lang="scss" scoped>
    a:hover {
        opacity: 0.6;
    }
    .heading {
        font-size: 18px;
        font-weight: 600;
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
    .mb_200 {
        margin-bottom: 200px;
    }
    .mb_250 {
        margin-bottom: 250px;
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
    .event__detail {
        &__container {
            .image__container {
                .image__groups {
                    .slide {
                        .slide-buttons {
                            .slide-next {
                            }
                            .slide-preview {
                            }
                        }
                    }
                }
            }
            .detail__container {
                padding: 16px;
                .category__container {
                    display: flex;
                    flex-wrap: wrap;
                    .category:first-child {
                        margin: 4px 4px 4px 0;
                    }
                    .category {
                        margin: 4px;
                        padding: 4px;
                        color: gray;
                        border: 2px solid gray;
                        border-radius: 4px;
                    }
                }
            }
            .title__container {
                .event-title {
                    font-size: 32px;
                    font-weight: 800;
                }
            }
            .content__container {
                .content {
                }
            }
            .simple__place__container {
                .simple-place {
                    font-size: 16px;
                    color: gray;
                }
            }
            .tags__container {
                .tag-group {
                    display: flex;
                    flex-wrap: wrap;
                    .tag:first-child {
                        margin: 4px 4px 4px 0;
                    }
                    .tag {
                        margin: 4px;
                        padding: 12px;
                        color: rgb(226, 121, 133);
                        border: 2px solid rgb(226, 121, 133);
                        border-radius: 8px;
                        background-color: white;
                    }
                }
            }
            .attendance__container {
            }
            .school__container {
                .school {
                    display: block;
                    .name-logo-box {
                        display: flex;
                        align-items: center;
                        width: 100%;
                        padding: 8px;
                        margin: 16px 0;
                        border: 1px solid #ebebeb;
                        border-radius: 4px;
                        .logo {
                            .image-expand {
                                width: 64px;
                                height: 64px;
                            }
                        }
                        .name {

                        }
                    }
                }
            }
            .belongs__container {

            }
            .remarks__container {
                .remarks {
                    .remarks-box {
                    }
                    .more-button {
                        .button-expand {
                        }
                    }
                }
            }
        }
    }
    // タブレット縦 /スマートフォン横
    @media screen and (min-width: 481px) {
        padding: 0 24px;
    }
    // デスクトップ/タブレット横
    @media screen and (min-width: 769px) {
        .event__detail {
            .event__detail__container {
                display: flex;
                .image__container {
                    width: 25%;
                    padding: 4px;
                }
                .detail__container {
                    width: 80%;
                }
            }
        }
    }

</style>
