// Here we define some common fields that will be displayed on the home page.

// The left top header of the page. Text will be displayed as `title` with a link to the `homepage`
const header = {
    homepage: 'https://dlab.epfl.ch/',
    title: 'dlab @ EPFL',
};

const contact = {
    homepage: 'https://dlab.epfl.ch/',
};

const footer = {
    projectLink: 'https://github.com/epfl-dlab/demo-landing-page',
};

const about = {
    // The title of the home page
    topic: 'Crosslingual Research with Wikipedia',

    affiliation: 'dlab @ EPFL, Switzerland',

    // An introductory paragraph to the home page
    description: `This page gives an overview of crosslingual research projects with Wikipedia conducted by dlab @ EPFL.
        `,

    // Some external links to the group page
    social: {
        homepage: 'https://dlab.epfl.ch/',
        github: 'https://github.com/epfl-dlab/',
        mail: 'robert.west@epfl.ch',
    },
};

export { header, footer, contact, about };
