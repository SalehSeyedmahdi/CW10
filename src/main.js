import { Header } from './component/header/header';
import { Hero } from './component/hero/hero';
import './style.css'

const app = document.getElementById('app');

app.append(Header(), Hero());