class MealPlanService {
    constructor(mealPlanRepository) {
      this.mealPlanRepository = mealPlanRepository;
    }
  
    async createMealPlan(mealPlan) {
      return await this.mealPlanRepository.create(mealPlan);
    }
  
    async getMealPlanById(id) {
      return await this.mealPlanRepository.getById(id);
    }
  
    async getAllMealPlans() {
      return await this.mealPlanRepository.getAll();
    }
  
    async updateMealPlan(mealPlan) {
      return await this.mealPlanRepository.update(mealPlan);
    }
  
    async deleteMealPlanById(id) {
      return await this.mealPlanRepository.deleteById(id);
    }
  }
  
  module.exports = MealPlanService;

  