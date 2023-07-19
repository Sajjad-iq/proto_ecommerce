import { useEffect, useRef, useState } from 'react'
import { Nav } from './layout/nav'
import { MobileNav } from './layout/mobileNav'
import { ContentSide } from './layout/ContentSide'
import { Home } from './pages/home'
function App() {
  const [menuActive, setIsMenuActive] = useState(false)
  const [IsNavIntersecting, setNavIntersecting] = useState(false)
  const NavRef = useRef<any>(null)

  useEffect(() => {
    if (!NavRef?.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNavIntersecting(entry.isIntersecting)
        } else {
          setNavIntersecting(false)
        }
      },
      { rootMargin: "0px" }
    );
    observer.observe(NavRef.current);

    return () => {
      if (NavRef?.current) observer.unobserve(NavRef.current)
    }
  }, [NavRef])

  return (
    <section className="App">
      <Nav IsScrollDown={IsNavIntersecting} isActive={menuActive} setIsActive={setIsMenuActive} />

      <MobileNav setIsActive={setIsMenuActive} isActive={menuActive} />

      <ContentSide isActive={menuActive}>
        <Home IsNavIntersecting={IsNavIntersecting} NavRef={NavRef} isActive={menuActive} setIsActive={setIsMenuActive} />
      </ContentSide>
    </section>
  )
}

export default App
