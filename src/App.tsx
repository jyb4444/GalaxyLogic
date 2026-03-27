import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteShell } from './components/layout/SiteShell'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Services } from './pages/Services'

function App() {
  return (
    <Routes>
      <Route element={<SiteShell />}>
        <Route index element={<About />} />
        <Route path="about" element={<Navigate to="/" replace />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
