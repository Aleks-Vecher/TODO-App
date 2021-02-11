// import { createSelector } from 'reselect';

const getCategories = (state) => state.data.categories;

export const checkCategoryStatus = (categories) => {
  const newStateCategory = categories;
  let tempValue = false;
  let newCategory;
  /* eslint-disable-next-line */
  for (const category of newStateCategory) {
    if (!category.subCategory.length) {
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

export default getCategories;
