export default {
    state:{
        arr:'',
        shopCart:[]
      
     
    },
    getters:{   //计算属性
      getNum(a){
        var num = 0;
        a.shopcar.forEach(i => {
          num+= i.num
        })
      },
      getshopCartSum(state){
        var sum=0
        state.shopCart.forEach(i=>{
          sum+=i.count
        })
        return sum 
      }
    },
    //
    mutations:{
     
        addn(a){
            a.n++
          },
          oddn(a){
              a.n--
          },
          addshopcar(a,t){
        //     var bool =true
        //    a.shopcar.forEach((i) =>{
        //     if(i.num == t.num){
        //        bool = false
        //        i.num++
        //     }
        //    if(bool == true){
             
        //     }
          
        //    })
           a.shopcar.push(t)
          },
          usercontent(a,x){
             console.log(x);
             a.arr1 = x
             console.log(a.arr1);
          },
          djqk(a){
            a.arr1 = ''
          },
          hqtitle(a,t){
            
             a.bt = t
           
           
          },
          hqtitle1(a,t){
            console.log(t);
             a.bt1 = t
           
           
          },
          hqtitle2(a,t){
            console.log(t);
             a.bt2 = t
           
           
          },
          //小兔仙购物车
          updatashopCart(state,arr){
            state.shopCart=arr
          },
      
          
    }
}