<template>
    <div class="comment" ref="comment">
        <!--<a-affix :offsetTop="0"  :target="()=>target"  :style="{ position: 'absolute', top: 0, right: 0,  marginTop:'10px',marginRight:'10px'}">
            <a-button type="primary" @click="saveImage">保存图片</a-button>
        </a-affix>-->

        <a-affix :target="()=>target" :offsetTop="0">
            <a-comment>
                <a-avatar
                    slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                />
                <div slot="content">
                    <a-form-item>
                        <a-textarea :rows="4" @change="handleChange" :value="value"></a-textarea>
                    </a-form-item>

                    <a-form-item>
                        <!--<a-anchor  :getContainer="()=>target">
                            &lt;!&ndash;href="/comments"&ndash;&gt;
                            <a-anchor-link @click="handleSubmit"  title="Basic demo" />
                        </a-anchor>-->
                        <a-button
                            htmlType="submit"
                            :loading="submitting"
                            @click="handleSubmit"
                            type="primary"
                        >
                            增加留言
                        </a-button>
                    </a-form-item>

                </div>
            </a-comment>
        </a-affix>

        <a-list
            v-if="comments.length"
            :dataSource="comments"
            :header="`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`"
            itemLayout="horizontal"
        >
            <a-list-item slot="renderItem" slot-scope="item, index">
                <a-comment
                    :author="item.author"
                    :avatar="item.avatar"
                    :content="item.content"
                    :datetime="item.datetime"
                >
                </a-comment>
            </a-list-item>
        </a-list>
        <p>数据已加载完毕...</p>
    </div>
</template>

<script>
    import moment from 'moment'

    export default {
        name: 'index',
        data() {
            return {
                comments: [],
                submitting: false,
                value: '',
                moment,
            }
        },
        methods: {
            handleSubmit() {
                if (!this.value) {
                    return;
                }

                this.submitting = true

                setTimeout(() => {
                    this.submitting = false
                    this.comments = [
                        {
                            author: 'Han Solo',
                            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                            content: this.value,
                            datetime: moment().fromNow(),
                        },
                        ...this.comments,
                    ]
                    this.value = ''
                }, 1000)
            },
            handleChange(e) {
                this.value = e.target.value
            }
        },
        computed: {
            target() {
                return window.document.querySelector('.nuxt-content')
            }
        }
    }
</script>

<style scoped>
    .comment>>>.ant-comment{
        background: white;
    }

</style>
