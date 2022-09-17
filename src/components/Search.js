import React, { useState, useEffect } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');
  console.log('Whenever rendered');
  useEffect(() => {
    console.log('I run with every render');
  });

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
