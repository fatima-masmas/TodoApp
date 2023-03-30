import React from 'react';
import ReactDom from 'react-dom';
import TodoTable from './controllers/components/TodoTable';
import TodoContextProvider from './controllers/contexts/TodoContext';

class App extends React.Component {
  render() {
    return (
        <TodoContextProvider>
            <TodoTable/>
        </TodoContextProvider>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('root'));

