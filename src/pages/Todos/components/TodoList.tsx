import { makeStyles } from "@material-ui/core/styles";
import {Grid, ListItem, Typography, List, ListItemSecondaryAction, IconButton, Checkbox} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import React from "react";
import {useDeleteTodoByPkMutation, useUpdateToDoByPkMutation} from "../../../generated/graphql";
const useStyles = makeStyles({
    todoItem: {
        textDecoration: 'line-through',
        width: '100%',
        fontWeight: 600,
        fontSize: 16
    },
    todoPending: {
        width: '100%',
        fontWeight: 600,
        fontSize: 16,
        color: 'black',
    },
    todoItemBox: {
        justifyContent: 'space-between',
        backgroundColor: '#f0f0f0'
    },
    listItem: {
        width: '100%',
        backgroundColor: '#69E781',
        "&:nth-of-type(even)": {
            backgroundColor: '#c0f0c9',
        },

    }
})
const TodoList = (props) => {
    const classes = useStyles();
    const { results, where } =  props;
    const [deleteTodo] = useDeleteTodoByPkMutation();
    const [updateTodo] = useUpdateToDoByPkMutation();
    console.log(results);
    return (
        <Grid item>
            <Typography>{where}</Typography>
            <List className={classes.todoItemBox}>
                {results.map((result) => (
                    <ListItem className={classes.listItem} key={result.id}>
                        <Checkbox
                            checked={result.status}
                            onChange={() => {
                                updateTodo({
                                    variables: {
                                        status: !result.status,
                                        id: result.id
                                    }
                                })
                            }}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                            size='small'
                        />
                        <Typography className={ result.status ? classes.todoItem : classes.todoPending}>
                            {result.title}
                        </Typography>
                            <IconButton size='small' edge="end" aria-label="delete"  onClick={() => {
                                deleteTodo({
                                    variables:{
                                        id: result.id
                                    }
                                })
                            }}>
                                <DeleteIcon />
                            </IconButton>
                    </ListItem>
                ))}
            </List>
        </Grid>
    )
}
export default TodoList;