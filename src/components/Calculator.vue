<template>
  <div class="content"
  @keydown="click"
  @keydown.enter="equal()" 
  tabindex="0">
    <div class="calculatorBody">
      <div class="showValue">
        <p>{{ display | currency }}</p>
      </div>
      <div class="btnGroup">
        <div class="btnGroup_negative btnGroup_operator" @click="display = display*-1">
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
        <div class="btnGroup_division btnGroup_operator" @click="expression('/')">
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
        <div class="btnGroup_multiplication btnGroup_operator" @click="expression('*')">
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
        <div class="btnGroup_subtraction btnGroup_operator" @click="expression('-')">
          <p>-</p>
        </div>
        <div class="btnGroup_0 btnGroup_number" @click="counter('0')">
          <p>0</p>
        </div>
        <div class="btnGroup_point btnGroup_number" @click="point()">
          <p>.</p>
        </div>
        <div class="btnGroup_equals btnGroup_operator" @click="equal()">
          <p>=</p>
        </div>
        <div class="btnGroup_addition btnGroup_operator" @click="expression('+')">
          <p>+</p>
        </div>
      </div>
    </div>
  </div>
  <!-- 
  運算式 expression 算式
  運算子 operator +-*/
  運算元 operand 123
  -->
</template>




<script>
export default {

  
  data() {
    return {
      display: '0',
      beforeDisplay: '',
      operator: '',
      beforeOperator: '',
      enter: false,
    } 
  },

  methods:{
    counter(number) {
      if (this.ente == true){ //處理按=後接運算元 取消所有運算回復成0
        this.display = '0'
        this.enter = false
      }

      if (this.operator != ''){
        this.beforeDisplay = this.display
        this.beforeOperator = this.operator
        this.display = ''
        this.operator = ''
        this.display += number
      }
      else {
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
      }
    },

    expression(operatorBtn){
      if (this.enter == true){ //處理按=後接運算子
        this.enter = false
      }
      
      if (this.beforeOperator == ''){
        this.operator = operatorBtn
      }
      else {
        this.calculation()
        // this.display = calculation(this.display, parseFloat(this.beforeDisplay), parseFloat(this.display));
        this.beforeDisplay = ''
        this.beforeOperator = ''
        this.operator = operatorBtn
      }
    },
    
    point() {
      if (this.enter==true){ //處理按=後按. 取消所有運算回復成0+.
        this.display = '0'
        this.enter = false
      }

      if (this.operator != ''){ //按運算子後按. 變成0+.
        this.beforeDisplay = this.display
        this.beforeOperator = this.operator
        this.display = '0'
        this.operator = ''
      }

      if (this.display.indexOf('.') == -1){ //檢查display是否有.，若沒有則+上.
        this.display += '.';
      }
    },

    clear() {
      this.display= '0'
      this.beforeDisplay= ''
      this.operator= ''
      this.beforeOperator= ''
      this.enter= false
    },

    backspace() {
      if (this.operator == '' && this.enter == false) { //不可清除讓運算的結果
        this.display = this.display.slice(0,-1); //刪除最後一個字
      }
      if (this.display == ''){ //若刪除後=0則顯示0
          this.display = '0';
        }
    },

    percent() {
      if (this.enter == true){ //處理按=後接運算子
        this.enter = false
      }

      let displayValue = parseFloat(this.display) //將display轉成數字，若是用parseInt會把小數轉成整數
      this.display = displayValue * 0.01
    },

    equal() {      
      if (this.beforeOperator !='') {
        this.calculation()
        // this.display = calculation(this.display, parseFloat(this.display), parseFloat(this.beforeDisplay));
        this.beforeDisplay = ''
        this.operator = ''
        this.beforeOperator = ''
        this.enter = true
      }
    },
    calculation(){
      // function NumberAdd(arg1, arg2) { //vue處理+浮點數問題
      //   var r1, r2, m, n;
      //   try {
      //     r1 = arg1.toString().split(".")[1].length
      //   } catch (e) {
      //     r1 = 0
      //   }
      //   try {
      //     r2 = arg2.toString().split(".")[1].length
      //   } catch (e) { 
      //     r2 = 0 
      //   } 
      //   m = Math.pow(10, Math.max(r1, r2))
      //   n = (r1 >= r2) ? r1 : r2;
      //   return ((arg1 * m + arg2 * m) / m).toFixed(n);
      // }

      // function NumberSub(arg1, arg2) { //vue處理-浮點數問題
      //   var re1, re2, m, n;
      //   try {
      //     re1 = arg1.toString().split(".")[1].length;
      //   } catch (e) {
      //   re1 = 0;
      //   }
      //   try {
      //     re2 = arg2.toString().split(".")[1].length;
      //   } catch (e) {
      //   re2 = 0;
      //   }
      //   m = Math.pow(10, Math.max(re1, re2)); 
      //   n = (re1 >= re2) ? re1 : re2;
      //   return ((arg1 * m - arg2 * m) / m).toFixed(n);
      // }

      // function NumberMul(arg1, arg2) { //vue處理*浮點數問題
      //   var m = 0;
      //   var s1 = arg1.toString();
      //   var s2 = arg2.toString();
      //   try {
      //     m += s1.split(".")[1].length;
      //   } catch (e) {console.log()}
      //   try {
      //     m += s2.split(".")[1].length;
      //   } catch (e) {console.log()}
      //   return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
      // }

      // function NumberDiv(arg1,arg2,digit){ //vue處理/浮點數問題
      //   var t1=0,t2=0,r1,r2;
      //   try{t1=arg1.toString().split(".")[1].length}catch(e){console.log()}
      //   try{t2=arg2.toString().split(".")[1].length}catch(e){console.log()}
      //   r1=Number(arg1.toString().replace(".",""))
      //   r2=Number(arg2.toString().replace(".",""))
      //   //获取小数点后的计算值
      //   var result= ((r1/r2)*Math.pow(10,t2-t1)).toString()
      //   var result2=result.split(".")[1];
      //   result2=result2.substring(0,digit>result2.length?result2.length:digit);
      //   return Number(result.split(".")[0]+"."+result2);
      // }
      

      let b = parseFloat(this.beforeDisplay)
      let c = parseFloat(this.display)
      switch (this.beforeOperator){
        case '+':
          this.display = this.$math.add(b,c);
          break;
        case '-':
          this.display = this.$math.subtract(b, c);
          break;
        case '*':
          this.display = this.$math.multiply(b, c);
          break;
        case '/':
        this.display = this.$math.divide(b, c);
          break;
      }
      this.display = this.display.toString()
      return this.display
    },

    click(e){ //鍵盤事件
      switch (e.keyCode) {
        case 48:
        case 96:
          this.counter('0');
          break;

        case 49:
        case 97:
          this.counter('1');
          break;

        case 50:
        case 98:
          this.counter('2');
          break;

        case 51:
        case 99:
          this.counter('3');
          break;

        case 52:
        case 100:
          this.counter('4');
          break;

        case 53:
        case 101:
          this.counter('5');
          break;

        case 54:
        case 102:
          this.counter('6');
          break;

        case 55:
        case 103:
          this.counter('7');
          break;

        case 56:
        case 104:
          this.counter('8');
          break;

        case 57:
        case 105:
          this.counter('9');
          break;

        case 107:
        case 187:
          this.expression('+');
          break;

        case 109:
        case 189:
          this.expression('-');
          break;

        case 106:
          this.expression('*');
          break;

        case 111:
        case 220:
          this.expression('/');
          break;

        case 110:
        case 190:
          this.point();
          break;

        case 8:
          this.backspace();
          break;

        case 46:
          this.clear();
          break;
      }
    }
  },
  filters:{ //加上千分位
    currency(display){
      display.toString()
      return display.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
    },
  }

};
</script>

<style src="./Calculator.css"></style>
