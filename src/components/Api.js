import React, { useEffect, useState } from 'react';
import { getClcards } from '../services/logoApi';
import { DataGrid } from '@mui/x-data-grid';
import AppBar from '@mui/material/AppBar';
import { Box, Button, CircularProgress, Divider, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'

const Api = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'CODE', headerName: 'First name', width: 200 },
    { field: 'DEFINITION_', headerName: 'Last name', width: 300 },

  ];


  useEffect(() => {
    getClcards().then(res => {
      setData(res.data);
      setLoading(false);
    }).catch(err => {
      console.log(err);
      setLoading(false);
    })

  }, [])




  return <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo Reports
          </Typography>
          <Button color="inherit">Test</Button>
        </Toolbar>
      </AppBar>

      {loading ? <Box style={{ display: "flex", flex: 1, height: "100vh", justifyContent: "center", alignItems: "center" }}>
        <CircularProgress />
      </Box> : <Box padding={5} >
        <div style={{ height: 400, width: '100%', marginTop: 30 }}>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Cari Kartlar
          </Typography>
          <br />
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </Box>
      }

    </Box>
  </div>;
};

export default Api;

