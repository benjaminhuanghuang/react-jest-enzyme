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

## Test class 

## Simulate
  ```
  const component = mount(<App/>);
  const button = component.find('button');
  button.simulate('click');
  button.simulate('click');
  button.simulate('click');

  expect(component.state().counter).toEqual(4)
  ```

## Snapshot
  expect(component).toMatchSnapshot()

## Mock
  From Jest v15, automokcing was closed by default
  
  mock timer

## 


