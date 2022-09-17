import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Search = () => {
  const [term, setTerm] = useState('Programming');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };

    if (term && !results.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
    // eslint-disable-next-line
  }, [term]);

  const renderedResults = results.map(result => {
    return (
      <div className='item' key={result.pageid}>
        <div className='right floated content'>
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className='ui button'>
            Go
          </a>
        </div>
        <div className='content'>
          <div className='header'>{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
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
      <div className='ui celled list'>{renderedResults}</div>
    </div>
  );
};

export default Search;
