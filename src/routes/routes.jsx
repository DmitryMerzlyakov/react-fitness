import { Routes, Route } from 'react-router-dom'
import { Main } from '../pages/Main'
import { Profile } from '../pages/Profile'
import { Course } from '../pages/Course'
import { Workout } from '../pages/Workout'
import { Auth } from '../pages/Auth'
import { Error } from '../pages/Error'
import ProtectedRoute from './ProtectedRoute'

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Main />} />

			<Route path='/login' element={<Auth login='true' />} />
			<Route path='/registration' element={<Auth />} />

			<Route path='/course/:name' element={<Course />} />

			<Route element={<ProtectedRoute />}>
				<Route path='/profile' element={<Profile />} />
				<Route path='/workout' element={<Workout />} />
			</Route>
			<Route path="*" element={<Error />} />
		</Routes>
	)
}

export default AppRoutes
