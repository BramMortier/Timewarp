// ------------------------------------------- //
// module imports
import { modals, pages } from "./constants";
import { pageTransition } from "../animations/pageTransition";
// ------------------------------------------- //

export const navigate = (destinationPage: HTMLElement): void => {
    pageTransition();

    setTimeout(() => {
        destinationPage.classList.add("page--active");

        pages.forEach((page: HTMLElement): void => {
            if (page !== destinationPage) page.classList.remove("page--active");
        });
    }, 650);
};

export const openModal = (targetModal: HTMLElement): void => {
    targetModal.classList.add("overlay--active");
};

export const closeModal = (): void => {
    modals.forEach((modal: HTMLElement): void => {
        modal.classList.remove("overlay--active");
    });
};
