import { Businessplan } from './business-plan.js';
import { renderProductidea } from "./product-idea.js";
import { Contact } from "./contact-info.js";

export const main = document.getElementById('main');
export const pagetitle = document.getElementById('pagetitle');

const businessplanBtn = document.getElementById('businessplan');
const productideaBtn = document.getElementById('productidea');
const contactBtn = document.getElementById('contact');

businessplanBtn.addEventListener('click', () => {
    const businessplan = new Businessplan();
    businessplan.changeTitle();
    businessplan.render();
})
productideaBtn.addEventListener('click', () => {
    renderProductidea();
})
contactBtn.addEventListener('click', () => {
    const contact = new Contact();
    contact.changeTitle();
    contact.render();
})