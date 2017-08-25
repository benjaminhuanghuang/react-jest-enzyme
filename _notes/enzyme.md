## Enzyme
  By Airbnb

## Create component
  
  - mount  Full DOM rendering, it allows you to render a part of the DOM tree and it also gives you access to the lifecycle methods of React components 
  - shallow   Do not render child components. Is useful to test a component in isolation of every other. 
  - render  return HTML string
  
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

  