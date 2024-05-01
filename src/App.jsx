import React, { createContext, useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Headphones from './pages/Headphones'
import Speakers from './pages/Speakers'
import Earphones from './pages/Earphones'
import Navbar from './Components/Navbar';
import HedphonesDetailes from './pages/HedphonesDetailes';
import SpeakersDetailes from './pages/SpeakersDetailes'
import EarphonesDetailes from './pages/EarphonesDetailes'
import Error from './pages/Error';
import Footer from './Components/Footer';
import Layout from './Components/Layout';

function ProtectedRoute({ children, isAuthenticated, redirectTo = '/login' }) {
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

export const isLoggedContext = createContext()
export const loggedUserName = createContext()

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [loggedUser, setLoggedUser] = useState('')



  const [headphonesTwo, setHeadphonesTwo] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:3000/yx1-earphones`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setHeadphonesTwo(data);
  //     });
  // }, []);



  return (
    <isLoggedContext.Provider value={[isLoggedIn, setIsLoggedIn]} >
      <loggedUserName.Provider value={[loggedUser, setLoggedUser]}>
        {

        }
        <Routes>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>

          <Route path='/' element={<ProtectedRoute isAuthenticated={isLoggedIn}>
            <Layout>
              <Home></Home>
            </Layout>
          </ProtectedRoute>}>
          </Route>
          <Route path='/:id' element={<ProtectedRoute isAuthenticated={isLoggedIn}>
            <Layout>
              <SpeakersDetailes></SpeakersDetailes>
            </Layout>
          </ProtectedRoute>}>
          </Route>
          <Route path='/:id' element={<ProtectedRoute isAuthenticated={isLoggedIn}>
            <Layout>
              <Headphones></Headphones>
            </Layout>
          </ProtectedRoute>}>
          </Route>

          <Route path='/headphones' element={<ProtectedRoute isAuthenticated={isLoggedIn}>
            <Layout>
              <Headphones></Headphones>
            </Layout>
          </ProtectedRoute>}>
          </Route>
          <Route path='/headphones/:id' element={<ProtectedRoute isAuthenticated={isLoggedIn}>
            <Layout>
              <HedphonesDetailes></HedphonesDetailes>
            </Layout>
          </ProtectedRoute>}>
          </Route>

          <Route path='/speakers' element={<ProtectedRoute isAuthenticated={isLoggedIn}>
            <Layout>
              <Speakers></Speakers>
            </Layout>
          </ProtectedRoute>}>
          </Route>
          <Route path='/speakers/:id' element={<ProtectedRoute isAuthenticated={isLoggedIn}>
            <Layout>
              <SpeakersDetailes></SpeakersDetailes>
            </Layout>
          </ProtectedRoute>}>
          </Route>

          <Route path='/earphones' element={<ProtectedRoute isAuthenticated={isLoggedIn}>
            <Layout>
              <Earphones></Earphones>
            </Layout>
          </ProtectedRoute>}>
          </Route>
          <Route path='/earphones/:id' element={<ProtectedRoute isAuthenticated={isLoggedIn}>
            <Layout>
              <EarphonesDetailes></EarphonesDetailes>
            </Layout>
          </ProtectedRoute>}>
          </Route>

          <Route path='*' element={<ProtectedRoute isAuthenticated={isLoggedIn}>
            <Error></Error>
          </ProtectedRoute>}>
          </Route>


        </Routes>
      </loggedUserName.Provider>
    </isLoggedContext.Provider>
  );
}

export default App;
