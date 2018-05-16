const Todo = require("../models/todo");

let currentId = 0;

class TodoListRepository {
  constructor() {
    const todo1 = new Todo(++currentId, "todo1", "todo1 desc");
    const todo2 = new Todo(++currentId, "todo2", "todo2 desc");
    todo1.isFinished = true;
    this.todoList = [todo1, todo2];
  }

  listAllTodos() {
    //实现查看所有todos的方法
    return this.todoList;
  }

  findTodoBy(id) {
    //实现通过id查看具体todo的方法
    return this.todoList.find(function(todo){
        return todo.id==id;
    });
  }

  createTodo(todoBody) {
    //实现创建新todo纪录的方法
    const todo = new Todo(++currentId,todoBody.name,todoBody.description);
    this.todoList.push(todo);
  }

  updateTodo(id, update) {
    //实现通过id和一个更新对象来更新todo纪录的方法
    const todo= this.findTodoBy(id);
    todo.name=update.name;
    todo.description=update.description;
    return todo;
  }

  deleteTodoBy(id) {
    //实现通过id来删除todo纪录的方法
    const index =this.todoList.findIndex(function(todo){
        return todo.id==id;
    });
    this.todoList.splice(index,1);
  }
}

module.exports = new TodoListRepository();