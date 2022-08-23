<!-- eslint-disable no-useless-return -->
<script>
export default {
  data () {
    return {
      question: '',
      answer: null,
      image: '',
      isValidQuestion: false
    }
  },
  methods: {
    async getAnswer () {
      this.answer = 'Pensando...'
      const response = await fetch('https://yesno.wtf/api')
      const { answer, image } = await response.json()
      this.answer = answer
      this.image = image
    //   console.log(answer, image)
    }
  },
  watch: {
    question (value, oldValue) {
      try {
        this.isValidQuestion = false
        console.log({ value })
        //   console.log(value.includes('?'))
        if (!value.includes('?')) return
        //   TODO realizar la peticion
        this.getAnswer()
        this.isValidQuestion = true
      } catch (error) {
        console.log('IndecisionPage', error)
        // eslint-disable-next-line no-unused-expressions
        this.answer = 'No se pudo cargar del API'
        this.image = null
      }
    }
  }
}
</script>

<template>
  <img v-if="image" alt="Vue logo" :src="image" />
  <div class="bg-dark"></div>
  <div class="container">
    <div class="indecision-container">
      <input
      v-model="question"
      type="text"
      placeholder="Hazme una pregunta"
      />
      <p>Recuerda terminar con un sgino de interrogación (?)</p>
    </div>
    <div class="respuesta">
      <h2 v-if="isValidQuestion">{{question}}</h2>
      <h1>{{
        answer==="yes"?
        "Si"
        :answer==="no"?
        "No"
        :answer==="maybe"?
        "Tal vez"
        :answer==="Pensando..."?
        "Pensando..."
        :"Pensando..."
        }}</h1>
    </div>
  </div>
</template>

<style scoped>
body {
  position: relative;
}

h1 {
  margin: 0;
  padding: 0;
}
h2{
    font-size: 1.5rem;
}
img {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 0;
}

p {
  font-size: 1.2rem;
}

.bg-dark {
  /* overlay */
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 1;
  background: rgba(0, 0, 0, 0.4);
}

.indecision-container {
  padding: 30px 0;
}

.container {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.respuesta {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

input {
  width: 90%;
  padding: 15px;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}
</style>
