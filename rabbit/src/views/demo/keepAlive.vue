 <template>
<div>
   <keep-alive include="a" exclude="b">
     <!-- a 是组件的名称 缓存组件a 
     exclude  指定不缓存name 为 b的组件  
     -->
          <component :is="com"></component>
      </keep-alive>
     <button @click="clk">切换组件</button> 
</div>
</template>
<script>
import keepA from '../demo/keep-a'
import keepB from '../demo/keep-b'
export default{
    data(){
        return{
            com:'keepA'
        }
    },
    components:{
        keepA,
        keepB 
    },
    // methods:{
    //     clk(){
            
    //     }
    // }

}
</script> 