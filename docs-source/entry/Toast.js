/**
 * @since 2016-09-04 11:08
 * @author vivaxy
 */

import render, { renderWithEntry } from '../library/render';

import Container from '../container/Toast';

render(Container);

if (module.hot) {
    module.hot.accept(`../container/Toast`, () => {
        const NewEntry = require(`../container/Toast`).default;
        renderWithEntry(NewEntry);
    });
}
