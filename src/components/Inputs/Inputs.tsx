import React from "react";
import "./Inputs.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const Inputs: React.FC = () => {
  const [age, setAge] = React.useState("");

  return (
    <div className='inputs'>
      <div className='selects'>
        <Box sx={{ flex: 1 }}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Categories</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              label='Age'
              value={age}
            ></Select>
          </FormControl>
        </Box>
        <Box sx={{ flex: 1 }}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Categories</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              label='Age'
              value={age}
            ></Select>
          </FormControl>
        </Box>
      </div>
      <div className='searchBar'>
        <Autocomplete
          disablePortal
          options={Object.keys({ goodfellas: 1990 })}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label='Movie' />}
        />
      </div>
    </div>
  );
};

export default Inputs;
