import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Route, Routes } from 'react-router'
import './App.css'
import Index from './pages/Index'
import NotFound from './pages/NotFound'
import Analytics from './pages/Analytics'
import Reports from './pages/Reports'
import  Settings  from './pages/Settings'
function App() {
  const [count, setCount] = useState(0)

  return (
    
       <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>FinanceBox</title>
               
            </Helmet>
            <Routes>
              <Route path="/" element={<Index/>} />
               <Route path="*" element={<NotFound />} />
                         <Route path="/analytics" element={<Analytics />} />
                         <Route path="/reports" element={<Reports />} />
                          <Route path="/settings" element={<Settings />} />
            </Routes>
    </div>
    
  )
}

export default App
