class RecipeRepository {
    constructor() {
      // Initialize an empty array to hold recipe objects
      this.recipes = [];
    }
  
    // Method to create a new recipe
    createRecipe(recipe) {
      this.recipes.push(recipe);
    }
  
    // Method to read a specific recipe by ID
    readRecipeById(recipeId) {
      return this.recipes.find((recipe) => recipe.id === recipeId);
    }
  
    // Method to read all recipes
    readAllRecipes() {
      return this.recipes;
    }
  
    // Method to update an existing recipe
    updateRecipe(recipe) {
      const index = this.recipes.findIndex((r) => r.id === recipe.id);
      if (index !== -1) {
        this.recipes[index] = recipe;
        return true;
      }
      return false;
    }
  
    // Method to delete a recipe by ID
    deleteRecipeById(recipeId) {
      const index = this.recipes.findIndex((r) => r.id === recipeId);
      if (index !== -1) {
        this.recipes.splice(index, 1);
        return true;
      }
      return false;
    }
  }
  
  module.exports = RecipeRepository;
  