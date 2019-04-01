'use strict';
require('global_root/jest/__support__/config');

import React from 'react';
import AppRoot from 'root/components/app_root';
import renderer from 'react-test-renderer';

describe('AppRoot', ()=>{
  it('#render', () => {
    const component = renderer.create(<AppRoot/>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});