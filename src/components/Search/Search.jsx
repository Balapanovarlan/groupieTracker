// src/components/Search/Search.jsx
import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { SearchIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); 
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <TextField
      placeholder="Artist search..."
      variant="standard"
      size="medium"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyDown={handleKeyDown}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Link to={`/search?query=${encodeURIComponent(searchTerm)}`}>
              <IconButton>
                <SearchIcon size={20} />
              </IconButton>
            </Link>
          </InputAdornment>
        ),
      }}
      sx={{
        input: { fontSize: '1.6rem', color: '#000' },
      }}
    />
  );
};

export default Search;
