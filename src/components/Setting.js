import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import Divider from '@material-ui/core/Divider';

import SyncIcon from '@material-ui/icons/Sync';
import WhatshotOutlinedIcon from '@material-ui/icons/WhatshotOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ImportContactsOutlinedIcon from '@material-ui/icons/ImportContactsOutlined';
import FeedbackOutlinedIcon from '@material-ui/icons/FeedbackOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import AssignmentReturnOutlinedIcon from '@material-ui/icons/AssignmentReturnOutlined';

import './Setting.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />;
// }

export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="setting">
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <SyncIcon/>
          </ListItemIcon>
          <ListItemText primary="Sync" />
        </ListItem>
        <hr/>
        <ListItem button>
          <ListItemIcon>
            <WhatshotOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Reading Insights" />
        </ListItem>
        <hr/>
        <ListItem button>
          <ListItemIcon>
            <SettingsOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="App Setting" />
        </ListItem>
        <hr/>
        <ListItem button>
          <ListItemIcon>
            <ImportContactsOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Reading Setting" />
        </ListItem>
        <hr/>
        <ListItem button>
          <ListItemIcon>
            <FeedbackOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Help and Feedback" />
        </ListItem>
        <hr/>
        <ListItem button>
          <ListItemIcon>
            <InfoOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Info" />
        </ListItem>
        <hr/>
        <ListItem button>
          <ListItemIcon>
            <AssignmentReturnOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Sign Out" />
        </ListItem>
      </List>
    </div>
  );
}
