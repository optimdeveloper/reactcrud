import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button } from "@material-ui/core";
import { TextField } from "@mui/material";
import { makeStyles } from '@material-ui/core';
import { useForm, Controller } from "react-hook-form";
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
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

export default function AddUser() {
  const classes = useStyles();
  const { handleSubmit, control } = useForm();
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    setOpen(false);
  };
  const onSubmit = data => {
    console.log(data);
  };
  return (
    <div style={{ marginTop: 20 }}>
      <Button
        style={btnStyle}
        color="primary"
        variant="contained"
        onClick={() => setOpen(true)}
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
        <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
          <Typography
            sx={{ marginBottom: 5 }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Avatar
          </Typography>

          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            rules={{ required: "First name required" }}
            render={({ field: { onChange, value },fieldState: { error }  }) => (
              <TextField 
                label="First Name"
                variant="outlined"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />

          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            rules={{ required: "Last name required" }}
            render={({ field: { onChange, value } }) => (
              <TextField
                label="last Name"
                variant="outlined"
                value={value}
                onChange={onChange}
              />
            )}
          />
          <Button color="primary" variant="contained" type="summit">
            Accept
          </Button>
          <Button onClick={handleClose}>Close</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
