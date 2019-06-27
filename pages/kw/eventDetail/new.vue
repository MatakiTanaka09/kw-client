<template>
    <div class="category__container">
        <div class="category__wrapper">
            <h2>
                <strong>CategoryMaster</strong>
            </h2>
            <div class="create__button">
                <button class="button">
                    作成
                </button>
            </div>
        </div>
        <div>
            <table class="table is-striped is-narrow is-hoverable is-fullwidth">
                <thead>
                <tr>
                    <th>カラム</th>
                    <th>バリュー</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>name</td>
                    <td>
                        <input class="input is-small" type="text" placeholder="Category Name" v-model="name">
                    </td>
                </tr>
                <tr>
                    <td>color</td>
                    <td>
                        <input class="input is-small" type="text" placeholder="Category Color" v-model="color">
                    </td>
                </tr>
                <tr>
                    <td>filename</td>
                    <td>
                        <input class="input is-small" type="text" placeholder="Filename" v-model="filename">
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button class="button is-primary" @click="postCategory">作成</button>
                    </td>
                </tr>
                </tbody>
            </table>
            <div class="file">
                <label class="file-label">
                    <input class="file-input" type="file" name="file" ref="file" @change="onFileChange">
                    <span class="file-cta">
                    <span class="file-label">
                        Choose a file…
                    </span>
                </span>
                </label>
            </div>
            <output class="form__output" v-if="preview">
                <img :src="preview" alt="">
            </output>
            <div class="form__button">
                <button class="button" @click="postEventDetailImages">submit</button>
            </div>
            <button class="button" @click="getImage">getImage</button>
            <button class="button" @click="deleteImage">deleteImage</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "categpory_new",
        layout: 'kw',
        data() {
            return {
                name: '',
                color: '',
                filename: '',
                file: null,
                preview: null
            }
        },
        methods: {
            async postCategory() {
                const payload = {
                    name: this.name,
                    color: this.color,
                    filename: this.filename,
                }
                await this.$axios.post("category-masters", payload)
                this.$router.push("/kw/category")
            },
            postEventDetailImages: async function() {
                const formData = new FormData()
                const file = this.file
                formData.append('file', file);
                const config = {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
                const result = await this.$axios.post("event-masters/52f2c400-8fe2-11e9-8d26-1de42770ac00/images", formData, config)
                console.log(result)
                // this.$router.push("/kw/eventDetail")
            },
            onFileChange: function(e) {
                e.preventDefault();
                if (e.target.files.length === 0) {
                    return false;
                }
                if (! e.target.files[0].type.match('image.*')) {
                    return false
                }
                const reader = new FileReader()
                const self = this
                reader.onload = e => {
                    this.preview = e.target.result
                }
                reader.readAsDataURL(e.target.files[0])
                self.file = e.target.files[0]
            },
            reset () {
                this.preview = ''
                this.file = null
                this.$el.querySelector('input[type="file"]').value = null
            },
            getImage: async function() {
                const result = await this.$axios.get("images-s3")
                console.log(result)
            },
            deleteImage: async function() {
                const result = await this.$axios.delete("images-s3")
                console.log(result)
            }
        }
    }
</script>

<style scoped lang="scss">
    .category__container {
        .category__wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
    table {
        table-layout: fixed;
        min-width: 100%;
    }
    tbody th {
        width: 200px;
        min-width: 200px;
    }
    td {
        width: 130px;
        min-width: 130px;
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
    input {
        border: none;
        outline-color: white;
    }
</style>
