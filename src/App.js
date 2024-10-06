import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const Index = lazy(() => import('./pages/Index'));
const About = lazy(() => import('./pages/About'));
const Leadership = lazy(() => import('./pages/Leadership'));
const Conferences = lazy(() => import('./pages/Conferences'));
const Honors = lazy(() => import('./pages/Honors'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Courses = lazy(() => import('./pages/Courses'));
const Research = lazy(() => import('./pages/Research'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/research" element={<Research />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/honors" element={<Honors />} />
        <Route path="/conferences" element={<Conferences />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
