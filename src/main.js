import "./style.css";
import { Topic } from "./component/topic/topic.js";
import { IntroCards } from "./component/intro-cards/intro-cards.js";

const app = document.getElementById("app");
app.append(Topic(), IntroCards());
