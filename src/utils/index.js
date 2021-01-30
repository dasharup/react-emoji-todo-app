function genTodoId() {
  this.id++
  return this.id;
}
const todoList = JSON.parse(localStorage.getItem("todos-list")) || []
const id = todoList[todoList.length - 1] && todoList[todoList.length - 1].id || 0
export const getnextTodoId = genTodoId.bind({ id:  id});
