import HeroSection from './components/shadcn-studio/blocks/hero-section-44/hero-section-44'
import LogoCloud from './components/shadcn-studio/blocks/logo-cloud-10/logo-cloud-10'
import Projects  from './components/Projects'

function App(){

const brandLogos = [
  { image: "https://cdn.simpleicons.org/react" },
  { image: "https://cdn.simpleicons.org/javascript" },
  { image: "https://cdn.simpleicons.org/html5" },
  { image: "https://cdn.simpleicons.org/css" },
  { image: "https://cdn.simpleicons.org/nodedotjs" },
  { image: "https://cdn.simpleicons.org/python" },
  { image: "https://cdn.simpleicons.org/vercel" },
  { image: "https://cdn.simpleicons.org/mysql" },
  { image: "https://cdn.simpleicons.org/fastapi" },
  { image: "https://cdn.simpleicons.org/django" },
  { image: "https://cdn.simpleicons.org/springboot" },
  { image: "https://cdn.simpleicons.org/c" },
  { image: "https://cdn.simpleicons.org/tailwindcss" },
];

const brandLogosGit = Array.from({ length: 20 }, (_, index) => {
  const position = String(index + 1).padStart(2, '0')

  return {
    image: `https://cdn.shadcnstudio.com/ss-assets/template/landing-page/zolt/logo-${position}.png`,
    name: `Tech stack logo ${position}`
  }
})

  return(
    <>
        <HeroSection brandLogos={brandLogos} />
        <LogoCloud brandLogos={brandLogosGit} />
        <Projects/>
    </>
  )
}

export default App
