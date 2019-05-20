import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID ca3fa93533967b239023b82239101200cc803706499c3ac1deca4b04a771bac7'
	}
});