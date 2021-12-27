# Landing Page for Demo Projects

## Introduction

The project defines a unified landing page for demo projects developed by [dlab @ EPFL](https://dlab.epfl.ch/) that are hosted on the external server.


## Usage

### General Information
General information (e.g., the lab website) is defined in ```src/constants.ts```.

```typescript
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
```

To change the general information, simply edit the value field in ```src/constants.ts```.


### Project-specific Information

To modify / add / delete projects, simply edit ```src/projects.ts```. Note that, three fields, ```name, authors, description``` are required to define a project, whereas ```sourceCode, paperLink, demoPage``` are optional.

```typescript
interface Project {
    name: string;
    authors: string;
    description: string;
    sourceCode?: string;
    paperLink?: string;
    demoPage?: string;
}
```

### Test and Deployment
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Hence, it is highly recommended to run / build the project with ```yarn```. Since yarn includes breaking changes between v1 and v2, please note that we use [v1](https://classic.yarnpkg.com/lang/en/docs/install/) in our project.

#### Install Dependencies (required only once)
```bash
# make sure that you have node installed
npm install --global yarn

yarn install
```

#### Run the Project Locally
```bash
yarn start
```

#### Deploy the Project
To run a production build:
```bash
yarn build
```
Everything is ready by now. Simply copy the contents inside ```build/``` folder and the new version is good to go.

## Credits
This project is based on the [cleanfolio](https://github.com/rajshekhar26/cleanfolio). The original project is developed with ```JavaScript``` while this project adopts ```TypeScript``` for better type checks and hints. Other adaptations have been made to localize the project for demonstrating the projects hosted on the server.