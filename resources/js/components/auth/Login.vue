<template>
    <div>
        <div class="alert alert-danger" v-if="error">
            <p>There was error, unable to sigin in with those credentials</p>
        </div>
        <form autocomplete="off" @submit.prevent="login" method="post">
            <div class="form-gruop">
                <label for="email">E-mail</label>
                <input type="email" 
                        id="email" 
                        class="form-control" 
                        placeholder="user@example.com" 
                        v-model="email" required>
            </div>
            <div class="form-gruop">
                <label for="password">Password</label>
                <input type="password" 
                        id="password"
                        class="form-control"
                        v-model="password"
                        required>
            </div><br>
            <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
