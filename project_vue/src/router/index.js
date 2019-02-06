import Vue from 'vue'
import Router from 'vue-router'
import Siswa from '@/components/Siswa'
import Kelas from '@/components/Kelas'

Vue.use(Router)

export default new Router ({
	routes: [
	{
		path: '/Siswa',
		name: 'Siswa',
		component: Siswa
	},
	{
		path: '/Kelas',
		name: 'Kelas',
		component: Kelas
	}]
})