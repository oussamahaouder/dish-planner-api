class RecipeService {
    constructor(recipeRepository) {
      this.recipeRepository = recipeRepository;
    }
  
    async createRecipe(recipe) {
      return await this.recipeRepository.create(recipe);
    }
  
    async getRecipeById(id) {
      return await this.recipeRepository.getById(id);
    }
  
    async getAllRecipes() {
      return await this.recipeRepository.getAll();
    }
  
    async updateRecipe(recipe) {
      return await this.recipeRepository.update(recipe);
    }
  
    async deleteRecipeById(id) {
      return await this.recipeRepository.deleteById(id);
    }
  }
  
  module.exports = RecipeService;
  