/**
 * @since 2016-09-04 11:07
 * @author vivaxy
 */

import render, { renderWithEntry } from '../library/render';

import Container from '../container/HorizontalFlex';

render(Container);

if (module.hot) {
    module.hot.accept(`../container/HorizontalFlex`, () => {
        const NewEntry = require(`../container/HorizontalFlex`).default;
        renderWithEntry(NewEntry);
    });
}
