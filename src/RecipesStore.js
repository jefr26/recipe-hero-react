import {create} from "zustand"

const useRecipesStore = create((set) => ({
	recipes: [],
	fetchRecipes: async () => {
		await fetch('/recipes.json')
			.then(response => response.json())
			.then(data => set({ recipes: data.recipes }))
	},
	ingredientsList: new Set(),
	addIngredientsList: ingredient => {
		set(state => ({
			ingredientsList: state.ingredientsList.add(ingredient)
		}))
	},
	ingredientsFilter: [],
	addIngredient: ingredient => {
		set(state => ({
			ingredientsFilter: [
				...state.ingredientsFilter,
				ingredient,
			]		
		}))
	},
	removeIngredient: id => {
		set(state => ({
			ingredientsFilter: state.ingredientsFilter.filter(ingredient => ingredient.id !== id),
		}))
	}
}))

export {useRecipesStore}