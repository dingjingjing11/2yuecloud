<template>
    <div class="xtx-massage" :type="msgType">
    

    </div>
</template>
<script>
export default{

}
</script>
<style>
.xtx-massage{
  width: 300px;
  height: 50px;
  position: fixed;
  z-index: 9999;
  left: 50%;
  margin-left: -150px;
  top: 25px;
  line-height: 50px;
  padding: 0 25px;
  border: 1px solid #e4e4e4;
  background: #f5f5f5;
  color: #999;
  border-radius: 4px;
}

</style>