import Vue from "vue";
Vue.directive('drag', {
    inserted(el) {
        el.onmousedown = function (e) {
            el.onmousemove = function (e) {
                el.style.marginLeft = e.clientX - el.offsetWidth / 2 + 'px'
                el.style.marginTop = e.clientY - el.offsetHeight / 2 + 'px'
            }
            el.onmouseup = function () {
                el.style.onmousemove = null
            }
        }


    }


})

