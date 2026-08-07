import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Homepage from './pages/Homepage.jsx'
import AllProjects from './pages/All_Projects.jsx'

const seoByPath = {
  '/': {
    title: 'Yuvraj | Full-Stack Developer Portfolio',
    description:
      'Yuvraj is a full-stack developer crafting clean React interfaces, responsive web experiences, dashboards, and practical application flows.',
  },
  '/projects': {
    title: 'Projects | Yuvraj Full-Stack Developer Portfolio',
    description:
      'Browse Yuvraj portfolio projects, including responsive dashboards, onboarding flows, and clean React web experiences.',
  },
}

const upsertMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

const Seo = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const seo = seoByPath[pathname] ?? seoByPath['/']
    document.title = seo.title
    upsertMeta('meta[name="description"]', { name: 'description', content: seo.description })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: seo.title })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: seo.description })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: seo.title })
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: seo.description })
  }, [pathname])

  return null
}

const App = () => {
  return (
    <div className="min-h-screen">
      <Seo />
      <Navbar />
      <main className="w-full">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
