<template>
     <div id="app">
        <Arr></Arr>
         <ul>
            <li v-for="(item, index) in arr" :key="index">
                
                {{ item }}
                </li>
            
            <!-- <li v-for="item in obj" :key="item">
        
        {{item}}
        </li> -->
        
        </ul>
     </div>
</template>
<script>
import Arr from '../zhishidian/Set'
export default {
    components: {
        Arr
    },
    data() {
        return {
            arr: [1, 2, 3],
            obj: {
                name: '张三',
                age: 19,


            }
        }
    },
    mounted() {
        // this.arr.push(4)     //放在前面  
        // this.arr[0]=100
        // this.arr=this.arr.slice(0)  //从0开始截取   截取到最后一位
        // this.$set(this.arr,3,200)    //语法this.$set(要修改得数组，修改得下标，修改的值)      $set用于强制更新视图
        // this.obj.name='李四'
        // this.obj.gender='男';
        // this.$set(this.obj,'name','Lisa')
        // delete this.obj.name
        // this.$delete(this.obj,'name')     //$delete 用于强制删除对象中的属性名
        this.$delete(this.arr, 0) //还可以删除数组
        /* vue2给对象添加 或删除属性 视图不会更新,或者不使用数组的变异方法操作数组也不会更新视图
            vue2内部提供了 $set  和 $delete 来强制更新视图
            语法 this.$set('要修改的对象','属性名','属性值') 
                this.$delete(要修改的对象，要删除的属性)
                this.$set('要修改的数组',下标,修改后的值) */

    }
}


</script>
<style>
</style>