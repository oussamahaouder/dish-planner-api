// User entity
class User {
    constructor(id, name, email, password) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.password = password;
    }
  }
  
  // Recipe entity
  class Recipe {
    constructor(id, title, description, ingredients, instructions) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.ingredients = ingredients;
      this.instructions = instructions;
    }
  }
  
  // MealPlan entity
  class MealPlan {
    constructor(id, title, startDate, endDate, meals) {
      this.id = id;
      this.title = title;
      this.startDate = startDate;
      this.endDate = endDate;
      this.meals = meals;
    }
  }
  
  // Meal entity
  class Meal {
    constructor(id, date, time, recipe) {
      this.id = id;
      this.date = date;
      this.time = time;
      this.recipe = recipe;
    }
  }
  
  // Ingredient entity
  class Ingredient {
    constructor(id, name, amount, unitOfMeasurement) {
      this.id = id;
      this.name = name;
      this.amount = amount;
      this.unitOfMeasurement = unitOfMeasurement;
    }
  }
  
  module.exports = {
    User,
    Recipe,
    MealPlan,
    Meal,
    Ingredient
  };