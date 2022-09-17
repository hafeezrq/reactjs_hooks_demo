import React from 'react';
import { useState } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');
  return (
    <div>
      <div className='ui form'>
        <div className='lable'>Enter search term</div>
        <input
          type='text'
          value={term}
          onChange={e => setTerm(e.target.value)}
          className='input'
        />
      </div>
    </div>
  );
};

export default Search;
