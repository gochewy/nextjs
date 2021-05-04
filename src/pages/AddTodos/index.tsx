import {Box, Button, Grid, TextField} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {useCallback, useState} from "react";
import {useAddTodoMutation} from "../../generated/graphql";
import {useAppSelector} from "../../store";
import {Todos_Insert_Input} from "../../../../mobile/src/generated/graphql";
const useStyles = makeStyles({
    container: {
        backgroundColor: "#eef2f5",
        overflow: "hidden",
        margin: "0",
        padding: "0",
        border: "0",
        display: "flex",
        justifyContent: "center",
        alignContent: 'start'
    },
    addTodo: {
        margin: 0,
        minWidth: 800,
        padding: "0 0 0 30px",
        paddingTop: "5vh",
        width: "auto",
        position: 'relative',
        justifyContent: "space-between",
    },
})
const AddTodo = () => {
    const classes = useStyles();
    const userId = useAppSelector((state => state.auth.userId));
    const [todo, setTodo] = useState({
        title: '',
        status: false,
        userId: userId,
    })
    const [addTodo] = useAddTodoMutation();
    const onSubmit = useCallback(async (e) => {
        e.preventDefault();
        try {
            const res = await addTodo({
                variables: {
                    todo: todo as Todos_Insert_Input
                }
            })
        } catch (error) {
            console.log(error);
        }
        setTodo({
            ...todo,
            title: ''
        })
    }, [addTodo, todo]);
    return (
        <Grid container className={classes.container}>
            <Box p={2} />
            <Grid container className={classes.addTodo} >
                <Grid item md={8}>
                    <TextField
                        id='todo-input'
                        label='add todo'
                        value={todo.title}
                        placeholder='add something'
                        variant='outlined'
                        fullWidth
                        size='small'
                        onChange={(e) => {
                            setTodo({
                                ...todo,
                                title: e.target.value
                            })
                        }}
                    />
                </Grid>
                <Grid item md={3}>
                    <Button variant='outlined' type='submit' onClick={onSubmit}>Add Todo</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default AddTodo;