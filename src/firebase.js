import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyCBHpBShMUOAe9_YsMy0Ip8Hk3cf0Mk4fg',
	authDomain: 'fitness-pro-dbd58.firebaseapp.com',
	databaseURL: 'https://fitness-pro-dbd58-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'fitness-pro-dbd58',
	storageBucket: 'fitness-pro-dbd58.appspot.com',
	messagingSenderId: '19491172376',
	appId: '1:19491172376:web:166e7eb17278a8db46936d'
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
