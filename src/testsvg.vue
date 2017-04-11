<template>
<div class="page">
  <div class="footer">
    <div class="footer-item">
      <svg class="footer-item-icon" view-box="0 0 64 64">
        <polygon fill="none" stroke="#000000" stroke-width="2" points="32,3 2,33 11,33 11,63 23,63 23,47 39,47 
	39,63 51,63 51,33 62,33 "/>
      </svg>
    </div>
    <div class="footer-item">
      <svg class="footer-item-icon" view-box="0 0 64 64">
        <circle fill="none" stroke="#000000" stroke-width="2" cx="20" cy="57" r="6"/>
        <circle fill="none" stroke="#000000" stroke-width="2" cx="44" cy="57" r="6"/>
        <line fill="none" stroke="#000000" stroke-width="2" x1="26" y1="57" x2="38" y2="57"/>
        <polyline fill="none" stroke="#000000" stroke-width="2" points="14,57 10,2 0,2 "/>
        <polyline fill="none" stroke="#000000" stroke-width="2" points="13,43 56,40 63,10 11,10 "/>
        <polyline fill="none" stroke="#000000" stroke-width="2" points="27,24 34,31 47,18 "/>
      </svg>
    </div>
    <div class="footer-item">
      <svg class="footer-item-icon" view-box="0 0 64 64">
        <polygon fill="none" stroke="#000000" stroke-width="2" points="27,21 41,32 
		27,43 	"/>
	     <path fill="none" stroke="#000000" stroke-width="2" d="M53.92,10.081
		c12.107,12.105,12.107,31.732,0,43.838c-12.106,12.108-31.734,12.108-43.839,0c-12.107-12.105-12.107-31.732,0-43.838
		C22.186-2.027,41.813-2.027,53.92,10.081z"/>
      </svg>
    </div>
    <div class="footer-item">
      <svg class="footer-item-icon" view-box="0 0 64 64">
        <polygon fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" points="32,47 12,62 20,38 2,24 24,24 32,1 40,24 
	62,24 44,38 52,62 "/>
      </svg>
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
  }
};
</script>