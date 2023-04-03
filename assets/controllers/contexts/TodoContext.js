import React, {createContext} from 'react';

export const TodoContext = createContext();

class TodoContextProvider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {id: 1, name: 'do something'},
                {id: 2, name: 'do something'},
                {id: 3, name: 'do something'},
                {id: 4, name: 'do something'},
                {id: 5, name: 'do something'},
                {id: 6, name: 'do something'},
                {id: 7, name: 'do something'},
                {id: 8, name: 'do something'},
                {id: 9, name: 'do something'},
   
            ],
        };
    }
    //create
    createTodo(event, todo) {
        event.preventDefault();
        let data = [...this.state.todos];
        data.push(todo);
        this.setState({
            todos: data,
        });
    }
    // read
    readTodo() {
        return this.state.todos;
    }

   //update
    updateTodo(data) {
        let todos = [...this.state.todos];
        let todo = todos.find( todo => {
            return todo.id === data.id;
        });
        todo.name = data.name;
        this.setState({
            todos: todos,
        });
    }

    //delete
    deleteTodo(data) {
        let todos = [...this.state.todos];
        let todo = todos.find(todo => {
            return todo.id === data.id;
        });
        todos.splice(todos.indexOf(todo), 1);
        this.setState({
            todos: todos,
        })
    
    }

    

  render() {
    return (
     <TodoContext.Provider value={{
        ...this.state,
        createTodo: this.createTodo.bind(this),
        updateTodo: this.updateTodo.bind(this),
        deleteTodo: this.deleteTodo.bind(this),
     }}>

    
        {this.props.children}
     </TodoContext.Provider>
    );
  }
}
export default TodoContextProvider;