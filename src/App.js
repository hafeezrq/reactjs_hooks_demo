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
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown options={options} />
    </div>
  );
};

// export default App;
