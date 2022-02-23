
import { AppBar, Box, IconButton, Toolbar,Typography } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import NotFound from "./components/NotFound";
import MenuIcon from '@mui/icons-material/Menu';
import ListUser from "./components/ListUser";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography style={{marginLeft:20}}variant="h6" color="inherit" component="div">
            Crud
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
      <Routes>
        <Route path="/" element={<div><AddUser /><ListUser/></div>} />
        <Route path="/edit" element={<EditUser />} />
        <Route path="/home" element={<div>Bienvenido</div>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
