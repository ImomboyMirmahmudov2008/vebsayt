import React, {useEffect} from "react";
import "./Home.css"
import Aos from "aos"
import "aos/dist/aos.css"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Home = () => {

    useEffect(() => {
        Aos.init({duration: 1500});
    }, [])

    const btn = {
        marginTop: '60px',
        marginBottom: '60px'
    }

    // modal btn

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <div className='container'>
            <div className="box box1" data-aos='zoom-in'>
                <h2 className='box-title'>Box-1</h2>
            </div>
            <div className="box box2" data-aos='zoom-in-up'>
                <h2 className='box-title' >Box-2</h2>
            </div>
            <div className="box box3" data-aos='flip-left'>
                <h2 className='box-title' >Box-3</h2>
            </div>
            <div className="box box4" data-aos='fade-left'>
                <h2 className='box-title' >Box-4</h2>
            </div>
            <div className="box box5" data-aos='fade-right'>
                <h2 className='box-title' >Box-5</h2>
            </div>
            <div className="box box2" data-aos='zoom-in-up'>
                <h2 className='box-title' >Box-6</h2>
            </div>
            <div className="box box3" data-aos='flip-left'>
                <h2 className='box-title' >Box-7</h2>
            </div>
            <div className="box box1" data-aos='zoom-in'>
                <h2 className='box-title'>Box-8</h2>
            </div>

            {/*modal btn*/}

            <Button variant="outlined" style={btn} onClick={handleClickOpen}>
                click me
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}

export default Home