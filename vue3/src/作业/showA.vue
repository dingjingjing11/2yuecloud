<template>
    <nav>
            
            <span>右箭头</span> <input type="text" v-model='val' >
    </nav>
</template>
<script>

</script>
<style>
nav{
     padding: 0 100rem 0 100rem;
    width: 100%;
    height: 100rem;
    background: rgb(44, 167, 254);
    display: flex;
    align-items: center;
    justify-content: space-between;
}
nav input{
     padding-left: 10rem;
    width: 70%;
    height: 40rem;
    border: 1px solid rgb(118, 192, 248);
    border-radius: 20rem;
}
</style>