import React, { Suspense } from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import Login from'./Components/Login'
import UserContext from'./Components/UserContext'

const Booklist = React.lazy(()=>import('./Components/Booklist'))
const Bookbyid = React.lazy(()=>import('./Components/Bookbyid'))

function App() {
  const [bookslist,Setbookslist] = useState([
    {
        name: "the will",
        id: "12",
        pages: "550",
        auther: "chaim grinboyn"
    
    },
    {
        name: "Heidi",
        id: "13",
        pages: "200",
        auther: "aaa"
    
    },
    {
        name: "a second before the light",
        id: "11",
        pages: "350",
        auther: "ruti kepler"
    
    }])
  const [user, Setuser] = useState({name:"",password:""})

  return (
    <UserContext.Provider value={{user,Setuser}}>
    <h1>change from local machine</h1>
    <div className="App">
    <div id="navbar">
          <Link to={'/login'}>login</Link>
          <Link to={'/books'}>books</Link>
          <span style={{color:'white'}}>{user.name}</span>
        </div>
     
      <Routes>
        <Route path='/books' element={ <Suspense fallback="loading..."><Booklist bookslist={bookslist}/></Suspense> }/>
        <Route path='/login' element={ <Login/> }/>
        <Route path='/books/:id' element={<Suspense fallback="loading..."><Bookbyid bookslist={bookslist}/></Suspense>  }/>
      </Routes>
    </div>
    </UserContext.Provider>
  );
}

export default App;
