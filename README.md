# react-pianist

react-pianist provides react components to speed up web development

# FEATURE

## common
- support custom style to every component

## components
- HorizontalFlex
- VerticalFlex
- BorderBox
- Toast

# ROADMAP

## components
- form layout
- switchery
- text input, password input, number input
- date input
- file input
- loading
- button
- modal
- etc.

## documents
- list all components in index.html
- demo pages
- props descriptions
- props setting test pages

# HOW TO CONTRIBUTE

## source code

Source code is in `./src` directory. Each component should has its own subdirectory.
Each directory should has an `index.js`, which import js from this folder and export to the outside.

### publish

run `npm run publish`

## docs

## source code

Source code is in `./docs/source` directory. Built files is in `./docs/release`.

### local development

run `npm run docs:dev`

### build release version

run `npm run docs:build`
