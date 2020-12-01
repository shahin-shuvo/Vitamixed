import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
    table: {
        minWidth: 200,
    }
}));

const NavTabs = (props) => {

    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };


    const IngrediItems = [];

    console.log(props.data["ingredients"])


    return (
        <div class="card card-nav-tabs">

            <div class="card-body">
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="secondary"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
               
                        <Tab label="NUTRITIONS" {...a11yProps(0)} />
                        <Tab label="INGREDIENTS" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
               

                <TabPanel value={value} index={0} dir={theme.direction}>
                    <div className="nutritions_fact">
                        <div className="row" >
                            <div className="col" style={{textAlign:"left"}}>
                                 <p style={{padding:"0", margin:"0"}}> {props.data["nutritions"]["serving"]  }</p> 
                            </div>
                            <div className="col"></div>
                        </div>

                        <div className="row">
                                <div className="col" style={{textAlign:"left"}}>
                                    <p className="item-p" style={{fontSize:"medium",fontWeight:"bolder"}}>
                                        Serving Size</p>
                                </div>
                                <div className="col" style={{fontSize:"medium",fontWeight:"bolder",textAlign:"right"}}>
                                    <p className="item-p">{props.data["nutritions"]["serving_size"]  }</p>
                                    
                                </div>
                        </div>
                        <hr class="hr-17"></hr>
                        <div className="row" >
                            <div className="col" style={{textAlign:"left"}}>
                                 <p className="item-p">Amount Per Serving</p> 
                            </div>
                            <div className="col"></div>
                        </div>

                        <div className="row">
                                <div className="col" style={{textAlign:"left"}}>
                                    <p className="item-p"style={{fontSize:"x-large",fontWeight:"bolder"}}>
                                        Calories</p>
                                </div>
                                <div className="col" style={{fontSize:"x-large",fontWeight:"bolder",textAlign:"right"}}>
                                    <p className="item-p">{props.data["nutritions"]["per_serving_calories"]  }</p>
                                </div>
                        </div>
                        <hr class="hr-17"></hr>
                        <div className="row">
                            <div className="col">
                            <p className="item-p"style={{fontSize:"medium", textAlign:"right"}}>
                                % Daily Value*
                            </p>
                            </div>
                        </div>
                        <div className="row" style={{padding:"0", margin:"0"}}>
                                <div className="col" style={{textAlign:"left"}}>
                                    <p className="item-p"style={{fontSize:"medium",fontWeight:"bolder"}}>
                                        Total Fat  {props.data["nutritions"]["total_fat"]["weight"]}</p>
                                </div>
                                <div className="col" style={{fontSize:"medium",fontWeight:"bolder",textAlign:"right"}}>
                                    <p className="item-p"> {props.data["nutritions"]["total_fat"]["value"]}</p>
                                </div>
                        </div>
                        <hr style={{padding:"0", margin:"0"}}></hr>
                        
                        {props.data["nutritions"]["total_fat_list"].map((item) =>
                        <div style={{padding:"0", margin:"0"}}>
                            <div className="row" style={{marginLeft:"10%", padding:"0"}}>
                            <div className="col" style={{textAlign:"left"}}>
                                <p className="item-p"style={{fontSize:"small"}}>
                                   {item["key"]}</p>
                            </div>
                            <div className="col" style={{fontSize:"small",textAlign:"right"}}>
                                <p className="item-p">{item["value"]}</p>
                            </div>
                             </div>
                              <hr style={{padding:"0", margin:"0"}}></hr>
                        </div>
                        )}
                        {props.data["nutritions"]["others"].map((item) =>
                        <div style={{padding:"0", margin:"0"}}>
                            <div className="row" style={{ padding:"0"}}>
                                <div className="col" style={{textAlign:"left"}}>
                                    <p className="item-p"style={{fontSize:"medium"}}>
                                    {item["name"]}  {item["weight"]}</p>
                                </div>
                                <div className="col" style={{fontSize:"medium",textAlign:"right"}}>
                                    <p className="item-p">{item["value"]}</p>
                                </div>
                            </div>
                            <hr style={{padding:"0", margin:"0"}}></hr>
                        </div>
                        )}
                        <div className="row" style={{textAlign:"justify", fontSize:"small"}}>
                        {props.data["nutritions"]["note"]}
                        </div>

                   </div>
                </TabPanel>

                <TabPanel value={value} index={1} dir={theme.direction}>
                    <p className="ingredients_header">{props.data["ingredients_text"]}</p>
                    <ul className="ingredients_bullet" >
                        {props.data["ingredients_bullet"].map((item) =>
                            <li style={{color:"#213e3b"}}>{item}</li>
                        )}
                    </ul>
                    <p className="ingredients_body">
                    INGREDIENTS: {props.data["ingredients"]}
                    </p>

                </TabPanel>

            </div>
        </div>

    );
}

export default NavTabs;