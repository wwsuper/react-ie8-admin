// media query ie8- 兼容
import 'media-match'
import React from 'react'
import ReactDOM from 'react-dom'

import { Calendar } from 'antd';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

ReactDOM.render(
  <div style={{ width: 290, border: '1px solid #d9d9d9', borderRadius: 4 }}>
    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
  </div>
  , document.getElementById('app'));
