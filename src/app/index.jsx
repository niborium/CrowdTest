import React from "react";
import { createRoot } from 'react-dom/client';
import { Footer } from "./components/footer.jsx"
import AdBoard from "./components/adboard.jsx"
import { AdForm } from "./components/adform.jsx";
import { Header } from "./components/header.jsx";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
<div>
    <Header />
    <AdBoard />
    <AdForm />
    <Footer />
</div>
);
