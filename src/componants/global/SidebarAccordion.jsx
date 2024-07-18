import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const SidebarAccordion = ({ sidebarLinks }) => {
    const location = useLocation();
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (_event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <Box sx={{ width: '100%', height: '100%',}}>
            {sidebarLinks?.map((item, index) => (
                <Box key={index} sx={{ width: '100%', height: 'auto', }}>
                    <Box sx={{ width: '100%', height: '100%' }}>
                        <Accordion
                            expanded={
                                item?.sublinks == null ? null : expanded === `panel${index + 1}`
                            }
                            onChange={handleChange(`panel${index + 1}`)}
                            sx={{
                                boxShadow: 'none !important',
                                overflow: 'auto',
                                width: '100%',
                                border: 0,
                                backgroundColor:'primary.main',
                                '.mui-vf72v2-MuiPaper-root-MuiAccordion-root.Mui-expanded': {
                                    boxShadow: 'none !important',
                                    border: 0,
                                }, '&:hover': {
                                    backgroundColor: 'primary.main',
                                },
                            }}
                        >
                            <AccordionSummary
                                expandIcon={item?.sublinks == null ? null : <ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id={`panel${index + 1}a-header`}
                                sx={{
                                    mx: 'auto',
                                    p: 1.4,
                                    mb: 0,
                                    minHeight: '55px',
                                    gap: 2,
                                    width: '95%',
                                    height: '43px',
                                    borderRight: `${item?.link == location ? '2px solid #068987' : null
                                        }`,
                                    borderRadius: '2px',
                              
                             
                                }}
                            >
                                <Link href={`${item?.link}`}>
                                    {item?.icon && (
                                        <Box sx={{ color: 'common.white' }}>
                                            {item?.icon}
                                        </Box>
                                    )}
                                </Link>
                                {item?.sublinks ? (

                                    <Typography
                                        variant="body1"

                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            fontWeight: `${item?.link == location ? 600 : 400}`,
                                            ml: 2,
                                            pt:0.2,
                                            color: 'common.white',
                                        }}
                                    >
                                        {item?.text}
                                    </Typography>

                                ) : (
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            width: '100%',
                                            height: '100%',

                                            fontWeight: `${item?.link == location ? 600 : 400}`,
                                            ml: 2,
                                            color: 'common.white',
                                        }}
                                    >
                                        {item?.text}
                                    </Typography>

                                )}
                            </AccordionSummary>
                            {item?.sublinks &&
                                item?.sublinks?.map((eachItem, index) => (
                                    <div key={index}>
                                        <AccordionDetails
                                            key={index}
                                            sx={{
                                                pl: 6.5,
                                                pt: 1.5,
                                                pb: 1.5,
                                                mb: 0.3,
                                                boxShadow: 'none !important',
                                                alignItems: 'center',
                                                '&:hover': { backgroundColor: '#E6F5F4 !important' },
                                                borderRight: `${eachItem?.link == location
                                                    ? '2px solid #068987 !important'
                                                    : null
                                                    }`,
                                                backgroundColor: `${eachItem?.link == location
                                                    ? '#E6F5F4 !important'
                                                    : null
                                                    }`,  '&:hover': {
                                                        backgroundColor: 'primary.dark',
                                                    },
                                            }}
                                        >
                                            <Link
                                                style={{ width: '100%', height: '100%', textDecoration: 'none' ,}}
                                                to={`${eachItem?.link}`}
                                            >
                                                <Typography
                                                    variant="body1"
                                                    sx={{
                                                        width: '100%',
                                                        height: '100%',
                                                        color: 'common.white',
                                                      
                                                    }}
                                                >
                                                    {eachItem?.text}
                                                </Typography>
                                            </Link>
                                        </AccordionDetails>
                                    </div>
                                ))}
                        </Accordion>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default SidebarAccordion;