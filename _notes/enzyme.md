## Create component
  - shallow
  - render  return HTML string
  - mount load react component 

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