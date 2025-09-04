# WebPlayground

This repository serves as a personal playground to try out new things, play around, and show (part of) my capabilities in coding.

## Tech-Stack

The core application is a [node.js](https://nodejs.org) [express](https://expressjs.com/) server, together with a [vue.js](https://vuejs.org/) frontend.

## Access to Website

A [docker](https://www.docker.com/) container built from this repo is deployed to [Microsoft Azure](https://azure.microsoft.com/) and can be accessed online [here](https://finnkowebplayground-e0bfadfngdb8ezej.germanywestcentral-01.azurewebsites.net/). As I do not pay for Azure, it only has limited computing resources and is rather slow.

## Project Setup

To run the server on your local machine, you need to install [node.js](https://nodejs.org/en/download) and install the dependencies in the `root` directory, as well as the `src/client` directory.
This can be done by running

```
npm install && cd src/client && npm install
```

It is highly encouraged to use [Visual Studio Code](https://code.visualstudio.com/) as an IDE, and installing all the recommended extensions defined in the [`extensions.json`](https://github.com/Finn-Ko/WebPlayground/blob/main/.vscode/extensions.json), for the best development tooling experience (these will be suggested to you automatically).

## Scripts

For an exhaustive list of runnable commands, check out the [`package.json`](https://github.com/Finn-Ko/WebPlayground/blob/main/package.json) and [`src/client/package.json`](https://github.com/Finn-Ko/WebPlayground/blob/main/src/client/package.json) files.

The most useful one is probably:

```
npm run dev
```

It will start a development server, allowing you to access the website on you local machine at [http://localhost:3000/](). It will also watch the directory files (for the client as well as the server) for changes and automatically rebuild and restart on changes.

## CI/CD Pipeline

Pushing to the main branch will automatically check the project for build errors, run [eslint](https://eslint.org/) and [prettier](https://prettier.io/) code formatting.

I'm currently working on automatically deploying to azure using github actions.

## Contributions

As this is a personal project, contribution by others is not intended. However, you are free to fork the code and use it as you wish (in accordance to my MIT license). Feel free to report issues [here](https://github.com/Finn-Ko/WebPlayground/issues).
