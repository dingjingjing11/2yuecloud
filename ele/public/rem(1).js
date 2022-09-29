// //让页面所有元素随着屏幕的宽度进行，等比缩放
// function rem(){
// 	//获取设备的宽
// 	console.log(document.documentElement.clientWidth);
// 	//根据设备的宽设置html的字体大小
// 	document.documentElement.style.fontSize = document.documentElement.clientWidth/750 + "px";
// 	// 			clientWidth 设备宽度   ---》设计稿的宽度 	  750/750 = 1px = 1rem													
// 	//
// }
// rem();
// //当窗口改变时，重新进行计算
// window.onresize = rem;


(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


// window.onload = function(){
//     getRem(375,50)  // 设计稿的宽   换算比例   1rem=100px  
// };
// window.onresize = function(){
//     getRem(375,50)
// };
// function getRem(pwidth,prem){
//     var html = document.getElementsByTagName("html")[0];
//     var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
//     html.style.fontSize = oWidth/pwidth*prem + "px";
// }
//  


//  (function (win, lib) {
//   var doc = win.document;
//   var docEl = doc.documentElement;
//   var metaEl = doc.querySelector('meta[name="viewport"]');
//   var flexibleEl = doc.querySelector('meta[name="flexible"]');
//   var dpr = 0;
//   var scale = 0;
//   var tid;
//   var flexible = lib.flexible || (lib.flexible = {});

//   if (metaEl) {
//     console.warn('将根据已有的meta标签来设置缩放比例');
//     var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
//     if (match) {
//       scale = parseFloat(match[1]);
//       dpr = parseInt(1 / scale);
//     }
//   } else if (flexibleEl) {
//     var content = flexibleEl.getAttribute('content');
//     if (content) {
//       var initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
//       var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
//       if (initialDpr) {
//         dpr = parseFloat(initialDpr[1]);
//         scale = parseFloat((1 / dpr).toFixed(2));
//       }
//       if (maximumDpr) {
//         dpr = parseFloat(maximumDpr[1]);
//         scale = parseFloat((1 / dpr).toFixed(2));
//       }
//     }
//   }

//   if (!dpr && !scale) {
//     var isAndroid = win.navigator.appVersion.match(/android/gi);
//     var isIPhone = win.navigator.appVersion.match(/iphone/gi);
//     var devicePixelRatio = win.devicePixelRatio;
//     if (isIPhone) {
//       // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
//       if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
//         dpr = 3;
//       } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
//         dpr = 2;
//       } else {
//         dpr = 1;
//       }
//     } else {
//       // 其他设备下，仍旧使用1倍的方案
//       dpr = 1;
//     }
//     scale = 1 / dpr;
//   }

//   docEl.setAttribute('data-dpr', dpr);
//   if (!metaEl) {
//     metaEl = doc.createElement('meta');
//     metaEl.setAttribute('name', 'viewport');
//     metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
//     if (docEl.firstElementChild) {
//       docEl.firstElementChild.appendChild(metaEl);
//     } else {
//       var wrap = doc.createElement('div');
//       wrap.appendChild(metaEl);
//       doc.write(wrap.innerHTML);
//     }
//   }

//   function refreshRem() {
//     var width = docEl.getBoundingClientRect().width;
//     if (width / dpr > 540) {
//       width = width * dpr;
//     }
//     var rem = width / 10; //********************************** */
//     docEl.style.fontSize = rem + 'px';
//     flexible.rem = win.rem = rem;
//   }

//   win.addEventListener('resize', function () {
//     clearTimeout(tid);
//     tid = setTimeout(refreshRem, 300);
//   }, false);
//   win.addEventListener('pageshow', function (e) {
//     if (e.persisted) {
//       clearTimeout(tid);
//       tid = setTimeout(refreshRem, 300);
//     }
//   }, false);

//   if (doc.readyState === 'complete') {
//     doc.body.style.fontSize = 12 * dpr + 'px';
//   } else {
//     doc.addEventListener('DOMContentLoaded', function (e) {
//       doc.body.style.fontSize = 12 * dpr + 'px';
//     }, false);
//   }


//   refreshRem();

//   flexible.dpr = win.dpr = dpr;
//   flexible.refreshRem = refreshRem;
//   flexible.rem2px = function (d) {
//     var val = parseFloat(d) * this.rem;
//     if (typeof d === 'string' && d.match(/rem$/)) {
//       val += 'px';
//     }
//     return val;
//   }
//   flexible.px2rem = function (d) {
//     var val = parseFloat(d) / this.rem;
//     if (typeof d === 'string' && d.match(/px$/)) {
//       val += 'rem';
//     }
//     return val;
//   }

// })(window, window['lib'] || (window['lib'] = {}));

