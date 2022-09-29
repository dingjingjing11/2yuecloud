<template>
   <div>{{ n | fixed }}
         {{ msg | upper }}
         </div>

</template>

<script>
export default {
    data() {
        return {
            n: 10,
            msg: 'hello'
        }
    },
    filters: {
        fixed(val) {
            return val.toFixed(2)
        },
        upper(val) {
            return val[0].toUpperCase() + val.slice(1)

        }

    },


}
</script>

<style>
</style>