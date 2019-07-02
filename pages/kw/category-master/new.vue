<template>
    <div class="category__container">
        <div class="category__wrapper mb_32">
            <h2>
                <strong>CategoryMaster</strong>
            </h2>
        </div>
        <div class="create__container mb_32">
            <form class="mb_32">
                <div class="field mb_16">
                    <label class="label">カテゴリー名</label>
                    <div class="control">
                        <input
                            v-validate="'required'"
                            class="input"
                            name="name"
                            type="text"
                            placeholder="Text input"
                            v-model="name">
                        <div v-if="errors.has('name')">
                            {{ errors.first('name') }}
                        </div>
                    </div>
                </div>
                <div class="field mb_16">
                    <label class="label">色（いまは使ってないです）</label>
                    <div class="control">
                        <input
                            v-validate="'required'"
                            class="input"
                            name="color"
                            type="text"
                            placeholder="Text input"
                            v-model="color"
                            :disabled="true">
                        <div v-if="errors.has('color')">
                            {{ errors.first('color') }}
                        </div>
                    </div>
                </div>
                <div class="field mb_16">
                    <label class="label">ファイルURL</label>
                    <div class="control">
                        <input
                            v-validate="'required'"
                            class="input"
                            name="filename"
                            type="text"
                            placeholder="Text input"
                            v-model="filename">
                        <div v-if="errors.has('filename')">
                            {{ errors.first('filename') }}
                        </div>
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
                    <button class="button btn pink" @click="postCategory" :disabled="errors.any() || !isComplete()">
                        確認画面へ
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VeeValidate, { Validator } from 'vee-validate'
    import ja from 'vee-validate/dist/locale/ja'

    Vue.use(VeeValidate, {
        classes: true,
        classNames: {
            valid: 'is-valid',
            invalid: 'is-invalid'
        }
    });

    Validator.localize('ja', ja);

    export default {
        name: "kw-category-master-id-new",
        layout: 'kw',
        data() {
            return {
                name: '',
                color: 'none',
                filename: '',
                back_url: `/kw/category`
            }
        },
        methods: {
            async postCategory() {
                const confirm_delete = confirm(`「新カテゴリー ${this.name}」を、本当に作成しますか？`)
                if(confirm_delete) {
                    const payload = {
                        name: this.name,
                        color: this.color,
                        filename: this.filename,
                    }
                    await this.$axios.post("kw/category-masters", payload)
                    this.$router.push("/kw/category-master")
                }
                else {
                    return false
                }
            },
            isComplete: function() {
                return this.name && this.color && this.filename
            },
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
        .create__container {
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
