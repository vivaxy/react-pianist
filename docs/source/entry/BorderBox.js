/**
 * @since 2016-09-04 11:08
 * @author vivaxy
 */

import render, { renderWithEntry } from '../library/render';

import Container from '../container/BorderBox';

render(Container);

if (module.hot) {
    module.hot.accept(`../container/BorderBox`, () => {
        const NewEntry = require(`../container/BorderBox`).default;
        renderWithEntry(NewEntry);
    });
}
