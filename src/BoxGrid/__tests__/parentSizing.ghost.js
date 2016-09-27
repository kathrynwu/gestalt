/* global describe */
/* global it */
import assert from 'assert';
import ghost from 'ghostjs';

const selectors = {
  gridItem: '[class^="Grid__Grid__Item"]',
};

describe('BoxGrid > Parent Sizing', () => {
  it('The grid starts from the left bounding box of the parent', async () => {
    await ghost.open('http://localhost:3000/boxpacking/?finiteLength=1&constrained=1');
    await ghost.script(() => {
      window.dispatchEvent(new CustomEvent('trigger-mount'));
    });

    // Assert that all items follow the indentation of the grid.
    const gridItems = await ghost.findElements(selectors.gridItem);

    // Hard-coded in the ExampleGrid component.
    const EXPECTED_LEFT_MARGIN = 200;

    for (let i = 0; i < gridItems.length; i++) {
      const itemRect = await gridItems[i].rect();
      assert.ok(itemRect.left >= EXPECTED_LEFT_MARGIN);
    }
  });
});
