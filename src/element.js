import {getCssVarKey} from './helper';

export const createPointer = ({pointerX, pointerY, scale, height, width, ...rest}) => {
  const pointer = document.createElement('div');

  pointer.className = 'duckling__pointer';
  pointer.id = 'duckling-pointer';

  const transitionProperties = [];

  Object.keys({height, width, ...rest}).forEach((element) => {
    pointer.style[element] = `var(${getCssVarKey(element)})`;
    transitionProperties.push(element);
  });

  pointer.style.transitionDuration = 'initial';
  pointer.style.transitionProperty = 'initial';

  pointer.style.transform = `scale(var(${getCssVarKey('scale')})) rotate(var(${getCssVarKey('rotate')}))`;

  pointer.style.left = `var(${getCssVarKey('pointerX')})`;
  pointer.style.top = `var(${getCssVarKey('pointerY')})`;
  pointer.style.position = 'fixed';
  pointer.style.webkitBackfaceVisibility = 'visible';
  pointer.style.pointerEvents = 'none';

  document.body.append(pointer);

  return pointer;
};
