## Introduction
Jest is a framework and not a library. It comes with a test runner, assertion library, and good mocking support. Jest is built on top of Jasmine.

- Snapshot testing. With snapshot testing, the output of the current test run is compared with the snapshot of the previous test run. If the output matches the snapshot, the test passes.

- Jest requires the react-test-renderer package to render the component to JSON

- The expect function is part of the assertion library exposed by Jest.

## Command
  jest --watch --coverage

## Dependency
  - Support ES6
    npm i -D babel-jest babel-loader babel-preset-es2015 babel-preset-react
  
  add config to package.json
  ```
  "babel": {
    "presets": ["es2015","react"]
  },
  ```
## Test case 
  - skip
    - xdescribe
    - xit
  - just one
    - fit

## Test sub element
  ```
  expect(component.find('textarea')).toHaveLength(1);
  ```
## Test class name
  ```
  expect(component.hasClass('comment-box')).toEqual(true);
  ```
## Simulate
  - Button
  ```
  const component = mount(<App/>);
  const button = component.find('button');
  button.simulate('click');
  button.simulate('click');
  button.simulate('click');

  expect(component.state().counter).toEqual(4)
  ```
  - Text
  ```
  component.find('textarea').simulate('change', {target: {value: 'new comment'}});  
  ```
## Form
  component.simulate('submit');

## Snapshot
```
  import renderer from 'react-test-renderer';

  describe('Welcome (Snapshot)', () => {
    it('Welcome renders hello world', () => {
      const component = renderer.create(<Welcome />);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();  //expect() is part of the assertion library exposed by Jest
    });
  });
```

## Mock
  From Jest v15, automokcing was closed by default
  
  mock timer

## Test Action creator
  


