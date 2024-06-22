import React from 'react';
import { mount } from 'enzyme';
import { defineFeature, loadFeature } from 'jest-cucumber';
import Counter from '../Counter';

const feature = loadFeature('./src/ComPonents/Counter/Tests/Counter.feature');

defineFeature(feature, test => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Counter />);
  });

  test('Increment the counter', ({ given, when, then }) => {
    given('the counter is at 0', () => {
      expect(wrapper.find('div').text()).toContain('0');
    });

    when('I click the increment button', () => {
      wrapper.find('button').at(0).simulate('click');
    });

    then('the counter should display 1', () => {
      expect(wrapper.find('div').text()).toContain('1');
    });
  });

  test('Decrement the counter', ({ given, when, then }) => {
    given('the counter is at 0', () => {
      expect(wrapper.find('div').text()).toContain('0');
    });

    when('I click the decrement button', () => {
      wrapper.find('button').at(1).simulate('click');
    });

    then('the counter should display -1', () => {
      expect(wrapper.find('div').text()).toContain('-1');
    });
  });
});
