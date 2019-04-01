'use strict';
require('global_root/jest/__support__/config');

import CompiledReactWidget from 'root/compiled_react_widget';

describe('CompiledReactWidget', ()=>{
  beforeAll(() => {
    document.body.innerHTML = '<div><script id="crw" token="ok0abc" src="http://my.host?v3"></script></div>';
  });

  it('.getHost', () => {
    const host = CompiledReactWidget.getHost();
    expect(host).toEqual('http://my.host');
  });

  it('.getToken', () => {
    const token = CompiledReactWidget.getToken();
    expect(token).toEqual('ok0abc');
  });
});