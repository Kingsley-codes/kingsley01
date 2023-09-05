import React from 'react';
import ReactDOM from 'react-dom/client';

const myElement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

const container1 = document.getElementById('sandy');
const sandy = ReactDOM.createRoot(container1);
sandy.render(<h1>Building A Website That Works!</h1>);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(myElement);

