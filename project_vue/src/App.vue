<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <router-link to="/siswa">Data Siswa</router-link>
    <router-link to="/kelas">Data Kelas</router-link>
    <router-view/> --> <!-- update data yg di klik -->
    <h1>{{ nama }}</h1>
    <h2>Nama: <input v-model="nama"><br></h2>
    <h2>Nilai Anda:&nbsp{{nilai}}</h2>
    <button @click="totalnilai">Click Me</button>
    <h2>1. siapakah nama pelatih persib ?</h2>
    <input type="radio" name="" v-model="soal1" value="JajangNurjaman">Jajang Nurjaman
    <input type="radio" name="" v-model="soal1" value="AgamLesmana">Agam Lesmana
    <input type="radio" name="" v-model="soal1" value="Wildansyah">Wildansyah
    <input type="radio" name="" v-model="soal1" value="Wakwaw">Wakwaw<br>
    <h2>2. Berapakah 1+3 ?</h2>
    <input type="radio" name="" v-model="soal2" value="10">10
    <input type="radio" name="" v-model="soal2" value="15">15
    <input type="radio" name="" v-model="soal2" value="20">20
    <input type="radio" name="" v-model="soal2" value="4">4<br>
    <h2>3. Qur'an Surat berapakah Surah Anisa ?</h2>
    <input type="radio" name="" v-model="soal3" value="17">17 
    <input type="radio" name="" v-model="soal3" value="4">4 
    <input type="radio" name="" v-model="soal3" value="15">15 
    <input type="radio" name="" v-model="soal3" value="31">31 <br>
  </div>
</template>

<script>
/*import HelloWorld from './components/HelloWorld.vue'*/

export default {
  name: 'app',
  data() {
    return{
      nama: '',
      nilai: 0,
      soal1: '',
      soal2: '',
      soal3: ''
      /*components: {
        HelloWorld
      }*/
    }
  },
methods: {
  totalnilai(){
    if(this.soal1 == 'JajangNurjaman' && this.soal2 == '4' && this.soal3 == '4') {
        this.nilai=+3
      }
      else if (this.soal1 == 'JajangNurjaman' && this.soal2 == '4') {
        this.nilai=+2
      }
      else if (this.soal1 == 'JajangNurjaman' && this.soal3 == '4') {
        this.nilai=+2
      }
      else if (this.soal2 == '4' && this.soal3 == '4') {
        this.nilai=+2
      }
      else if (this.soal1 == 'JajangNurjaman') {
        this.nilai=+1
      }
      else if (this.soal2 == '4') {
        this.nilai=+1
      }
      else if (this.soal3 == '4') {
        this.nilai=+1
      }
      else{
        this.nilai = 0
      }
  }
}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
