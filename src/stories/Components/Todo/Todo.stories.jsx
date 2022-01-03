import React from 'react';

import Todo from './Todo';

export default {
  title: 'Components/Todo',
  component: Todo,
};

const Template = (args) => <Todo {...args} />;

export const Main = Template.bind({});

Main.args = {};
