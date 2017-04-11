<template>
<div class="page">
  <image style="width:300px; height:300px;margin:50px;" @load="load" src="http://img1.vued.vanthink.cn/vued6f0e59594e6585f6b37677585de81dda.png" />
  
  <image style="width:300px; height:300px;margin:50px;" @load="load" src="http://img1.vued.vanthink.cn/vued66d48e060d2d8a4bd61214c2bdd30009.png" />
  
</div>



</template>

<style>
  .page{
    flex: 1;
  }
</style>

<script>
let d;
module.exports = {
  methods: {
    load() {
      console.log((new Date()).getTime() - d);  
    }
  },
  created() {
    d = (new Date()).getTime();  
  }
};

</script>

