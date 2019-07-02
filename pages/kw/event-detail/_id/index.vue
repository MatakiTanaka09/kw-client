<template>
    <div class="category__container">
        <div class="category__wrapper mb_32">
            <h2>
                <strong>EventDetail</strong>
            </h2>
        </div>
        <div class="detail__container mb_32">
            <form class="mb_32">
                <div class="field mb_16">
                    <label class="label">id</label>
                    <div class="control">
                        {{ response.id }}
                    </div>
                </div>
                <div class="field mb_16">
                    <label class="label">イベントPR ID</label>
                    <div class="control">
                        {{ response.event_pr_id }}
                    </div>
                </div>
                <div class="field mb_16">
                    <label class="label">開始時間</label>
                    <div class="control">
                        {{ response.started_at }}
                    </div>
                </div>
                <div class="field mb_16">
                    <label class="label">終了時間</label>
                    <div class="control">
                        {{ response.expired_at }}
                    </div>
                </div>
                <div class="field mb_16">
                    <label class="label">公開ステータス</label>
                    <div class="control">
                        {{ formatPublicState(response.pub_state) }}
                    </div>
                </div>
                <div class="field mb_16">
                    <label class="label">郵便番号(上3桁)</label>
                    <div class="control">
                        {{ response.zip_code1 }}
                    </div>
                </div>
                <div class="field mb_16">
                    <label class="label">郵便番号(下4桁)</label>
                    <div class="control">
                        {{ response.zip_code2 }}
                    </div>
                </div>
                <div class="field mb_16">
                    <label class="label">都道府県</label>
                    <div class="control">
                        {{ response.state }}
                    </div>
                </div>
                <div class="field mb_16">
                    <label class="label">区・市</label>
                    <div class="control">
                        {{ response.city }}
                    </div>
                </div>
                <div class="field mb_16">
                    <label class="label">町村</label>
                    <div class="control">
                        {{ response.address1 }}
                    </div>
                </div>
                <div class="field mb_16">
                    <label class="label">番地・マンション名</label>
                    <div class="control">
                        {{ response.address2 }}
                    </div>
                </div>
            </form>
            <div class="buttons__container">
                <div class="button__group">
                    <nuxt-link :to="back_url">
                        <button class="button btn light-green">
                            前に戻る
                        </button>
                    </nuxt-link>
                </div>
                <div class="button__group">
                    <nuxt-link :to="{ name: 'kw-event-detail-id-edit', params: { id: response.id } }">
                        <button class="button btn pink">
                            編集画面へ
                        </button>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "kw-event-detail-id",
        layout: 'kw',
        data() {
            return {
                response: [],
                back_url: `/kw/event-detail`
            }
        },
        asyncData({ $axios, route }) {
            return $axios.$get('kw/event-details')
                .then(res => {
                    console.log(res)
                    const event_detail = res["data"].find(evd => evd.id === route.params.id)
                    return { response: event_detail }
                }).catch(e => {
                    console.log(e)
                })
        },
        methods: {
            formatPublicState: function(pub_state) {
                return ["公開中", "非公開"][pub_state]
            }
        }
    }
</script>

<style scoped lang="scss">
    .is-valid {
        border-color: rgb(94, 205, 189);
    }
    .is-invalid {
        border-color: rgb(226, 121, 133);
    }
    .mb_16 {
        margin-bottom: 16px;
    }
    .mb_32 {
        margin-bottom: 32px;
    }
    .category__container {
        .category__wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .detail__container {
            width: 100%;
            .buttons__container {
                display: flex;
                width: 100%;
                .button__group {
                    width: 50%;
                    padding: 4px;
                    .btn {
                        width: 100%;
                        height: 100%;
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
    }
</style>
