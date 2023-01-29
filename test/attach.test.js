const fs = require('fs');
const path = require('path');

const { addAttach } = require('jest-html-reporters/helper');
const resolve = (relatePath) => path.resolve(__dirname, relatePath);

test("attach《卧龙吟》", async () => {
  await addAttach({
    attach: await fs.readFileSync(resolve('./images/1.jpg')),
    description: '清风',
  });
  await addAttach({
    attach: await fs.readFileSync(resolve('./images/2.jpg')),
    description: '明月',
  });
  await addAttach({
    attach: await fs.readFileSync(resolve('./images/3.jpg')),
    description: '入怀抱',
  });

  expect(3).toBe(3);
});