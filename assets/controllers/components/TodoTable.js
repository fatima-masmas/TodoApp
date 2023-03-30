import { IconButton, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';
import React, {useContext} from 'react';
import {TodoContext } from '../contexts/TodoContext';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';


import QueueIcon from '@mui/icons-material/Queue';


function TodoTable () {

        const context = useContext(TodoContext);
        return (
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
                            <TextField fullWidth={true}/>
                        </TableCell>
                        <TableCell align="right">
                            <IconButton><QueueIcon/></IconButton>
                        </TableCell>
                        
                    </TableRow>
                    {context.todos.map(todo => (
                        <TableRow>
                            <TableCell>{todo.name}</TableCell>
                            <TableCell align="right">
                                <IconButton><BorderColorIcon/></IconButton>
                                <IconButton><AutoDeleteIcon/></IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        );
    }


export default TodoTable;