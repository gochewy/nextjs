import {memo, useState} from "react";
import {
    Grid,
    TextField,
    Box, IconButton
} from "@material-ui/core";
import {
    useAllTodosCurrentUserSubscription,
    useGetSearchResultsQuery
} from "../../generated/graphql";
import { makeStyles } from "@material-ui/core/styles";
import TodoList from "./components/TodoList";
import {AddCircleOutline, SkipNextOutlined, SkipPreviousOutlined} from "@material-ui/icons";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
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
    searchTodo: {
        margin: 0,
        minWidth: 800,
        padding: "0 0 0 30px",
        paddingTop: "5vh",
        width: "auto",
        position: 'relative',
        justifyContent: "space-between",
    },
    pagination: {
        margin: 0,
        width: "auto",
        justifyContent: "center",
    },
    addButton: {
        margin: 0,
        width: "100%",
        justifyContent: "flex-end",
    },
    intro: {
        fontSize: 40,
        [theme.breakpoints.down("xs")]: {
            fontSize: 20,
        },
        color: "#1f2229",
        textAlign: "left",
        fontWeight: 700,
        paddingBottom: 20,
    },
}));

const Todos = memo(() => {
    const classes = useStyles();
    const [searchedWord, setSearch] = useState<string>("");
    const [offset, setOffset] = useState<number>(0)
    const searchResult = useGetSearchResultsQuery({
        variables: {
            query: searchedWord
        },
        fetchPolicy: 'network-only'
    });
    const todoSubscription = useAllTodosCurrentUserSubscription({
        variables:{
            limit: 9,
            offset: offset
        },
        fetchPolicy:'network-only'

    });

   const todos = todoSubscription?.data?.todos;
   const searchResults = searchResult?.data?.searchTodo

    console.log(todos);
    console.log(' search resulyf',searchResults,'search word', searchedWord);
    return (
        <Grid container className={classes.container}>
            <Grid container className={classes.searchTodo}>
                <Grid item md={12}>
                    <TextField
                        id='search'
                        value={searchedWord}
                        variant='outlined'
                        fullWidth
                        placeholder='Search'
                        size='small'
                        onChange={(e) => setSearch(e.target.value)} />
                </Grid>
                <Box p={2} />
                <Grid item md={12}>
                    {searchedWord ? (
                            <TodoList results={searchResults || []} where={'Meili'}/>
                        ) :
                        (
                            <TodoList results={todos || []} where={'Hasura'} />
                        )}
                </Grid>
                <Grid container className={classes.addButton}>
                    <Link href={'addTodos'}>
                        <IconButton><AddCircleOutline /></IconButton>
                    </Link>
                </Grid>
                <Grid container md={12} className={classes.pagination}>
                    <IconButton onClick={() => {
                        setOffset(offset === 0 ? offset : offset - 9)}
                    }><SkipPreviousOutlined
                    /></IconButton>
                    <IconButton onClick={() => {
                        setOffset(offset + 9)}
                    }>
                        <SkipNextOutlined />
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    )
})
export default Todos;