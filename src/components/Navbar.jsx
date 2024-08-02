/** @jsxImportSource preact */
import { useState } from 'preact/hooks';
import { IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'preact-router/match';
import './Navbar.css';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <div className="navbar">
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        className="menu-button"
      >
        <MenuIcon />
      </IconButton>
      <h1>Expense Tracker</h1>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button component={Link} href="/" >
            <ListItemText primary="Home"  />
          </ListItem>
          <ListItem button component={Link} href="/calculator">
            <ListItemText primary="Calculator" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;