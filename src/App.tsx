import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import api from './api'
import useSWR from 'swr'
import {useGetData} from './services/zipServices'

function App() {

  const {data, error, isValidating : loading} = useGetData()
  console.log(loading, 'asdasd')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
