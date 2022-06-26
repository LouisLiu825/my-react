// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HistoryRouter, history } from './utils/history'
import { AuthComponent } from '@/components/AuthComponent'
import { lazy, Suspense } from 'react'
const Login = lazy(() => import('@/pages/Login'))
const Layout = lazy(() => import('./pages/Layout'))
const Home = lazy(() => import('./pages/Home'))
const Article = lazy(() => import('./pages/Article'))
const Publish = lazy(() => import('./pages/Publish'))

function App() {
  return (
    <HistoryRouter history={history}>
      <Suspense
        fallback={
          <div
            style={{
              textAlign: 'center',
              marginTop: 200,
            }}
          >
            loading...
          </div>
        }
      >
        <div className="app" style={{ height: '100vh' }}>
          <Routes>
            {/* 路由path和组件对应关系 */}
            <Route
              path="/"
              element={
                <AuthComponent>
                  <Layout />
                </AuthComponent>
              }
            >
              <Route index element={<Home />}></Route>
              <Route path="/article" element={<Article />}></Route>
              <Route path="/publish" element={<Publish />}></Route>
            </Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </div>
      </Suspense>
    </HistoryRouter>
  )
}

export default App
