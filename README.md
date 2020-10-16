![Duckling](./docs/static/img/duckling.png)

# duckling
JS cursor followe for websites

---

## How to use

#### Install the depencencies

```bash
  yarn add duckling.js
```

or 

```bash
  npm install --save duckling.js
```

#### Add to your project

Import in your project
```javascript
import {usePointer, helper} from 'duckling.js';
```

Initialize
```javascript
const {initialProperties, interactionConfig} = usePointer();
```

Generate the interactions
```javascript
interactionConfig.set('.nav-item', (elem) => {
  const coordinates = elem.getBoundingClientRect();
  return {
    props: {
      pointerSize: helper.px(parseInt(initialProperties.pointerSize) / 2),
      pointerX: helper.px(coordinates.left + coordinates.width / 2),
      pointerY: helper.px(coordinates.top + coordinates.height + 10),
    },
    track: false,
  };
});
```

`interactionConfig` is a Map class from js sou you can interact with it with methods like `set` or `delete`

## Try it

If you want to test it out, here is a codesnadbox with some examples

[CodeSandbox: https://codesandbox.io/s/duckling-example-v5j9l](https://codesandbox.io/s/duckling-example-v5j9lfile=/src/index.js)
