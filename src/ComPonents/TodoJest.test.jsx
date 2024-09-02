import React from 'react';
import { shallow } from 'enzyme';
import TodoJest from '../TodoJest';

describe('TodoJest Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TodoJest />);
  });

  test('ui render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should handle input change', () => {
    wrapper.find('input[name="task"]').simulate('change', {
      // target: { name: 'task', value: 'todo list' },
    });
    expect(wrapper.find('input[name="task"]').prop('value')).toBe('todo list');
  });

  test('should add an item when "Add Item" button is clicked and input is not empty', () => {

    wrapper.find('input[name="name"]').simulate('change', {
      target: { name: 'name', value: 'Test Item' },
    });

    wrapper.find('button').at(0).simulate('click');

    // Verify that the item is added to the list
    expect(wrapper.find('li').length).toBe(1);
    expect(wrapper.find('li').text()).toContain('Test Item');
    expect(wrapper.find('input[name="name"]').prop('value')).toBe('');
  });

  it('should not add an item when "Add Item" button is clicked and input is empty', () => {
    // Simulate entering an empty item name
    wrapper.find('input[name="name"]').simulate('change', {
      target: { name: 'name', value: '   ' },
    });
    // Simulate clicking the "Add Item" button
    wrapper.find('button').at(0).simulate('click');

    // Verify that no item is added to the list
    expect(wrapper.find('li').length).toBe(0);
    expect(wrapper.find('input[name="name"]').prop('value')).toBe('   ');
  });

  it('should delete an item when "Delete" button is clicked', () => {
    wrapper.find('input[name="name"]').simulate('change', {
      target: { name: 'name', value: 'Test Item' },
    });
    wrapper.find('button').at(0).simulate('click');

    console.log('Items before deletion:', wrapper.find('li').map(li => li.text()));

    wrapper.findWhere(node => node.type() === 'button' && node.text() === 'Delete').simulate('click');

    console.log('Items after deletion:', wrapper.find('li').map(li => li.text()));

    expect(wrapper.find('li').length).toBe(0);
  });

  it('should edit an item when "Edit" button is clicked and updated', () => {
    wrapper.find('input[name="name"]').simulate('change', {
      target: { name: 'name', value: 'Test Item' },
    });
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    expect(wrapper.find('input[name="name"]').prop('value')).toBe('Test Item');

    wrapper.find('input[name="name"]').simulate('change', {
      target: { name: 'name', value: 'Updated Item' },
    });
    wrapper.find('button').at(0).simulate('click');

    expect(wrapper.find('li').text()).toContain('Updated Item');
  });

  it('should update an item when "Update Item" button is clicked and input is not empty', () => {
    wrapper.find('input[name="name"]').simulate('change', {
      target: { name: 'name', value: 'Test Item' },
    });
    wrapper.find('button').at(0).simulate('click');

    wrapper.find('button').at(1).simulate('click'); // Click the "Edit" button
    wrapper.find('input[name="name"]').simulate('change', {
      target: { name: 'name', value: 'Updated Item' },
    });
    wrapper.find('button').at(0).simulate('click'); // Click the "Update Item" button

    expect(wrapper.find('li').text()).toContain('Updated Item');
    expect(wrapper.find('input[name="name"]').prop('value')).toBe('');
  });

  it('should not update an item when "Update Item" button is clicked and input is empty', () => {
    wrapper.find('input[name="name"]').simulate('change', {
      target: { name: 'name', value: 'Test Item' },
    });
    wrapper.find('button').at(0).simulate('click');

    wrapper.find('button').at(1).simulate('click'); // Click the "Edit" button
    wrapper.find('input[name="name"]').simulate('change', {
      target: { name: 'name', value: '   ' },
    });
    wrapper.find('button').at(0).simulate('click'); // Click the "Update Item" button

    expect(wrapper.find('li').text()).toContain('Test Item'); // The item should remain unchanged
    expect(wrapper.find('input[name="name"]').prop('value')).toBe('   ');
  });
});