class MealPlanRepository {
    constructor() {
      // Initialize an empty array to hold meal plan objects
      this.mealPlans = [];
    }
  
    // Method to create a new meal plan
    createMealPlan(mealPlan) {
      this.mealPlans.push(mealPlan);
    }
  
    // Method to read a specific meal plan by ID
    readMealPlanById(mealPlanId) {
      return this.mealPlans.find((mealPlan) => mealPlan.id === mealPlanId);
    }
  
    // Method to read all meal plans
    readAllMealPlans() {
      return this.mealPlans;
    }
  
    // Method to update an existing meal plan
    updateMealPlan(mealPlan) {
      const index = this.mealPlans.findIndex((mp) => mp.id === mealPlan.id);
      if (index !== -1) {
        this.mealPlans[index] = mealPlan;
        return true;
      }
      return false;
    }
  
    // Method to delete a meal plan by ID
    deleteMealPlanById(mealPlanId) {
      const index = this.mealPlans.findIndex((mp) => mp.id === mealPlanId);
      if (index !== -1) {
        this.mealPlans.splice(index, 1);
        return true;
      }
      return false;
    }
  }
  