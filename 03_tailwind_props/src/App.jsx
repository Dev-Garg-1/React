import './App.css'
import Card from './components/card'

function App() {
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card username='Dev' btnText='hello bother'/>
      <Card username='radha'/>
    </>
  )
}

export default App
