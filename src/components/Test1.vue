<template>
  <div>
    <div id="main">
      <img
        src="../assets/image/video.png"
        alt=""
        @mousedown.prevent="down"
        @mouseup="up"
        @mousemove="move"
      />
      <div
        class="mask"
        :style="{ width: widthX + 'px', height: heightY + 'px', top: maskTop + 'px', left: maskLeft + 'px' }"
        @mouseup="up"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Test1",
  data() {
    return {
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0,
      flag: false,
      widthX: 0,
      heightY: 0,
      maskTop: 0,
      maskLeft: 0
    };
  },
  methods: {
    down(e) {
      console.log(e);
      this.widthX = 0;
      this.heightY = 0;
      this.startX = e.offsetX;
      this.startY = e.offsetY;
      console.log(this.startY, this.startX);
      this.maskTop = e.offsetY;
      this.maskLeft = e.offsetX;
      this.flag = true;

    },
    up(e) {
    //   this.endX = e.offsetX;
    //   this.endY = e.offsetY;
      this.flag = false;
      console.log(this.widthX, this.maskLeft, this.maskTop)
    },
    move(e) {
      var vm = this;
      if (this.flag) {
        console.log(this.flag);
        this.endX = e.offsetX;
        this.endY = e.offsetY;
        // console.log(this.endX, this.endY);
        vm.show();
      }
    },
    show() {
      var vm = this;
      this.widthX = this.endX - this.startX ;
      this.heightY = this.endY - this.startY ;
      if (vm.widthX > vm.heightY) {
          vm.widthX = vm.heightY;
        //   vm.heightY = vm.widthX;
      } else {
          vm.heightY = vm.widthX;
        //   vm.widthX = vm.heightY;
      }
    },
  },
};
</script>
<style lang="less" scoped>
#main {
  width: 600px;
  height: 500px;
  margin: 100px;
    position: relative;
  img {
    max-width: 100%;
    cursor: crosshair;
    position: absolute;
  }
  .mask {
    position: absolute;
    width: 100px;
    height: 100px;
    margin: 0;
    padding: 0;
    border: 1px dashed #eee;
    background-color: #aaa;
    z-index: 1000;
    opacity: 0.6;
    // display: none;
    float: left;
    // max-width: 100%;
    // max-height: 100%;
  }
}
</style>