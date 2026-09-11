import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { salvaParametriCampagna } from "./lib/eicForm";

// UTM / gclid / fbclid dell'atterraggio: il form li riceve anche se è su un'altra pagina.
salvaParametriCampagna();

createRoot(document.getElementById("root")!).render(<App />);
