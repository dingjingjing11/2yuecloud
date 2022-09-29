<template>
<div>
    <h3>数量：{{$store.getters.getNum}}</h3>
    <ul>
        <li v-for="item in $store.state.arr">
         <p>{{item.name}}</p>
         <p>{{item.price}}</p>
        </li>
        <button @click="addshopCar">加购物车</button>
    </ul>
</div>
</template>
<script>
</script>