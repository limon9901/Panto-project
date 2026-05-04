import React from 'react'
import { Outlet } from 'react-router'
import Hedear from './component/Hedear'
import { ThemProvider } from './context/ThemeContext'
import { CardContext, CardProvider } from './context/CardProduct'


const App = () => {
  return (
    <div >
      <ThemProvider>
        <CardProvider>

          <Hedear />

          <main>
            <Outlet />
          </main>
        </CardProvider>

      </ThemProvider>

    </div>
  )
}

export default App