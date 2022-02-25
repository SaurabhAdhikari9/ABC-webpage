import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { Button, DatePicker,Input, Radio, Space } from 'antd';
import 'antd/dist/antd.css';
import { UserOutlined } from '@ant-design/icons';
export default function FormDialog() {

  const { RangePicker } = DatePicker;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Register You.
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <div className = "DialogTitle">Submit</div>
        <div>
         
          <br/>
          <Input
            autoFocus
            margin="dense"
            id="name"
            label="Name:"
            placeholder = "Your name"
            type="Name"
            fullWidth
            variant="standard"
            prefix={<UserOutlined />}
          />
          <br/><br/>
            <Input
            
            margin="dense"
            id="name"
            label="Citizenship No:"
            placeholder= "01-23-456-7890"
            type="number"
            fullWidth
            variant="standard"
          />
          <br/>
          <br/>
          <>Date of issue (Citizentship)</>
          <Input
            margin="dense"
            placeholder = "Date of issue (Citizentship)"
            id="name"
            type="Date"
            fullWidth
            variant="standard"
          />
          <br/><br/>
          <>Email</>
            <Input
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
      
        </div>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
