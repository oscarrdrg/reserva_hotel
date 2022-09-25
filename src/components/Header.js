import { AppBar, Avatar, IconButton, InputBase, makeStyles, Toolbar, Typography, Drawer, List, ListItem } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import logo from '../images/hotel.png'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'

const Header = () => {

    const [tablet, setTablet] = useState(true)
    const classes = useStyle()
    const [drawerOpen, setDrawerOpen] = useState(false)

    useEffect(()=>{
        const responsiveness = () => window.innerWidth < 900 ? setTablet(true) : setTablet(false)
        responsiveness();
        window.addEventListener("resize", ()=>responsiveness())
    },[])

    const displayTablet = () => {

        const handleDrawerOpen = ()=>  {
            setDrawerOpen(true)
        }
        const handleDrawerClose = ()=>  {
            setDrawerOpen(false)
        }

        const headersData = ["My account", "Previous bookins", "Log out"]

        const getDrawerChoices = ()=>  {
            return headersData.map((data)=>{
                return(
                    <List>
                        <ListItem>
                            {data}
                        </ListItem>
                    </List>
                )
            })
        }

       return(
            <Toolbar className={classes.toolbar}>
                <IconButton {...{edge:"start", color:"#ccc", "aria-label":"menu", "aria-haspopup":"true", onClick: handleDrawerOpen}}>
                    <MenuIcon fontSize="large"/>
                </IconButton>
                <Drawer{...{anchor:"left", open:drawerOpen, onClose:handleDrawerClose}}> <div>{getDrawerChoices()}</div> </Drawer>
                <img src={logo} className={classes.logo}/>
                <div className={classes.center}>
                    <InputBase fullWidth placeholder='Search here...' inputProps={{className: classes.input}}/>
                    <SearchIcon/>
                </div>
                <div className={classes.right}>
                    <Typography>Sign in</Typography>
                <Avatar className={classes.avatar}></Avatar>
                </div>
            
    </Toolbar>) 
    }
    const dislpayDesktop = () => (
        <Toolbar className={classes.toolbar}>
            <img src={logo} className={classes.logo}/>
            <div className={classes.center}>
                <InputBase fullWidth placeholder='Search here...' inputProps={{className: classes.input}}/>
                <SearchIcon/>
            </div>
            <div className={classes.right}>
                <Typography>Sign in</Typography>
                <Avatar className={classes.avatar}></Avatar>
            </div>
            
        </Toolbar>
    )

  return (
   <AppBar className={classes.root}>
        {
            tablet ? displayTablet() : dislpayDesktop()
        }
   </AppBar>
  )
}

const useStyle = makeStyles((theme)=>({

    root:{
        position:"sticky",
        top:0,
        backgroundColor:"#fff",
        zIndex: 99,
        width:"100vw"

    },

    toolbar: {
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",

    },
    logo:{
        height:"80px",
        margin:theme.spacing(1,0,0,2),
        objectFit:"contain",

    },

    input:{
        fontSize:"1.2rem",
        padding:theme.spacing(1,5,1,5)
    },

    center:{
        display:"flex",
        alignItems:"center",
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        border:"1px solid lightgray",
        borderRadius:"999px",
        minWidth:"300px"

    },

    right:{
        color:"#333",
        display:"flex",
        alignItems:"center",
        marginLeft: theme.spacing(2)
    },

    avatar:{
        marginLeft: theme.spacing(2)
    }

}))

export default Header
