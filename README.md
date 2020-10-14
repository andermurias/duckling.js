![Duckling](./docs/static/img/duckling.png)

# duckling
JS cursor followe for websites

---

## How to use

#### Install the depencencies

```bash
  yarn add duckling
```

or 

```bash
  npm install --save duckling
```

#### Add to your project

Import in your project
```javascript
import {usePointer, helper} from 'duckling';
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
