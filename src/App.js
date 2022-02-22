import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import NotFound from "./components/NotFound";
import { showModalAction } from "./redux/crudDucks";

function App() {
  const dispatch=useDispatch()
  const open=useSelector((store)=>store.crud.show_modal)
  const openModal = () => {
    dispatch(showModalAction(true))
  };

  return (
    <BrowserRouter>
      <AddUser></AddUser>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Button variant="contained" onClick={openModal}>
                Add User
              </Button>
            </div>
          }
        />
        <Route path="/add" element={<AddUser open={open} />} />
        <Route path="/edit" element={<EditUser/>} />
        <Route path="/home" element={<div>Bienvenido</div>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
