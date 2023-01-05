import { markdownContent } from "./constants";

const sampleText = `
# Title
## Subheading
this is some **random** text.

* list item
* another list item
* last item

more text

* apples
* bananas

* desktop
* keyboard
* mouse

1 Bram
2 Sander
3 Jasper

'''javascript
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
'''
`;

export const parseMarkdown = (markdown: string): string => {
    let result = markdown
        .replace(/^# (.*)/gm, `<h4 class="md__heading">$1</h4>`)
        .replace(/^## (.*)/gm, `<h5 class="md__subheading">$1</h5>`)
        .replace(/\*\*(.*)\*\*/gim, `<b class="bold">$1</b>`)

        .replace(/[\']{3}(.*)([^\`]+)[\']{3}/g, `<pre>\n<code class="$1">$2<code>\n<pre>`)

        .replace(/^[0-9] (.*)/gm, `<li class="md__ol-item">$1</li>`)
        .replace(/(<li class="md__ol-item">.*<\/li>\n?)+/g, `<ol class="md__ol">\n$&</ol>\n`)

        .replace(/^\* (.*)/gm, `<li class="md__ul-item">$1</li>`)
        .replace(/(<li class="md__ul-item">.*<\/li>\n?)+/g, `<ul class="md__ul">\n$&</ul>\n`);

    return result;
};

export const insertHeading = (): void => {
    markdownContent.innerHTML += `# Title </br>`;
};

export const insertSubtitle = (): void => {
    markdownContent.innerHTML += `## Subtitle </br>`;
};

export const insertList = (): void => {
    markdownContent.innerHTML += `
    * list item </br>
    * list item </br>
    * list item </br>
    `;
};

export const insertCode = (): void => {
    markdownContent.innerHTML += `
    '''language </br>
    place your code </br>
    ''' </br>
    `;
};

parseMarkdown(sampleText);
