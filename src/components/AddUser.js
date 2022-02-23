import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button } from "@material-ui/core";
import { TextField } from "@mui/material";
//import { useDispatch, useSelector } from "react-redux";
//import { showModalAction } from "../redux/crudDucks";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const btnStyle = {
  marginTop: 20,
  marginBottom: 20,
  marginLeft: 40,
};

export default function AddUser() {
  //const { handleSubmit, reset, control } = useForm();
  //const { register, handleSubmit, watch, formState: { errors }} = useForm();
const [open,setOpen]=React.useState(false)
 const [firstName,setFirstName]=React.useState('')
 const [lastName,setLastName]=React.useState('')

  const handleClose = (event, reason) => {
    setOpen(false);
  };
  const handleSummit = () => {
   console.log(firstName,lastName)
  };
  const firstNameChange = (e) => setFirstName(e.target.value);
  return (
    <div style={{ marginTop: 20 }}>
      <Button
        style={btnStyle}
        color="primary"
        variant="contained"
        onClick={()=>setOpen(true)}
      >
        Add User
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{marginBottom:5}} id="modal-modal-title" variant="h6" component="h2">
            Avatar
          </Typography>

          <TextField
           onChange={firstNameChange}
            value={firstName}
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            onChange={e => setFirstName(e.target.value)}
          />
        
          <TextField
            value={lastName}
            id="outlined-basic"
            label="LastName Name"
            variant="outlined"
          />
          <Button color="primary" variant="contained" onClick={handleSummit}> Accept</Button>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
}
