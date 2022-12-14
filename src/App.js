import { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'What is React?',
    contents: 'React is frontend JavaScript framework.',
  },
  {
    title: 'why use React?',
    contents: 'React is a favorite JS library among engineers.',
  },
  {
    title: 'How do you use React?',
    contents: 'You use React by creating components.',
  },
];
const options = [
  {
    label: 'Red Color',
    value: 'red',
  },
  {
    label: 'Green Color',
    value: 'green',
  },
  {
    label: 'Blue Color',
    value: 'blue',
  },
];

// eslint-disable-next-line
export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown
          label='Select a Color'
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
};

// export default App;
