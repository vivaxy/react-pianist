# react-pianist

react-pianist provides react components to speed up web development

# DOCUMENTS

[react-pianist](https://vivaxy.github.io/react-pianist)

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
- text input, password input, number input
- date input
- file input
- loading
- modal
- etc.

## documents
- demo pages
- props descriptions
- props setting test pages

# HOW TO CONTRIBUTE

## source code

Source code is in `./source` directory. Each component should has its own subdirectory.
Each directory should has an `index.js`, which import js from this folder and export to the outside.

### class name definition

with `react-pianist-` as prefix

### publish

run `npm run publish`

## docs

## source code

source code is in `./docs/source` directory. Built files is in `./docs/release`

### local development

run `npm run dev`
open `http://127.0.0.1:8085/docs/release/html/List.html` in browser

### build release version

run `npm run docs`
