import './App.css'
import NavBar from './components/Navbar'
import Card from './components/Card'

function App() {
  return (
    <>
      <div className='min-w-full'>
        <NavBar />
      </div>

      <div className="p-4 space-y-4">
            <Card
              title="A Call from the Abyss"
              description="Awash in imagination, Aya Takano’s 'A Call From the Abyss' transports us to a magical world where boundaries are limitless. Imagine: you stand amidst a vibrant sea, not of water, but of a rainbow palette teeming with fantastical creatures."
              imageUrl="https://www.singulart.com/blog/wp-content/uploads/2024/04/A-Call-from-the-Abyss.jpg"
            />
            <Card
              title="Sky is the Limit"
              description="On a deeper level, 'Sky is the Limit' delves into existential themes. It prompts us to contemplate the mysteries of the universe and humankind. Takano’s paintings depict weightless forms in celestial environments. These serve as a reminder to pause and reflect on the essence of reality, the impermanence of time, and the boundless human spirit. The artwork becomes a focal point for philosophical inquiry, inviting viewers to ponder life’s most fundamental questions as they engage with the captivating art."
              imageUrl="https://www.singulart.com/blog/wp-content/uploads/2024/04/Sky-is-the-Limit.jpg"
            />
          </div>
    </>
  )
}

export default App
