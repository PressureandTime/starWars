import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { withStyles } from '@material-ui/core';

const styles = {
  dialogPaper: {
    minHeight: '90vh',
    maxHeight: '90vh',
  },
};

const CustomDialog = ({ isOpen, handleClose, title, subtitle, children, classes }) => {
  return (
    <>
      <Dialog
        classes={{ paper: classes.dialogPaper }}
        open={isOpen}
        onCLose={handleClose}
        aria-labelledby="max-width-dialog-title">
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <DialogActions>
            <ArrowBackIcon fontSize="large" onClick={handleClose} color="primary"></ArrowBackIcon>
          </DialogActions>
        </div>

        <DialogTitle id="max-width-dialog-title">{title}</DialogTitle>

        <DialogContent>
          <DialogContentText>{subtitle}</DialogContentText>
          {children}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default withStyles(styles)(CustomDialog);
