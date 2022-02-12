import { Routes, Route, Navigate } from 'react-router-dom';

import { Results } from './Results';

export const Routers = () => {
  return (
    <div className='p-4'>
      <Routes>
        <Route path='/' element={<Navigate replace to='/search' />} />
        {['/search', '/images', '/news', '/videos'].map((path, index) => (
          <Route path={path} element={<Results />} key={index} />
        ))}
      </Routes>
    </div>
  );
};
