
import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import db from './firebase'
/* import DeleteForeverIcon from '@material-ui/icons/DeleteForever'; */
import './Todo.css';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Todo(Receiver) {
    const classes = useStyles();
    return (
        <div className="todoContainer">
            
        {/* <List> */}
        <div className="listContainer">
        <List>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                    📝
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={Receiver.AppsenderData.todo} secondary="Remember ☝️"/>
            </ListItem>
            </List>
        </div>
            <div className="iconContainer">
            <List>
                <Button variant="contained" color="secondary" className={classes.button}
        startIcon={<DeleteIcon />} onClick={event => {
                db.collection('todos').doc(Receiver.AppsenderData.id).delete()
                }}
                >Del</Button>
                </List>
            </div>
                
          
            
            
    {/*     </List> */}
        
        </div>
    )
}

export default Todo
