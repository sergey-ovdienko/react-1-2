import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { heroes, randomizeStatuses, sortHeroes } from "./utils";

const root = ReactDOM.createRoot(document.getElementById("root"));

function renderApp() {
  root.render(<App data={sortHeroes(heroes)} />);
}

renderApp();

setInterval(() => {
  randomizeStatuses();
  renderApp();
}, 15000);
