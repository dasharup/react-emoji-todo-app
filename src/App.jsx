import React from "react";
import {
  ModalCloseButton,
  TodoToggleStatusBtn,
  TodoEditBtn,
  TodoDeleteBtn,
  TodoAddBtn,
  TodoitemBox,
  TodoitemText,
  Header
} from "../shared";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  List,
  Input
} from "../lib";
import {
  useTodoReducer,
  useFormStateReducer,
  ADD_TODO,
  EDIT_TODO,
  FORM_STATE,
  DELETE_TODO,
  TOGGLE_TODO
} from "../hooks";

import { getnextTodoId } from "../utils";

export default function App() {
  const { todos, dispatch } = useTodoReducer();
  const { formState, dispatchFormState } = useFormStateReducer();

  const isModalOpen =
    formState.type === FORM_STATE.IS_ADD ||
    formState.type === FORM_STATE.IS_EDIT;

  return (
    <div className="bg-dark vh-100">
      <Header />
      <TodoAddBtn
        onClick={() =>
          dispatchFormState({
            type: FORM_STATE.IS_ADD,
            payload: { todoText: "" }
          })
        }
      />
      {/** * Todo Form for adding and editing todos */}
      <Modal isOpen={isModalOpen}>
        <ModalHeader>
          <ModalCloseButton
            onClick={() => dispatchFormState({ type: FORM_STATE.RESET })}
          />
        </ModalHeader>
        <ModalBody>
          <Input
            value={formState.todoText}
            onChange={value => {
              dispatchFormState({
                type: formState.type,
                payload: { todoText: value }
              });
            }}
          />
        </ModalBody>
        <ModalFooter>
          {formState.type === FORM_STATE.IS_ADD && (
            <TodoAddBtn
              onClick={() => {
                if (!formState.todoText) {
                  return;
                }
                dispatch({
                  type: ADD_TODO,
                  payload: { id: getnextTodoId(), text: formState.todoText }
                });
                dispatchFormState({ type: FORM_STATE.RESET });
              }}
            />
          )}
          {formState.type === FORM_STATE.IS_EDIT && (
            <TodoEditBtn
              onClick={() => {
                if (!formState.todoText) {
                  return;
                }
                dispatch({
                  type: EDIT_TODO,
                  payload: { id: formState.todoId, text: formState.todoText }
                });
                dispatchFormState({ type: FORM_STATE.RESET });
              }}
              isEditable
            />
          )}
        </ModalFooter>
      </Modal>
      {/** * Renders the list of Todos */}
      <List list={todos}>
        {item => (
          <TodoitemBox>
            <TodoToggleStatusBtn
              isDone={item.done}
              onClick={() =>
                dispatch({
                  type: TOGGLE_TODO,
                  payload: { id: item.id }
                })
              }
            />
            <TodoitemText>{item.text}</TodoitemText>
            <TodoEditBtn
              isEditable={!item.done}
              onClick={() =>
                dispatchFormState({
                  type: FORM_STATE.IS_EDIT,
                  payload: { todoId: item.id, todoText: item.text }
                })
              }
            />
            <TodoDeleteBtn
              isDeleteable
              onClick={() =>
                dispatch({
                  type: DELETE_TODO,
                  payload: { id: item.id }
                })
              }
            />
          </TodoitemBox>
        )}
      </List>
    </div>
  );
}
