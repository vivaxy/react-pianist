/**
 * @since 2016-09-06 08:40
 * @author vivaxy
 */

import render, { renderWithEntry } from '../library/render';

import Container from '../container/Button';

render(Container);

if (module.hot) {
    module.hot.accept(`../container/Button`, () => {
        const NewEntry = require(`../container/Button`).default;
        renderWithEntry(NewEntry);
    });
}
