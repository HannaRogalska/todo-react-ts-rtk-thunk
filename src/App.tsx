import { lazy } from "react";
import { Route, Routes } from 'react-router-dom'
import './App.css'
import SharedLayout from './components/SharedLayout/SharedLayout'
const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const TodoPage = lazy(() => import("./pages/TodoPage/TodoPage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/todo" element={<TodoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
