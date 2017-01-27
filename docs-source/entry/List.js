/**
 * @since 2016-09-04 09:19
 * @author vivaxy
 */

import render, { renderWithEntry } from '../library/render';

import Container from '../container/List';

render(Container);

if (module.hot) {
    module.hot.accept(`../container/List`, () => {
        const NewEntry = require(`../container/List`).default;
        renderWithEntry(NewEntry);
    });
}
