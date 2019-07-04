<template>
    <div class="school__master__container">
        <div class="school__master__wrapper">
            <h2>
                <strong>EventMaster</strong>
            </h2>
            <div class="create__button">
                <nuxt-link :to="{ name: 'kw-event-master-new' }">
                    <button class="button">作成</button>
                </nuxt-link>
            </div>
        </div>
        <table class="table">
            <thead>
            <tr>
                <th>id</th>
                <th>イベント名</th>
                <th>イベント詳細</th>
                <th>持ち物</th>
                <th>イベント時間</th>
                <th>最小対象年齢</th>
                <th>最大対象年齢</th>
                <th>付き添い有無</th>
                <th>イベント価格</th>
                <th>キャンセルポリシー</th>
                <th>公開ステータス</th>
                <th>郵便番号</th>
                <th>所在地</th>
                <th>action</th>
            </tr>
            </thead>
            <tfoot>
            <tr>
                <th>id</th>
                <th>イベント名</th>
                <th>イベント詳細</th>
                <th>持ち物</th>
                <th>イベント時間</th>
                <th>最小対象年齢</th>
                <th>最大対象年齢</th>
                <th>付き添い有無</th>
                <th>イベント価格</th>
                <th>キャンセルポリシー</th>
                <th>公開ステータス</th>
                <th>郵便番号</th>
                <th>所在地</th>
                <th>action</th>
            </tr>
            </tfoot>
            <tbody>
            <tr
                v-for="res in response['data']"
                :key="res.id"
            >
                <td>{{ res.id }}</td>
                <td>{{ res.title }}</td>
                <td>{{ res.detail }}</td>
                <td>{{ res.handing }}</td>
                <td>{{ res.event_minutes }}</td>
                <td>{{ res.target_min_age }}</td>
                <td>{{ res.target_max_age }}</td>
                <td>{{ formatParentAttendant(res.parent_attendant) }}</td>
                <td>{{ res.price }}</td>
                <td>{{ res.cancel_policy }}</td>
                <td>{{ formatPublicState(res.pub_state) }}</td>
                <td>{{ formatZipCode(res.zip_code1, res.zip_code2) }}</td>
                <td>{{ formatAddress(res.state, res.city, res.address1, res.address2) }}</td>
                <td class="td-expand">
                    <nuxt-link :to="{ name: 'kw-event-master-id', params: { id: res.id } }">
                        <button class="button">詳細</button>
                    </nuxt-link>
                    <nuxt-link :to="{ name: 'kw-event-master-id-edit', params: { id: res.id } }">
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
        name: "kw-school-master",
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
                    await this.$axios.delete(`kw/school-masters/${params.id}`)
                    this.$router.go(0)
                }
                else {
                    return false
                }
            },
            formatPublicState: function(status) {
                return ["公開中", "非公開"][status]
            },
            formatParentAttendant: function(parent_attendant) {
                return ["有り", "無し"][parent_attendant]
            },
            formatZipCode: function(zc1, zc2) {
                return [zc1, zc2].join("-")
            },
            formatAddress: function(state, city, addr1, addr2) {
                return [state, city, addr1, addr2].join("");
            },
        },
        async asyncData({ $axios }) {
            return $axios.$get('kw/event-masters')
                .then(res => {
                    return { response: res }
                }).catch(e => {
                    console.log(e)
                })
        }
    }
</script>

<style scoped lang="scss">
    .school__master__container {
        .school__master__wrapper {
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
