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

## Snapshot
  expect(component).toMatchSnapshot()

## Mock
  From Jest v15, automokcing was closed by default
  
  mock timer

## 


