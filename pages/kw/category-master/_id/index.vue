<template>
    <div class="category__container">
        <div class="category__wrapper mb_32">
            <h2>
                <strong>CategoryMaster</strong>
            </h2>
        </div>
        <div class="detail__container mb_32">
            <form class="mb_32">
                <div class="field mb_16">
                    <label class="label">カテゴリー名</label>
                    <div class="control">
                        {{ response.name }}
                    </div>
                </div>
                <div class="field mb_16">
                    <label class="label">色（いまは使ってないです）</label>
                    <div class="control">
                        {{ response.color }}
                    </div>
                </div>
                <div class="field mb_16">
                    <label class="label">ファイルURL</label>
                    <div class="control">
                        {{ response.filename }}
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
                    <nuxt-link :to="{ name: 'kw-category-master-id-edit', params: { id: response.id } }">
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
        name: "kw-category-master-id",
        layout: 'kw',
        data() {
            return {
                response: {},
                back_url: `/kw/category`
            }
        },
        asyncData({ $axios, route }) {
            return $axios.$get('kw/category-masters')
                .then(res => {
                    const parse_int = parseInt(route.params.id)
                    const category = res.find(cate => cate.id === parse_int)
                    return { response: category }
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
