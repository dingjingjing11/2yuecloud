
//头部导航
$(function(){
    var result;
        $.ajax({
            url: 'https://apipc-xiaotuxian-front.itheima.net/home/category/head',
            dataType: 'json', //返回的数据类型  []{}
            type: 'get', // get post  
            success: function (res){
                // console.log(res);                
                if (res.msg == '操作成功'){
                    result =res
                    // console.log(res.result[3].name);  //查找到下面的元素
                    var html= `<li>首页</li>`                    
                    for(var i=0;i<res.result.length;i++){
                        html+=` <li class="home">
                        ${res.result[i].name}
                                    <div class="nav_big_li">                        
                                        <ul>  
                                        </ul>
                                    </div>
                                </li>`        
                    }
                    $('.app-header-nav').html(html)                  
                            
                }
            }
        })
     //头部导航hover效果
        $('.app-header-nav').on('mouseover','li.home',function(){ 
            // console.log(1);
            var arr = result.result[$(this).index()-1].children;  
            // console.log(arr);         
            var html=''
            for(var i=0;i<arr.length;i++){
                html+=`<li class="nav-box">
                    <img src="${arr[i].picture}" alt="">
                        <p>${arr[i].name}</p>
                    </li>`
            }
            $(this).children().children().html(html)
            $(this).children().stop().slideDown()
            
        })
       

        $('.app-header-nav').on('mouseout','li.home',function(){
            // console.log($('.app-header-nav li')); 
           
            $(this).children().stop().slideUp()
        })

        //轮播图
       
        $.ajax({
            url:"https://apipc-xiaotuxian-front.itheima.net/home/banner",
            dataType: 'json', //返回的数据类型  []{}
            type: 'get', // get post  
            success: function (res){
                // console.log(res);                
                if (res.msg == '操作成功'){
                    result =res
                    // console.log(res.result[3].name);  //查找到下面的元素
                    var html= ''
                    for(var i=0;i<res.result.length;i++){
                        html+=` <li class="carousel-item">                        
                            <img src="${res.result[i].imgUrl}" alt="">  
                                </li>`
                    }
                    $('.body').html(html)
                }  
            } 
        })



        var result;
        $.ajax({
            url: 'http://pcapi-xiaotuxian-front-devtest.itheima.net/home/category/head',
            dataType: 'json', //返回的数据类型  []{}
            type: 'get', // get post  
            success: function (res){
                // console.log(res); 
                var text=''               
                if (res.msg == '操作成功'){
                    result =res
                    // console.log(res.result[3].name);  //查找到下面的元素 
                    for(var i=0;i<res.result.length;i++){
                        text+=`<li class="nav-tab">                        
                                <span>${res.result[i].name}</span>                                                            
                                 ` 
                        if(res.result[i].children && res.result[i].children.length>0){
                            for(var j=0;j<res.result[i].children.length;j++){
                                // console.log(res.result[i].children.length);
                                if(j<2){
                                    text+=`<span>${res.result[i].children[j].name}</span>`
                                }
                            }
                        }
                        text+=`</li>`                    
                    } 
                                    
                    $('.menu').html(text) 
                    var index 
                    $('.nav-tab').hover(function(){
                        console.log($(this).index());
                        index=$(this).index() 
                        $(this).addClass('selected')
                        console.log(this);                        
                         var goods=result.result[index].goods
                         console.log(goods);    
                       
                        $('.layer').show()
                        var html=`<h4>分类推荐
                        <small>根据您的购买或浏览记录推荐                        
                        </small>                        
                    </h4>
                    <ul>
                   
                    </ul>`
                        $.each(goods,function(index,item){
                            console.log(item);
                            console.log(index);
                            html+=`
                                       <li>
                                           <a href="">
                                               <img src="${item.picture}" alt="">
                                               <div class="info">
                                                   <p class="name ellipsis-2">${item.name}</p>
                                                   <p class="desc ellipsis">${item.desc}</p>
                                                   <p class="price"><i>￥</i>${item.price}</p>
                                               </div>
                                           </a>
                                       </li>`                         
   
                        })
                        $('.layer').html(html)
                       
                       
                    },function(){
                       $('.layer').hide()
                       $(this).removeClass('selected')
                    })
            
                   $('.layer').hover(function(){
                    $('.nav-tab').eq(index).addClass('selected')   
                    $(this).show()
                   },function(){
                    $(this).hide()
                    $('.nav-tab').eq(index).removeClass('selected')
                   })                       
                }
            }
        })

        // $('.nav-tab').on('mouseover','li.nav-tab',function(){       
           
        // })

        // $('.menu').on('mouseout','li.nav-tab',function(){
        //     $(this).children().stop().slideUp()
        // })
        var num=0        
        var length=$('.carousel-item').length
        var timer =setInterval(silde,1000)
        function silde(){           
                num++
                $('.body').animate({
                    left:'-'+num*1240+'px'
                },function(){
                    if(num==length){
                        num=0
                        $('.body').css({left:0})
                    }
                    //底部小圆点
                    $('li').eq(num).addClass('.active').siblings().removeClass('.active')
                })
           
        }
        //鼠标滑过停止轮播，鼠标离开继续
        $('.body').mouseover(function(){
            clearInterval(timer)
        })
        $('.body').mouseout(function(){

        })
        //左右按钮
        $('.left').click(function(){
            num--
            if(num<0){
                num=length
                $('.body').css({left:"-"+num*1240+'px'})
            }
            $('.body').animate({left:"-"+num*1240+'px'})
            $('li').eq(num).addClass('.active').siblings().removeClass('.active')
        })
        $('.right').click(function(){
            silde()
        })


        // for(var i=0;i<lis.length;i++){
        //     index=this.getAttribute('index')  //获取当前小圆点的下标
        //     lisStyle()
        //  $('.body').style.marginLeft='-'+index*1240+'px'
        // }  
        // // 更改小圆点的样式
        // function lisStyle(){
        //     for(var i=0;i<lis.length;i++){
        //             lis[i].className=''
        //     }
        //     lis[index].className='active'
        // }
        // //右边按钮
        // function cr(){/
        //     if(index==lis.length){
        //         index=0
        //     }else{
        //         index++
        //     }
        //     lisStyle()
        //     $('.body').style.marginLeft='-'+index*1240+'px'
        // }  
        // //左边按钮
        // function cl(){
        //     if(index==0){
        //         index=lis.length
        //     }else{
        //         index++
        //     }
        //     lisStyle()
        //     $('.body').style.marginLeft='-'+index*1240+'px'
        // }  
        
        // var timer=setInterval(cr,1000)
        // $('.home-banner').onmouseover=function(){
        //     clearInterval(timer)
        // }
        // $('.home-banner').onmouseout=function(){
        //     timer=setInterval(cr,1000)
        // }
                   


})