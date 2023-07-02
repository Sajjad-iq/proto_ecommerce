import { useState } from 'react'
import { Nav } from './layout/nav'
import { MobileNav } from './layout/mobileNav'
import { ContentSide } from './layout/ContentSide'
function App() {
  const [menuActive, setIsMenuActive] = useState(false)

  return (
    <section className="App">
      <Nav isActive={menuActive} setIsActive={setIsMenuActive} />

      <MobileNav setIsActive={setIsMenuActive} isActive={menuActive} />

      <ContentSide isActive={menuActive}>
        <h1>content</h1>
      </ContentSide>
    </section>
  )
}

export default App
