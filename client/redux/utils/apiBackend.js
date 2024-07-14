import axios from 'axios'

const axiosInstance = axios.create({
	baseURL:
		'http://c5e6a732-cc53-4137-a1e8-04915e54dbe9.pub.instances.scw.cloud:3000/api',
})

export default axiosInstance
