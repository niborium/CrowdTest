import React from "react";
import { createRoot } from 'react-dom/client';
import { Footer } from "./components/footer.jsx"
import AdBoard from "./components/adboard.jsx"
import { AdForm } from "./components/adform.jsx";
import { Menu } from "./components/menu.jsx";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
<div>
    <Menu />
    <AdBoard />
    <AdForm />
    <Footer />
</div>
);
