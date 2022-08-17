export interface Recipe {
  name?: string;
  ingredients?: string[];
  overview?: string;
  instructions?: string[];
  category?: string;
  prepTime?: string;
  cookTime?: string;
  totalTime?: string;
  servings?: string;
  calories?: string;
  loe?: string;
  dishType?: string;
  famFav?: boolean;
  freeToSee?: boolean;
  recipID?: string;
  rating?: string;
  sideNotes?: string[];
  creditTo?: string;
}

export interface FavoriteMeals {
  name?: string;
  recipID?: string;
  userID?: string;
}
