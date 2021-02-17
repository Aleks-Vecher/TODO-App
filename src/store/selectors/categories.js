// import { createSelector } from 'reselect';

export const getCategories = (state) => state.data.categories;
export const getSubCategories = (state) => state.data.subCategories;

export const checkCategoryStatus = (categories) => {
  const newStateCategory = categories;
  let tempValue = false;
  let newCategory;
  /* eslint-disable-next-line */
  for (const category of newStateCategory) {
    if (category.subCategory.length) {
      /* eslint-disable-next-line */
      for (const subCategory of category.subCategory) {
        if (subCategory.active) {
          tempValue = true;
          newCategory = subCategory;
        }
      }
    }
    if (tempValue) break;
    if (category.active) {
      tempValue = true;
      newCategory = category;
    }
  }
  return tempValue ? newCategory : null;
};
