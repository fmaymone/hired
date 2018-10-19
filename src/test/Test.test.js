import React from 'react';
import TestRenderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

const Text = (props) => <p>{props.children}</p>;

const App = () => (
  <section>
    <h1>Hello</h1>
    <Text>hogehoge</Text>
  </section>
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  const renderer = TestRenderer.create(<App />);
  console.log(renderer.toJSON());
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

