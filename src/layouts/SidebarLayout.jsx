import { Backdrop, Box, Drawer, Typography, useMediaQuery } from '@mui/material';
import { Auth_Data } from '../constants/auth_constant';
import SidebarAccordion from '../componants/global/SidebarAccordion';
import PersonPinCircleOutlinedIcon from '@mui/icons-material/PersonPinCircleOutlined';
import img from '../images/person-removebg-preview (1).png'

export const SidebarLayout = (props) => {
    const { open, onClose } = props;
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
    const sidebarLinks = Auth_Data?.sidebarLinks || [];

    const content = (
    <>
      <Box sx={{width:'100%' ,}} ><Typography sx={{color:'common.white',display:"flex" ,justifyContent:'center'}} component={'span'}><img src={img} alt=''/></Typography></Box>
        <Box sx={{ width: 280, height: '100vh', maxHeight: '500px', overflowY: 'auto', mb: 8 }} role="presentation">
            <SidebarAccordion sidebarLinks={sidebarLinks} />
        </Box>
        </>
    );
    if (lgUp) {
        return (
            <Drawer
                anchor="left"
                open
                PaperProps={{
                    sx: {
                        color: '#000',
                        width: { xs: 280, xl: 350 },
                        height: '100%',
                        // marginTop: '65px',
                        overflowX: 'hidden',
                        boxShadow: '5px 5px 7px -1px gray',
                        backgroundColor:'primary.dark'
                    }
                }}
                variant="permanent"
            >
                {content}
            </Drawer>
     
        );
    }
    return (
        <Drawer
            anchor="left"
            onClose={onClose}
            open={open}
            BackdropProps={{ click: false }}
            BackdropComponent={(props) => (
                <Backdrop {...props} sx={{ backgroundColor: 'rgba(0, 0, 0, 0)' }} />
            )}
            PaperProps={{
                sx: {
                    marginTop: '65px',
                    height: '100%',
                    overflowX: 'hidden',
                    width: 265,
                }
            }}
            sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
            variant="temporary"
        >
            {content}
        </Drawer>
    );
};