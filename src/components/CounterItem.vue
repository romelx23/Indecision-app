<template>
  <h2 class="counter">{{customTitle||'Counter'}}</h2>
  <p class="operation">{{count}}<sup>2</sup>={{squareCounter}} </p>
  <p data-testid="counter" class="operation">{{count}}</p>
  <div class="container-btn">
    <button data-btn="increase" class="btn" @click="increment">+1</button>
    <button data-btn="decrease" class="btn" @click="decrement">-1</button>
  </div>
</template>

<script>

export default {
  name: 'CounterItem',
  props: {
    title: {
      type: String,
      default: 'Counter',
      required: true
    },
    start: {
      type: Number,
      default: 10,
      required: true,
      validator: function (value) {
        return value >= 0
      }
    }
  },
  data () {
    return {
      count: this.start
    }
  },
  methods: {
    increment () {
      this.count++
    },
    decrement () {
      this.count--
    },
    getSquareValue () {
      // console.log('getValue')
      return this.count * this.count
    }
  },
  computed: {
    squareCounter () {
      // console.log('computer squareCounter')
      return this.count * this.count
    },
    customTitle () {
      if (this.title !== undefined) {
        return this.title
      } else {
        return 'Counter'
      }
    }
  }
}
</script>

<style>
.operation{
  font-size: 1.5rem;
  color: #fff;
  font-weight: bold;
}
.container-btn{

}
.btn {
  background: #4caf50;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  margin: 2px;
}
</style>
