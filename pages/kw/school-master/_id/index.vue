<template>
    <div class="category__container">
        <div class="category__wrapper mb_32">
            <h2><strong>SchoolMaster詳細画面</strong></h2>
            <p>id: {{ response.id }}</p>
        </div>
        <div class="detail__container mb_32">
            <form class="mb_32">
                <div class="field mb_16">
                    <label class="label">スクール名</label>
                    <div class="control">
                        {{ response.name }}
                    </div>
                </div>
                <div class="field mb_16">
                    <label class="label">スクール詳細</label>
                    <div class="control">
                        {{ response.detail }}
                    </div>
                </div>
                <div class="field mb_16">
                    <label class="label">メールアドレス</label>
                    <div class="control">
                        {{ response.email }}
                    </div>
                </div>
                <div class="field mb_16">
                    <label class="label">電話番号</label>
                    <div class="control">
                        {{ response.tel }}
                    </div>
                </div>
                <div class="field mb_16">
                    <label class="label">URL（HPなど）</label>
                    <div class="control">
                        {{ response.url }}
                    </div>
                </div>
                <div class="field mb_16">
                    <label class="label">会社アイコン</label>
                    <div class="control">
                        {{ response.icon }}
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
                        {{ response.address1 }}
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
                    <nuxt-link :to="{ name: 'kw-school-master-id-edit', params: { id: response.id } }">
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
        name: "kw-school-master-id",
        layout: 'kw',
        data() {
            return {
                response: {},
                back_url: `/kw/school-master`
            }
        },
        asyncData({ $axios, route }) {
            return $axios.$get('kw/school-masters')
                .then(res => {
                    const school_master = res["data"].find(sch => sch.id === route.params.id)
                    return { response: school_master }
                }).catch(e => {
                    console.log(e)
                })
        },
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
