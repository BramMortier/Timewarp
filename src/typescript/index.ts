import "../sass/style.scss";

import "./firebase/firebase";
import "./lib/events";

import { headers } from "./lib/constants";

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    if (scrollTop > lastScrollTop) {
        displayHeader(false);
    } else {
        displayHeader(true);
    }
    lastScrollTop = scrollTop;
});

export const displayHeader = (visible: boolean) => {
    headers.forEach((header: HTMLElement) => {
        header.style.top = `${visible ? "0" : "-4rem"}`;
    });
};
