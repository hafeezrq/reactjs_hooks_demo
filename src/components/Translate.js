import React from 'react';
import { useState } from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';

const options = [
  {
    label: 'African',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Urdu',
    value: 'ur',
  },
];
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');
  return (
    <>
      <div className='ui form'>
        <div className='field'>
          <label htmlFor='' className='label'>
            Enter Text
          </label>
          <input
            type='text'
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        label='Select a language'
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <Convert language={language} text={text} />
    </>
  );
};

export default Translate;
