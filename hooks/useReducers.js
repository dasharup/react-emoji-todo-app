import React from "react";


export const ADD_TODO = "ADD_TODO",
export const EDIT_TODO = "EDIT_TODO",
export const DELETE_TODO = "DELETE_TODO",
export const TOGGLE_TODO = "TOGGLE_TODO_STATUS",

export const FORM_STATE = {
  IS_ADD: "FORM_IS_ADD",
  IS_EDIT: "FORM_IS_EDIT",
  RESET: "FORM_RESET",
}

export const todoReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO: {
      return [...state, payload]
    }
    case EDIT_TODO: {
      return state.map(todo => {
        if (todo.id === payload.id) {
          return { ...todo, text: payload.text };
        }
        return todo;
      })
    }
    case DELETE_TODO:
      return state.filter(todo => {
        return todo.id !== payload.id;
      })
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === payload.id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      })
    default: return state
  }
};

export const useTodoReducer = () => {
  const [todos, dispatch] = React.useReducer(todoReducer, []);
  return {
    todos,
    dispatch,
  };
};


const initialFormState = {
  type: "",
  todoId: "",
  todoText: ""
}
const formActionReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case FORM_STATE.IS_ADD:
      return {
        ...state,
        type: type,
        todoText: payload.todoText
      }
    case FORM_STATE.IS_EDIT: {
      const todoId =  payload.todoId || state.todoId || 0;
      return {
        ...state,
        type: type,
        todoId,
        todoText: payload.todoText
      }
    }
    case FORM_STATE.RESET:
      return initialFormState
    default:
      return state
  }
}

export const useFormStateReducer = () => {
  const [formState, dispatchFormState] = React.useReducer(formActionReducer, initialFormState)

  return {
    formState,
    dispatchFormState
  }
}