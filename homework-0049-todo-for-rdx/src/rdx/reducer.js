const initialState = {
   stateTodos: [
      { quest: 'work', id: "ttt"},
      { quest: 'work', id: "2"},
      { quest: 'work', id: "4"},
      { quest: 'work', id: "6"},
   ],
};
// acions


export const ADDTODO = 'addtodo';
export const addTodo = (value = {}) => ({
   type: ADDTODO,
   payload: value,
});

// reducer

export const reducer = (state = initialState, action) => {
   switch (action.type) {
      case ADDTODO:
         return {
            ...state,
            stateTodos: [...state.stateTodos, action.payload],
         };
      default:
         return state;
   }
};

// selectors

export const selectTodos = (state) => state.stateTodos;
