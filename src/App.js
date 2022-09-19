import { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';

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
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      ) : null}
    </div>
  );
};

// export default App;
