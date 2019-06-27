<template>
    <div class="reserve__container">
        <h1 class="heading mb_24">このイベントへ申し込む</h1>
        <div class="wrapper mb_16">
            <h2 class="sub-heading mb_8">イベント名</h2>
            <div class="content">
                {{ event.event_master.title }}
            </div>
        </div>
        <div class="wrapper mb_16">
            <h2 class="sub-heading mb_8">開催日時</h2>
            <div class="content">
                {{ formatDate(event.started_at) }}
            </div>
        </div>
        <div class="wrapper mb_16">
            <h2 class="sub-heading mb_8">料金</h2>
            <div class="content">
                {{ event.event_master.price }}円
            </div>
        </div>
        <div class="wrapper mb_16">
            <h2 class="sub-heading mb_8">会場</h2>
            <div class="content">
                {{ formatAddress(event) }}
            </div>
        </div>
        <div class="wrapper mb_32">
            <h2 class="sub-heading mb_8">お子さん</h2>
            <div class="content mb_8">
                <div class="mb_8"
                     v-for="(child,index) in response.children"
                     :key="child.id"
                >
                    <input type="checkbox" name="children" :value="child.id" :id="'checkout0' + index" v-model="selectedChild">
                    <label :for="'checkout0' + index" class="checkbox">{{ child.full_kana }}</label>
                </div>
            </div>
        </div>
        <div class="buttons__container">
            <div class="button__group">
                <a @click="backPreview">
                    <div class="btn light-green">
                        キャンセル
                    </div>
                </a>
            </div>
            <div class="button__group">
                <a
                    @click="postBook(response.parent.id, selectedChild, event.id, event.event_master.price)"
                >
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
        name: "user-events-id-reserve",
        layout: "user",
        data() {
            return {
                response: [],
                event: {},
                selectedChild: []
            }
        },
        methods: {
            postBook: async function(
                user_parent_id,
                selected_child,
                event_detail_id,
                price
            ) {
                console.log(selected_child)
                let array = [];
                const data = {
                    user_parent_id: user_parent_id,
                    event_detail_id: event_detail_id,
                    status: 200,
                    price: price
                };
                selected_child.forEach((el,i) => {
                    console.log(el,i)
                    array[i] = Object.assign({}, {
                        user_parent_id: user_parent_id,
                        event_detail_id: event_detail_id,
                        status: 200,
                        price: price,
                        user_child_id: el
                    });
                });
                await this.$axios.post("users/books", array);
                this.$router.push(`/user/events/${this.$route.params.id}/reserved`)
            },
            backPreview: function() {
                return this.$router.push(`/user/events/${this.$route.params.id}`)
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
            formatDate: function(started_at) {
                const format_started_at = this.formatStartedAt(started_at)
                return format_started_at.month + "月" + format_started_at.date + "日" + " (" + format_started_at.day + ")" + " " + format_started_at.hour + "時" + format_started_at.min + "分";
            },
            formatAddress: function(response) {
                return response.state + response.city + response.address1 + response.address2;
            }
        },
        async asyncData({$axios, params}) {
            const id = "68608530-9813-11e9-8c77-457e6b5eed6d";
            const [_event, _res] = await Promise.all([
                $axios.$get(`/users/event-details/${params.id}`),
                $axios.$get(`users/user-parents/${id}/children`)
            ]);
            return { event: _event["data"][0], response: _res };
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
    .reserve__container {
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
