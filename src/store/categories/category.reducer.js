import { createSlice } from "@reduxjs/toolkit";
// import { CATEGORIES_ACTION_TYPES } from "./category.type";

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    }
  },
});

export const { setCategories } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;

// export const categoriesReducer = (
//   state = CATEGORIES_INITIAL_STATE,
//   action = {}
// ) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
//       return {...state,isLoading: true,};

//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
//       return { ...state, isLoading: false, categories: payload };

//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
//       return { ...state, isLoading: false, error: payload };

//     default:
//       return state;
//   }
// };
