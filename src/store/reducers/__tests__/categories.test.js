import deepFreeze from 'deep-freeze';
import {
  categoriesReducer,
  ADD_CATEGORY,
  ADD_SUBCATEGORY,
  SHOW_TODO,
  DELETE_CATEGORY,
  DELETE_SUBCATEGORY,
  EDIT_NAME_CATEGORY,
  EDIT_NAME_SUBCATEGORY,
} from '../categories';

describe('categories Reducer', () => {
  it('ADD_CATEGORY success', () => {
    const state = {
      categories: [],
    };
    const action = {
      type: ADD_CATEGORY,
      payload: {
        nameCategory: 'testName',
        id: Date.now(),
      },
    };
    deepFreeze(state);
    deepFreeze(action);
    expect(categoriesReducer(state, action)).toEqual({
      categories: [
        {
          active: false,
          subCategory: [],
          subCategories: false,
          nameCategory: 'testName',
          id: action.payload.id,
        },
      ],
    });
  });
  it('ADD_SUBCATEGORY success', () => {
    const state = {
      categories: [
        {
          active: false,
          subCategory: [],
          subCategories: false,
          nameCategory: 'testCategory',
          id: 5,
        },
      ],
    };
    const action = {
      type: ADD_SUBCATEGORY,
      payload: {
        idCategory: 5,
        nameCategory: 'TestCategory',
        nameSubCategory: 'TestSubCategory',
        id: Date.now(),
      },
    };
    expect(categoriesReducer(state, action)).toEqual({
      categories: [
        {
          active: false,
          subCategory: [
            {
              active: false,
              completed: false,
              id: action.payload.id,
              category: action.payload.nameCategory,
              nameSubCategory: action.payload.nameSubCategory,
            },
          ],
          subCategories: true,
          nameCategory: 'testCategory',
          id: 5,
        },
      ],
    });
  });
  it('SHOW_TODO with subcategories false success', () => {
    const state = {
      categories: [
        {
          active: false,
          subCategories: false,
          id: Date.now(),
        },
      ],
    };
    const action = {
      type: SHOW_TODO,
      payload: {
        id: Date.now(),
      },
    };
    expect(categoriesReducer(state, action)).toEqual({
      categories: [
        {
          active: true,
          subCategories: false,
          id: action.payload.id,
        },
      ],
    });
  });

  it('SHOW_TODO with subcategories true success', () => {
    const state = {
      categories: [
        {
          active: false,
          subCategory: [
            {
              active: false,
              id: Date.now(),
            },
          ],
          subCategories: true,
          id: Date.now() - 1,
        },
      ],
    };
    const action = {
      type: SHOW_TODO,
      payload: {
        id: Date.now(),
      },
    };
    expect(categoriesReducer(state, action)).toEqual({
      categories: [
        {
          active: false,
          subCategory: [
            {
              active: true,
              id: action.payload.id,
            },
          ],
          subCategories: true,
          id: action.payload.id - 1,
        },
      ],
    });
  });
  it('DELETE_CATEGORY success', () => {
    const state = {
      categories: [
        {
          id: Date.now(),
        },
      ],
    };
    const action = {
      type: DELETE_CATEGORY,
      payload: Date.now(),
    };
    expect(categoriesReducer(state, action).categories.length).toBe(0);
  });
  it('DELETE_CATEGORY with subcategories id success', () => {
    const state = {
      categories: [
        {
          id: Date.now(),
          subCategories: true,
          subCategory: [
            {
              id: Date.now(),
            },
            {
              id: Date.now(),
            },
          ],
        },
      ],
      deleted: [],
    };
    const action = {
      type: DELETE_CATEGORY,
      payload: Date.now(),
    };
    expect(categoriesReducer(state, action).deleted).toEqual([
      state.categories[0].subCategory[0].id,
      state.categories[0].subCategory[1].id,
    ]);
  });

  it('DELETE_SUBCATEGORY with one subCategory success', () => {
    const state = {
      categories: [
        {
          subCategory: [
            {
              id: Date.now(),
              nameCategory: 'testCategory',
            },
          ],
          nameCategory: 'testCategory',
          subCategories: true,
        },
      ],
    };
    const action = {
      type: DELETE_SUBCATEGORY,
      payload: {
        id: Date.now(),
        nameCategory: 'testCategory',
      },
    };
    expect(
      categoriesReducer(state, action).categories[0].subCategory.length,
    ).toBe(0);
  });
  it('DELETE_SUBCATEGORY with one sub and change subCategories to false success', () => {
    const state = {
      categories: [
        {
          subCategory: [
            {
              id: Date.now(),
            },
          ],
          nameCategory: 'testCategory',
          subCategories: true,
        },
      ],
    };
    const action = {
      type: DELETE_SUBCATEGORY,
      payload: {
        id: Date.now(),
        nameCategory: 'testCategory',
      },
    };
    expect(
      categoriesReducer(state, action).categories[0].subCategories,
    ).toBeFalsy();
  });
  it('DELETE_SUBCATEGORY with two sub and subCategories has not been changed success', () => {
    const state = {
      categories: [
        {
          subCategory: [
            {
              id: Date.now(),
            },
            {
              id: Date.now() + 1,
            },
          ],
          nameCategory: 'testCategory',
          subCategories: true,
        },
      ],
    };
    const action = {
      type: DELETE_SUBCATEGORY,
      payload: {
        id: Date.now(),
        nameCategory: 'testCategory',
      },
    };
    expect(
      categoriesReducer(state, action).categories[0].subCategories,
    ).toBeTruthy();
  });
  it('EDIT_NAME_CATEGORY success', () => {
    const state = {
      categories: [
        {
          id: Date.now(),
          nameCategory: 'oldNameCategory',
          subCategory: [
            {
              category: 'oldNameCategory',
            },
          ],
        },
      ],
    };
    const action = {
      type: EDIT_NAME_CATEGORY,
      payload: {
        name: 'newNameCategory',
        id: Date.now(),
      },
    };
    expect(categoriesReducer(state, action)).toEqual({
      categories: [
        {
          id: action.payload.id,
          nameCategory: action.payload.name,
          subCategory: [
            {
              category: action.payload.name,
            },
          ],
        },
      ],
    });
  });
  it('EDIT_NAME_SUBCATEGORY success', () => {
    const state = {
      categories: [
        {
          subCategory: [
            {
              id: Date.now(),
              nameSubCategory: 'oldNameSubCategory',
            },
          ],
        },
      ],
    };
    const action = {
      type: EDIT_NAME_SUBCATEGORY,
      payload: {
        name: 'newNameSubCategory',
        id: Date.now(),
      },
    };
    expect(categoriesReducer(state, action)).toEqual({
      categories: [
        {
          subCategory: [
            {
              id: action.payload.id,
              nameSubCategory: action.payload.name,
            },
          ],
        },
      ],
    });
  });
});
