<template>
<div>
    <ul res="ul">
        <li v-for="item in arr" :key="item" @click="add">{{item}}</li>
            <button>添加</button>
    </ul>
</div>
</template>
<script>
export default{
    data(){
        return{
            arr:[1,2,3,4]
        }
        
    },
    methods:{
            add(){
                console.log(this.$refs.ul.offsetHeight);
                this.arr.push(5)
                 console.log(this.$refs.ul.offsetHeight);

                 this.$nextTick(()=>{
                console.log(this.$refs.ul.offsetHeight);

            })

            }
            

        }

}
</script>
