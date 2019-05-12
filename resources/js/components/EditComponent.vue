<template>
    <div>
        <h1>Edit Post</h1>
        <form @submit.prevent="updatePost">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-gruop">
                        <label>Post title</label>
                        <input type="text" class="form-control" v-model="post.title">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-gruop">
                        <label>Post body: </label>
                        <textarea class="form-control" v-model="post.body" rows="5"></textarea>
                    </div>
                </div>
            </div><br>
            <div class="form-gruop">
                <button class="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                post: {}
            }
        },
        created() {
            let uri = `http://127.0.0.1:8000/api/post/edit/${this.$route.params.id}`;
            this.axios.get(uri).then((response) => {
                this.post = response.data;
            });
        },
        methods: {
            updatePost() {
                let uri = `http://127.0.0.1:8000/api/post/update/${this.$route.params.id}`;
                this.axios.put(uri, this.post).then((response) => {
                    this.$router.push({name: 'posts'});
                });
            }
        }  
    }
</script>

<style>

</style>
