import HeroSection from './components/shadcn-studio/blocks/hero-section-44/hero-section-44'

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

  return(
    <>
        <HeroSection brandLogos={brandLogos} />
    </>
  )
}

export default App
