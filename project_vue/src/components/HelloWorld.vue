<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ judul }}</h2>
    <input v-model="msg"><br>
    <button @click="gantijudul">Ganti Judul</button>
    <br><br>
    <input v-model = "x" type="" name="">
    <h1 v-if= "x % 2 === 0"> Ini angka genap</h1>
    <h1 v-else> Ini angka ganjil</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return{
      msg: 'ini aplikasi vue',
      judul: 'Ini pelajaran web',
      x: 2
    }
  },
mounted() {
  this.judul = "INI PELAJARAN WEB DINAMIS"
},
methods: {
  gantijudul(){
    this.judul = 'pelajaran web hehehe'
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
