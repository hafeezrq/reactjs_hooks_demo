import Accordion from './components/Accordion';

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

// eslint-disable-next-line
export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

// export default App;
