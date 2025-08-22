import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <>
          <nav></nav>
          <main>
              <Suspense fallback={<div>Loading...</div>}>
                  <Outlet/>
              </Suspense>
          </main>
          <footer></footer>
    </>
  )
}

export default SharedLayout
