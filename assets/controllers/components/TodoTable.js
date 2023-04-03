import { IconButton, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';
import React, {Fragment, useContext, useState} from 'react';
import {TodoContext } from '../contexts/TodoContext';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import GppBadIcon from '@mui/icons-material/GppBad';
import OfflinePinIcon from '@mui/icons-material/OfflinePin';
import QueueIcon from '@mui/icons-material/Queue';
import DeleteDialog from './DeleteDialog';



function TodoTable () {

    const context = useContext(TodoContext);
    const [addTodo, setAddTodo] = useState('');
    const [editIsShown, setEditIsShown] = useState(false);
    const [editTodo, setEditTodo] = useState( '');
    const [deleteConfirmationIsShown, setDeleteConfirmationIsShown] = useState(false);
    const [todoToBeDeleted, setTodoToBeDeleted] = useState(null);
    

    return (
        <Fragment>

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
                            <TableCell>

                                {editIsShown === todo.id ? 
                                    <TextField 
                                        fullWidth={true}
                                        value={editTodo} 
                                        onChange={(event) => {
                                            setEditTodo(event.target.value);
                                    }}
                                        InputProps={{
                                            endAdornment: <Fragment>
                                                <IconButton onClick={() => {
                                                    setEditIsShown(false);
                                                }}><GppBadIcon/></IconButton>
                                                <IconButton onClick={() => {
                                                    context.updateTodo({id: todo.id, name: editTodo});
                                                    setEditIsShown(false);
        
                                                    }}><OfflinePinIcon/></IconButton>
                                        </Fragment>,
                                    }}
                                    
                                    />

                                            :
                            
                                    todo.name}
                                
                            </TableCell>
                        <TableCell align="right">
                                    <IconButton onClick={() => {setEditIsShown(true); setEditTodo(todo.name)}}>
                                        <BorderColorIcon/>
                                    </IconButton>
                                    <IconButton onClick={() =>{setDeleteConfirmationIsShown(true); setTodoToBeDeleted(todo)}}>
                                        <AutoDeleteIcon/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </form>
            {deleteConfirmationIsShown && (
            <DeleteDialog todo={todoToBeDeleted} 
                            open={deleteConfirmationIsShown} 
                            setDeleteConfirmationIsShown={setDeleteConfirmationIsShown}/>
                            )}
        </Fragment>
        );
    }


    export default TodoTable;
    