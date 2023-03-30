import { IconButton, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';
import React, {useContext, useState} from 'react';
import {TodoContext } from '../contexts/TodoContext';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';


import QueueIcon from '@mui/icons-material/Queue';


function TodoTable () {

    const context = useContext(TodoContext);
    const [addTodo, setAddTodo] = useState('');

    return (
        <form onSubmit={(event) => {
            context.createTodo(event, {name: addTodo});
            setAddTodo('');
            }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Task</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                <TableRow>
                        <TableCell>
                            <TextField value={addTodo} onChange={(event) => {setAddTodo(event.target.value)}} label="New Task" fullWidth={true}/>
                        </TableCell>
                        <TableCell align="right">
                            <IconButton type="submit"><QueueIcon/></IconButton>
                        </TableCell>
                    </TableRow>
                    {context.todos.slice().reverse().map((todo, index) => (
                        <TableRow key={'todo ' + index}>
                            <TableCell>{todo.name}</TableCell>
                            <TableCell align="right">
                                <IconButton><BorderColorIcon/></IconButton>
                                <IconButton><AutoDeleteIcon/></IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </form>
    );
}


export default TodoTable;