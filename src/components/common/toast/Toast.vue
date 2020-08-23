<template>
    <div class="toast" v-show="isShow">
        <div>{{message}}</div>
    </div>
</template>

<script>
export default {
    props:{
        message:{
            type:String,
            default:''
        },
        isShow:{
            type:Boolean,
            default(){
                return true
            }
        }

    }
}
</script>

<style>
    .toast{
        position: fixed;
        /* top: 50%;
        left: 50%; */
        translate: -50% -50%;
        background: fuchsia;
        color: gold;
    }
</style>