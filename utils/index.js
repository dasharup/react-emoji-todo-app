function genTodoId() {
  return this.id++;
}
export const getnextTodoId = genTodoId.bind({ id: 0 });
