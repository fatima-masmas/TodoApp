import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '@hotwired/stimulus';
import { TodoContext } from '../contexts/TodoContext';


function DeleteDialog(props) {
    const hide = () => {
        props.setDeleteConfirmationIsShown(false);
    };
    const context = useContext(TodoContext);
    return (
        <Dialog onClose={hide} fullWidth={true} maxWidth='sm' open={props.open || false}>

            <DialogTitle >Are you sure wish to delete to-di?</DialogTitle>
            <DialogContent>
                {props.todo.name}
            </DialogContent>
            <DialogActions>
                <Button onClick={hide}>Cancel</Button>
                <Button onClick={() => {
                    context.deleteTodo({id: props.todo.id, name: props.todo.name});
                    hide()
                    }}>Delete</Button>
            </DialogActions>
        
        </Dialog>
    );
    }

    DeleteDialog.propTypes = {
        open: PropTypes.bool.isRequired,
        setDeleteConfirmationIsShown: PropTypes.func.isRequired,
        todo: PropTypes.object 
    };

    export default DeleteDialog;
