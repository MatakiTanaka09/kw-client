<template>
    <div class="event__container">
        <div class="event__wrapper">
            <h2>
                <strong>EventDetail</strong>
            </h2>
            <div class="create__button">
                <nuxt-link :to="{ name: 'kw-event-detail-new' }">
                    <button class="button">作成</button>
                </nuxt-link>
            </div>
        </div>
        <table class="table">
            <thead>
            <tr>
                <th>id</th>
                <th>開始時間</th>
                <th>終了時間</th>
                <th>公開ステータス</th>
                <th>郵便番号</th>
                <th>住所</th>
                <th>action</th>
            </tr>
            </thead>
            <tfoot>
            <tr>
                <th>id</th>
                <th>開始時間</th>
                <th>終了時間</th>
                <th>公開ステータス</th>
                <th>郵便番号</th>
                <th>住所</th>
                <th>action</th>
            </tr>
            </tfoot>
            <tbody>
            <tr
                v-for="res in response['data']"
                :key="res.id"
            >
                <th>{{ res.id }}</th>
                <td>{{ res.started_at }}</td>
                <td>{{ res.expired_at }}</td>
                <td>{{ formatPublicState(res.pub_state) }}</td>
                <td>{{ formatZipCode(res.zip_code1, res.zip_code2) }}</td>
                <td>{{ formatAddress(res.state, res.city, res.address1, res.address2) }}</td>
                <td class="td-expand">
                    <nuxt-link :to="{ name: 'kw-event-detail-id', params: { id: res.id } }">
                        <button class="button">詳細</button>
                    </nuxt-link>
                    <nuxt-link :to="{ name: 'kw-event-detail-id-edit', params: { id: res.id } }">
                        <button class="button is-primary">編集</button>
                    </nuxt-link>
                    <button class="button is-danger" @click="deleteCategory({ id: res.id })">削除</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "event_detail_index",
        layout: 'kw',
        data() {
            return {
                response: []
            }
        },
        methods: {
            async deleteCategory(params) {
                const confirm_delete = confirm(`「カテゴリーID ${params.id}」を、本当に削除しますか？`)
                if(confirm_delete) {
                    await this.$axios.delete(`kw/event-details/${params.id}`)
                    this.$router.go(0)
                }
                else {
                    return false
                }
            },
            formatPublicState: function(status) {
                return ["公開中", "非公開"][status]
            },
            formatZipCode: function(zc1, zc2) {
                return [zc1, zc2].join("-")
            },
            formatAddress: function(state, city, addr1, addr2) {
                return [state, city, addr1, addr2].join("");
            },
        },
        async asyncData({ $axios }) {
            return $axios.$get('kw/event-details')
                .then(res => {
                    return { response: res }
                }).catch(e => {
                    console.log(e)
                })
        }
    }
</script>

<style scoped lang="scss">
    .event__container {
        .event__wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
    table {
        min-width: 100%;
    }
    td {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        max-width: 0;
    }
    .td-expand {
        width: 250px;
        min-width: 250px;
    }
    .table__container {
        max-width: 100%;
        overflow: auto;
        /*width: 100%;*/
        /*overflow-x: scroll;*/
    }
</style>
