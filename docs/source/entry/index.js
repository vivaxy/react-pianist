/**
 * @since 2016-09-06 14:36
 * @author vivaxy
 */

import render, { renderWithEntry } from '../library/render';

import Container from '../container/index';

render(Container);

if (module.hot) {
    module.hot.accept(`../container/index`, () => {
        const NewEntry = require(`../container/index`).default;
        renderWithEntry(NewEntry);
    });
}
