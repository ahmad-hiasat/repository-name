import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // إذا كان لديك ملف CSS لتنسيق الموقع
import App from './App'; // الملف الأساسي للمشروع


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// إذا كنت تستخدم reportWebVitals
reportWebVitals();
