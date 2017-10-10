## Enzyme
  By Airbnb

## Dependency
  npm i -D react-test-renderer

  react-dom@15.5+ and react-test-renderer are implicit dependencies when using react@15.5+ with enzyme. 

## Introduction
Enzyme is a testing library to render the react component into the DOM and query the DOM tree.

Enzyme is a library that wraps packages like React TestUtils, JSDOM and CheerIO to create a simpler interface for writing unit tests. 
- React TestUtils has methods to render a react component into a document and simulate an event. 
- JSDOM is a JavaScript implementation of the DOM (Document object model). 
- CheerIO implements a subset of jQuery core and is used to query the DOM. 
Enzyme wraps these libraries and provides a simple and intuitive API for unit testing.

Enzyme is not a unit testing framework. It does not have a test runner or an assertion library.

## enzyme API
```
  import { shallow } from 'enzyme';
  import Welcome from '../src/client/components/welcome.jsx';

  describe('Welcome', () => {
    it('Welcome renders hello world', () => {
      const welcome = shallow(<Welcome />);
      expect(welcome.find('div').text()).toEqual('Hello world');
    });
  });
```

- shallow() function does not render any components nested within the Welcome component. 
  It is used to isolate the component for unit testing.

- mount()  Full DOM rendering, it allows you to render a part of the DOM tree and it also gives you access to the lifecycle methods of React components 

- render()  return HTML string
  
- find() method in Enzyme accepts jQuery-like selectors to retrieve a node from the DOM tree.

  ```
  let app = shallow(<App/>);
  expect(app.find('h1').text()).to.equal('Todos');

  let app = render(<App/>);
  expect(app.find('.todo-done').length).to.equal(0);

  let app = mount(<App/>);
  let todoLength = app.find('li').length;
  app.find('button.delete').at(0).simulate('click');
  expect(app.find('li').length).to.equal(todoLength - 1);
  ```

  - Pass props to component
  ```
  const props = { comments: ['New Comment', 'Other New Comment'] };
  component = mount(<CommentList/>, { context: {store: createStore(reducers, props)}});
  ```

## Enzyme selector
  Similar with jQuery selector. No need to use
  ```
    const TestUtils = require('react-addons-test-utils')
    TestUtils.findRenderedDOMComponentWithXXX
  ```

  ```
  componentToTest.find('div'); // On HTML tags
  componentToTest.find('.pretty > .red-row'); // On CSS selectors
  componentToTest.find('div .nice-style'); // Both !
  componentToTest.find('label[visible=true]'); // On properties

  ```

  