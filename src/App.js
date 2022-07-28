// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Header from "./components/Header";
import BlogList from "./components/BlogList";
import styled from "styled-components";

function App() {
  return (
    <div>
      <Header/>
      <BlogList />
    </div>
  );
}

export default App;
