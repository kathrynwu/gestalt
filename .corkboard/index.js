import '!!style!css?importLoaders=1!postcss!../styles.css';
const requireCard = require.context('../src', true, /\-doc\.js$/);
[
  'BoxGrid',
  'Borders',
  'Button',
  'ClassicGrid',
  'Colors',
  'Columns',
  'Cursor',
  'Divider',
  'FlexibleGrid',
  'Heading',
  'Icon',
  'Image',
  'Layout',
  'Mask',
  'Switch',
  'Text',
  'Whitespace',
].forEach(component =>
  requireCard(`./${component}/__docs__/${component}-doc.js`)
);
