import React, { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <>
      <nav className="flex justify-between items-center w-full p-2 mb-2">
        <img
          src="https://cdn2.iconfinder.com/data/icons/illustricon-tech-viii/512/task_refresh-512.png"
          alt="logo"
          width={50}
        />
        <div className="flex gap-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/todo">Todo</NavLink>
        </div>
      </nav>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
}

export default SharedLayout
