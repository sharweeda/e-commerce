
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import "flowbite/dist/flowbite.min.js"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById('root')).render(
    <App />
)
