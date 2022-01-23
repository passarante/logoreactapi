import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '../components/NotFound';
import ReportDetailPage from '../pages/report/ReportDetailPage';
import LoginPage from './../pages/auth/LoginPage';
import HomePage from './../pages/home/HomePage';
import ReportPage from './../pages/report/ReportPage';
const MainRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/reports" element={<ReportPage />} />
        <Route path="/reports/:id" element={<ReportDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoute;
