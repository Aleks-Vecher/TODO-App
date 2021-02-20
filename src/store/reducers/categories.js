import { categoryReducer } from './category';
import subCategoryReducer from './subCategory';
import { todoReducer } from './todo';

const initialState = {
  categories: [],
  subCategories: [],
  todo: [],
};

const ADD_CATEGORY = 'ADD_CATEGORY';
const SHOW_TODO = 'SHOW_TODO';
const ADD_TODO = 'ADD_TODO';
const ADD_SUBCATEGORY = 'ADD_SUBCATEGORY';
const DELETE_CATEGORY = 'DELETE_CATEGORY';
const DELETE_SUBCATEGORY = 'DELETE_SUBCATEGORY';

export const addCategory = (nameCategory, id) => ({
  type: ADD_CATEGORY,
  payload: nameCategory,
  completed: false,
  id,
});

export const addSubCategory = (nameCategory, nameSubCategory, id) => ({
  type: ADD_SUBCATEGORY,
  payload: nameCategory,
  nameSubCategory,
  id,
});

export const showTodo = (nameCategory, id) => ({
  type: SHOW_TODO,
  payload: nameCategory,
  id,
});

export const deleteCategory = (id) => ({
  type: DELETE_CATEGORY,
  payload: id,
});

export const deleteSubCategory = (id, nameCategory) => ({
  type: DELETE_SUBCATEGORY,
  payload: id,
  nameCategory,
});

export const categoriesReducer = (state = initialState, action) => {
  const { categories } = state;
  switch (action.type) {
    case ADD_CATEGORY: {
      const nextCategories = categories.concat(
        categoryReducer(undefined, action),
      );
      return {
        ...state,
        categories: [...nextCategories],
      };
    }
    case ADD_SUBCATEGORY: {
      const nextCategory = Array.from(categories);
      nextCategory.forEach((item) => {
        const nextItem = item;
        if (action.payload === item.nameCategory) {
          nextItem.subCategory = nextItem.subCategory.concat(
            subCategoryReducer(undefined, action),
          );
          nextItem.subCategories = true;
        }
        return nextItem;
      });
      return {
        ...state,
        categories: [...nextCategory],
        subCategories: [
          ...state.subCategories,
          subCategoryReducer(undefined, action),
        ],
      };
    }
    case SHOW_TODO: {
      const nextCategory = Array.from(categories);
      nextCategory.forEach((category) => {
        const categoryNew = category;
        categoryNew.active = action.id === category.id && !category.active;
        if (categoryNew.subCategories) {
          categoryNew.subCategory.forEach((item) => {
            const nextSubCategory = item;
            nextSubCategory.active = action.id === item.id && !item.active;
            return nextSubCategory;
          });
        }
        return categoryNew;
      });
      return {
        ...state,
        categories: [...nextCategory],
      };
    }
    case ADD_TODO: {
      return {
        ...state,
        todo: [...state.todo, todoReducer(undefined, action)],
      };
    }
    case DELETE_CATEGORY: {
      const nextCategory = categories.filter(
        (item) => action.payload !== item.id,
      );
      return {
        ...state,
        categories: [...nextCategory],
      };
    }
    case DELETE_SUBCATEGORY: {
      const nextCategory = categories.map((item) => {
        if (item.nameCategory === action.nameCategory) {
          const nextSubCategory = item.subCategory.filter(
            (c) => action.payload !== c.id,
          );
          const nextItem = item;
          nextItem.subCategories = Boolean(nextSubCategory.length) && true;
          return {
            ...nextItem,
            subCategory: [...nextSubCategory],
          };
        }
        return item;
      });
      return {
        ...state,
        categories: [...nextCategory],
      };
    }
    default:
  }
  return state;
};
