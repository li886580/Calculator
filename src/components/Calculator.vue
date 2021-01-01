<template>
  <div class="content">
    <div class="calculatorBody">
      <div class="showValue">
        <p>{{ display }}</p>
      </div>
      <div class="btnGroup">
        <div class="btnGroup_negative btnGroup_operator">
          <p>+/-</p>
        </div>
        <div class="btnGroup_percent btnGroup_operator" @click="percent()">
          <p>%</p>
        </div>
        <div class="btnGroup_clear btnGroup_number" @click="clear()">
          <p>C</p>
        </div>
        <div class="btnGroup_backspace btnGroup_operator" @click="backspace()">
          <p>◄</p>
        </div>
        <div class="btnGroup_7 btnGroup_number" @click="counter('7')">
          <p>7</p>
        </div>
        <div class="btnGroup_8 btnGroup_number" @click="counter('8')">
          <p>8</p>
        </div>
        <div class="btnGroup_9 btnGroup_number" @click="counter('9')">
          <p>9</p>
        </div>
        <div class="btnGroup_division btnGroup_operator">
          <p>/</p>
        </div>
        <div class="btnGroup_4 btnGroup_number" @click="counter('4')">
          <p>4</p>
        </div>
        <div class="btnGroup_5 btnGroup_number" @click="counter('5')">
          <p>5</p>
        </div>
        <div class="btnGroup_6 btnGroup_number" @click="counter('6')">
          <p>6</p>
        </div>
        <div class="btnGroup_multiplication btnGroup_operator">
          <p>*</p>
        </div>
        <div class="btnGroup_1 btnGroup_number" @click="counter('1')">
          <p>1</p>
        </div>
        <div class="btnGroup_2 btnGroup_number" @click="counter('2')">
          <p>2</p>
        </div>
        <div class="btnGroup_3 btnGroup_number" @click="counter('3')">
          <p>3</p>
        </div>
        <div class="btnGroup_subtraction btnGroup_operator">
          <p>-</p>
        </div>
        <div class="btnGroup_0 btnGroup_number" @click="counter('0')">
          <p>0</p>
        </div>
        <div class="btnGroup_point btnGroup_number" @click="point()">
          <p>.</p>
        </div>
        <div class="btnGroup_equals btnGroup_operator">
          <p>=</p>
        </div>
        <div class="btnGroup_addition btnGroup_operator">
          <p>+</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: '0',
    } 
  },

  methods:{
    counter(number) {
      if (this.display == '0'){ //若display為0則直接取代0，反之則+上字串
        this.display = number; 
      }
      else {
        this.display += number;
      }
    //或是可以用這種判斷式和連接字串的方法
    // counter(number) {
    //   this.display = (this.display === 0) ? `${number}` : `${this.display}${number}`
    // },
    },
    
    point() {
      if (this.display.indexOf('.') == -1){ //檢查display是否有.，若沒有則+上.
        this.display += '.';
      }
    },

    clear() {
      this.display ='0' //清空display
    },

    backspace() {
      this.display = this.display.slice(0,-1); //刪除最後一個字
      if (this.display == ''){ //若刪除後=0則顯示0
          this.display = 0;
        }
      },

    percent() {
      parseInt(this.display)
      this.display *= 0.01
    }

    },
};
</script>

<style src="./Calculator.css"></style>
