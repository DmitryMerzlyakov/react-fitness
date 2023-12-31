import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coursesApi = createApi({
	reducerPath: "coursesApi",
	baseQuery: fetchBaseQuery({
		baseUrl:
			'https://fitness-pro-dbd58-default-rtdb.europe-west1.firebasedatabase.app/',
	}),
	endpoints: (build) => ({
		getCourses: build.query({
			query: () => 'courses.json',
		}),
		getCourseByName: build.query({
			query: (name) => `courses/${name}.json`,
		}),
	}),
});

export const {
	useGetCoursesQuery,
	useGetCourseByNameQuery
} = coursesApi;
