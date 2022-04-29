export const initialState = {
  approved: [],
  rejected: [],
  current: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'HYDRATE_STATE':
      return {
        ...state,
        ...action.payload,
      };
    case 'ADD_APPROVED_IMAGE':
      return {
        ...state,
        approved: [...state.approved, action.payload],
        rejected: state.rejected.filter((image) => image.id !== action.payload.id),
        current: null,
      };
    case 'ADD_REJECTED_IMAGE':
      return {
        ...state,
        rejected: [...state.rejected, action.payload],
        current: null,
      };
    case 'REMOVE_REJECTED_IMAGE':
      return {
        ...state,
        rejected: state.rejected.filter((image) => image.id !== action.payload.id),
      };
    case 'SET_CURRENT_IMAGE':
      return {
        ...state,
        current: action.payload,
      };
    case 'CLEAR_CURRENT_IMAGE':
      return {
        ...state,
        current: null,
      };
    default:
      throw new Error('Unhandled action type');
  }
};
