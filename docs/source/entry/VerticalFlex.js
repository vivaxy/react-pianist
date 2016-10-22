/**
 * @since 2016-09-04 10:20
 * @author vivaxy
 */

import render, { renderWithEntry } from '../library/render';

import Container from '../container/VerticalFlex';

render(Container);

if (module.hot) {
    module.hot.accept(`../container/VerticalFlex`, () => {
        const NewEntry = require(`../container/VerticalFlex`).default;
        renderWithEntry(NewEntry);
    });
}
