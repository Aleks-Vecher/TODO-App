import { categoryReducer } from './category';
import subCategoryReducer from './subCategory';

const initialState = {
  categories: [],
  subCategories: [],
  deleted: [],
};

const ADD_CATEGORY = 'ADD_CATEGORY';
const SHOW_TODO = 'SHOW_TODO';
const ADD_SUBCATEGORY = 'ADD_SUBCATEGORY';
const DELETE_CATEGORY = 'DELETE_CATEGORY';
const DELETE_SUBCATEGORY = 'DELETE_SUBCATEGORY';
const EDIT_NAME_CATEGORY = 'EDIT_NAME_CATEGORY';
const EDIT_NAME_SUBCATEGORY = 'EDIT_NAME_SUBCATEGORY';

export const addCategory = (nameCategory, id) => ({
  type: ADD_CATEGORY,
  payload: {
    nameCategory,
    id,
  },
});

export const addSubCategory = (nameCategory, nameSubCategory, id) => ({
  type: ADD_SUBCATEGORY,
  payload: {
    nameCategory,
    nameSubCategory,
    id,
  },
});

export const showTodo = (nameCategory, id) => ({
  type: SHOW_TODO,
  payload: {
    nameCategory,
    id,
  },
});

export const deleteCategory = (id) => ({
  type: DELETE_CATEGORY,
  payload: id,
});

export const deleteSubCategory = (id, nameCategory) => ({
  type: DELETE_SUBCATEGORY,
  payload: {
    id,
    nameCategory,
  },
});

export const editNameCategory = (name, id) => ({
  type: EDIT_NAME_CATEGORY,
  payload: {
    name,
    id,
  },
});
export const editNameSubCategory = (name, id) => ({
  type: EDIT_NAME_SUBCATEGORY,
  payload: {
    name,
    id,
  },
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
        if (action.payload.nameCategory === item.nameCategory) {
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
        categoryNew.active =
          action.payload.id === category.id && !category.active;
        if (categoryNew.subCategories) {
          categoryNew.subCategory.forEach((item) => {
            const nextSubCategory = item;
            nextSubCategory.active =
              action.payload.id === item.id && !item.active;
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
    case DELETE_CATEGORY: {
      const nextCategory = categories.filter(
        (item) => action.payload !== item.id,
      );
      const nextDeleted = categories.reduce((acc, item) => {
        if (action.payload === item.id && item.subCategories) {
          const nextItem = item.subCategory.map((c) => c.id);
          return [...acc, ...nextItem];
        }
        return acc;
      }, []);
      return {
        ...state,
        categories: [...nextCategory],
        deleted: [...nextDeleted],
      };
    }
    case DELETE_SUBCATEGORY: {
      const nextCategory = categories.map((item) => {
        if (item.nameCategory === action.payload.nameCategory) {
          const nextSubCategory = item.subCategory.filter(
            (c) => action.payload.id !== c.id,
          );
          const nextItem = item;
          nextItem.subCategories = !!nextSubCategory.length && true;
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
    case EDIT_NAME_CATEGORY: {
      return {
        ...state,
        categories: categories.map((item) => {
          if (item.id === action.payload.id) {
            const nextItem = item;
            nextItem.nameCategory = action.payload.name;
            return {
              ...nextItem,
              subCategory: nextItem.subCategory.map((c) => {
                const nextC = c;
                nextC.category = action.payload.name;
                return nextC;
              }),
            };
          }
          return item;
        }),
      };
    }
    case EDIT_NAME_SUBCATEGORY: {
      return {
        ...state,
        categories: categories.map((item) => {
          if (item.subCategory.length) {
            item.subCategory.map((c) => {
              const nextC = c;
              if (nextC.id === action.payload.id) {
                nextC.nameSubCategory = action.payload.name;
              }
              return nextC;
            });
          }
          return item;
        }),
      };
    }
    default:
  }
  return state;
};
