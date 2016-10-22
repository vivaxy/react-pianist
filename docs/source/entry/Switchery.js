/**
 * @since 2016-09-06 08:40
 * @author vivaxy
 */

import render, { renderWithEntry } from '../library/render';

import Container from '../container/Switchery';

render(Container);

if (module.hot) {
    module.hot.accept(`../container/Switchery`, () => {
        const NewEntry = require(`../container/Switchery`).default;
        renderWithEntry(NewEntry);
    });
}
