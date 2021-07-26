import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import Popper from '@material-ui/core/Popper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/paper';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Header(props) {
  const [popperOpen, setPopperOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();
  
  const handleB64EncodeClick = () => {
    setAnchorEl(null);
    setPopperOpen(false);
    history.push('/base64/encode');
  };

  const handleB64DecodeClick = () => {
    setAnchorEl(null);
    setPopperOpen(false);
    history.push('/base64/decode');
  };

  const togglePopper = (event) => {
    setPopperOpen(!popperOpen);
    setAnchorEl(event.currentTarget);
  };

  const onPopperClose = () => {
    setPopperOpen(false);
  };

  const handleHomeClick = () => {
    history.push('/');
  };

  const servicesList = [
    {
      text: 'Convert to Base64',
      onClick: handleB64EncodeClick
    },
    {
      text: 'Decode Base64',
      onClick: handleB64DecodeClick
    },
    {
      text: 'Conversion',
      onClick: handleB64EncodeClick
    }
  ];

  return (
    <Grid container>
      <Grid item xs={12} style={{ backgroundColor: '#23252e' }}>
        <Container >
          <Button variant="contained" color="primary" onClick={handleHomeClick} style={{ margin: '10px', backgroundColor: 'orange' }}>
            Home
          </Button>
          <Button variant="contained" color="primary" endIcon={ popperOpen ? <ExpandLessIcon /> : <ExpandMoreIcon /> } onClick={togglePopper} style={{ margin: '10px', backgroundColor: 'orange' }}>
            Services
          </Button>
          <Popper open={popperOpen} onClose={onPopperClose} anchorEl={anchorEl} placement="bottom">
            <Paper elevation={1}>
              <List>
                {
                  servicesList.map((service) => {
                    return (
                      <ListItem>
                        <Link onClick={service['onClick']} style={{textDecoration: 'none', color: 'black'}}>
                          <ListItemText>
                            {service['text']}
                          </ListItemText>
                        </Link>
                      </ListItem>);
                  })
                }
              </List>
            </Paper>
          </Popper>
        </Container>
      </Grid>
      <Grid item xs={12}>
        {props.children}
      </Grid>
    </Grid>
  );
}

export default Header;
