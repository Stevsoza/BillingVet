<template>
    <div class="main">
        <RouterLink to="/users">
            <div>
                Users
            </div>
        </RouterLink>
        <RouterLink to="/">
            <div>
                Sellers
            </div>
        </RouterLink>
    </div>
</template>
<script setup>
    import { ref } from "vue";
    import { RouterLink } from "vue-router"
    const valor = ref(null);
</script>

<style lang="scss">
    $color1: #23272e;
    $shadow: 0 0 3px 1px rgba(0, 0, 0, 0.5);
    .main{
        padding: 1rem;
        min-width: 100px;
        display: flex;
        gap: 0.5rem;
        // border-radius: 10px;
        background-color: $color1;
        box-shadow: $shadow;

        div{
            background-color: #c9c9c9;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            box-shadow: $shadow;     
            &:hover{
                background-color: aquamarine;
                cursor: pointer;
            }      
        }
    }
    
</style>
