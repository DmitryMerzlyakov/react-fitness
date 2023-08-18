export const userData = (uid) => {
	return {
		userId: uid,
		data: {
			courses: { 
				bodyflex: {
					courseNameRu: "Бодифлекс", //нужно bf1 bf2 и тд добавить в поле workouts
					workouts: {
						bf1: {
							name: "Техника дыхания",
							exercises: {
								bf1e1: 100,
								bf1e2: 70,
								bf1e3: 0,
							},
						},
						bf2: {
							name: "Тренировка мышц бедер",
							exercises: {
								bf2e1: 0,
								bf2e2: 0,
								bf2e3: 0,
							},
						},
						bf3: {
							name: "Тренировка мышц ягодиц",
							exercises: {
								bf3e1: 0,
								bf3e2: 0,
								bf3e3: 0,
							},
						},
					},
				}
			}
		}
	}
}
