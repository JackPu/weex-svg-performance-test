<template>
<div class="page">
  <div class="footer">
    <div class="footer-item">
      <image class="footer-item-icon" :src="items[0].icon" @load="load"></image>
    </div>
    <div class="footer-item">
      <image class="footer-item-icon" :src="items[1].icon" @load="load"></image>
    </div>
    <div class="footer-item">
      <image class="footer-item-icon" :src="items[2].icon" @load="load"></image>
    </div>
    <div class="footer-item">
      <image class="footer-item-icon" :src="items[3].icon" @load="load"></image>
    </div>
  </div>
</div>


</template>

<style>
.page{
  flex: 1;
}
.footer{
  flex-direction: row;
  align-items: center;
  z-index: 200;
  position:fixed;
  bottom: 0;
  left:0;
  right:0;
  height: 100px;
  line-height: 100px;
  background-color: #fff;
  border-top-width: 1;
  border-top-style: solid;
  border-top-color: rgba(0,0,0,.15);
}
.footer-item{
  flex: 1;
  justify-content: center;
  align-items: center;
}
.footer-item-icon{
  width: 64px;
  height: 64px;
}
.btn-sm-text{
  color: #777;
  font-size: 20px;
}
.active{
  color: #1ba1e2;
}
</style>

<script>

let d = (new Date()).getTime();
let d2;
console.log(d);
module.exports = {
  props: {
    active: {
      default: 0,
    }
  },
  data() {
    return {
      type: '',
      items: [
        {
          name: 'Home',
          url: 'index.js',
          icon: 'http://img1.vued.vanthink.cn/vued40a1db1fb50417e72fc59c3535de9d1f.png'
        },
        {
          name: 'Shop',
          url: 'shop.js',
          icon: 'http://img1.vued.vanthink.cn/vuede3edd4e57e450d00b3fa0e0fd82bc6af.png'
        },
        {
          name: 'Video',
          url: 'video.js',
          icon: 'http://img1.vued.vanthink.cn/vueda026977b63cd85ebbcc0309a2f592082.png'
        },
        {
          name: 'Profile',
          url: 'profile.js',
          icon: 'http://img1.vued.vanthink.cn/vued78336017bc3e794059a4fea0fe1450f9.png'
        }
      ]
    }
  },
  
  methods: {
    load() {
      console.log((new Date()).getTime() - d2);  
    }
  },
  
  created() {
    d2 = (new Date()).getTime();
    console.log(d2)
  }
};
</script>