import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
	reducerPath: "usersApi",
	baseQuery: fetchBaseQuery({
		baseUrl:
			"https://fitness-pro-dbd58-default-rtdb.europe-west1.firebasedatabase.app/",
	}),
	tagTypes: ["Progress", "Status", "Course"],
	endpoints: (build) => ({
		getUserById: build.query({
			query: (userId) => `users/${userId}.json`,
			providesTags: ["Status", "Course"],
		}),
		getUserProgress: build.query({
			query: (body) =>
				`users/${body.userId}/courses/${body.courseName}/workouts/${body.workoutId}/exercises.json`,
			providesTags: ["Progress"],
		}),
		setUserProgress: build.mutation({
			query: (body) => ({
				url: `users/${body.userId}/courses/${body.courseName}/workouts/${body.workoutId}/exercises.json`,
				method: "PATCH",
				body: body.progress,
			}),
			invalidatesTags: ["Progress"],
		}),
		setUserWorkoutCompleted: build.mutation({
			query: (body) => ({
				url: `users/${body.userId}/courses/${body.courseName}/workouts/${body.workoutId}.json`,
				method: "PATCH",
				body: body.completed,
			}),
			invalidatesTags: ["Status"],
		})
	}),
});

export const {
	useGetUserByIdQuery,
	useSetUserProgressMutation,
	useSetUserWorkoutCompletedMutation,
	useGetUserProgressQuery,
} = usersApi;
