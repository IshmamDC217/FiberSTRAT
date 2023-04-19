import Home from './pages/Home';
import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Stratocaster from './Stratocaster.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas>
        <Stratocaster />
    </Canvas>
)