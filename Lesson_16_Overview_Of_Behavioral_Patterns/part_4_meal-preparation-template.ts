abstract class Meal {
    // Template Method
    cook(): void {
        this.prepareIngredients();
        this.cookMeal();
        this.serve();
    }

    protected abstract prepareIngredients(): void;
    protected abstract cookMeal(): void;

    private serve(): void {
        console.log("Serving meal.");
    }
}

class PastaMeal extends Meal {
    protected prepareIngredients(): void {
        console.log("Preparing pasta and sauce.");
    }

    protected cookMeal(): void {
        console.log("Cooking pasta.");
    }
}

// Client code
const dinner = new PastaMeal();
dinner.cook();
// Output: Preparing pasta and sauce.
//         Cooking pasta.
//         Serving meal.
