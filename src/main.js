import { Contact } from './component/contact-us/contact-us';
import { Comments } from './component/reviews-section/reviews';
import './style.css';

const app = document.getElementById('app');
app.append(Comments(), Contact());
