import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignupForm from './Components/SignupForm';
import Home from './Components/Home';
import LoginForm from './Components/LoginForm';
import JobsItem from './Components/JobsItem';
import JobsDetails from './Components/JobsDetails';
import NotFound from './Components/NotFound';
import ApplyForm from './Components/ApplyForm';
import AppliedJobs from './Components/AppliedJobs';
import Succesmesaage from './Components/Succesmesaage';

const App = () => {
  const checkLogin = sessionStorage.getItem('email');
  return (
    <Routes>
      {checkLogin === null ? (
        <Route path='/' element={<LoginForm />} />
      ) : (
        <>
          <Route path='/home' element={<Home />} />
          <Route path='/jobs-item/:id' element={<JobsItem />} />
          <Route path='/jobs-details/:id' element={<JobsDetails />} />
          <Route path='/apply-form/:id' element={<ApplyForm />} />
          <Route path='/success' element={<Succesmesaage />} />
          <Route path='/applied-jobs' element={<AppliedJobs />} />
        </>
      )}
        <Route path='/' element={<LoginForm />} />
      <Route path='/signup' element={<SignupForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
