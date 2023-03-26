const express = require('express');
const router = express.Router();

const RecipeController = require('./controllers/recipeController');
const MealPlanController = require('./controllers/mealPlanController');

// Recipe routes
router.get('/recipes', RecipeController.getAllRecipes);
router.get('/recipes/:id', RecipeController.getRecipeById);
router.post('/recipes', RecipeController.createRecipe);
router.put('/recipes/:id', RecipeController.updateRecipe);
router.delete('/recipes/:id', RecipeController.deleteRecipe);

// Meal Plan routes
router.get('/meal-plans', MealPlanController.getAllMealPlans);
router.get('/meal-plans/:id', MealPlanController.getMealPlanById);
router.post('/meal-plans', MealPlanController.createMealPlan);
router.put('/meal-plans/:id', MealPlanController.updateMealPlan);
router.delete('/meal-plans/:id', MealPlanController.deleteMealPlan);

module.exports = router;