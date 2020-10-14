import {propertyPrefix} from './helper';

export const createPointer = () => {
  const pointer = document.createElement('div');

  pointer.style.setProperty(propertyPrefix + 'pointerPadding', 'calc(var(' + propertyPrefix + 'pointerSize) / 2)');

  pointer.style.background = 'var(' + propertyPrefix + 'pointerBackground)';
  pointer.style.borderWidth = 'var(' + propertyPrefix + 'pointerBorderWidth)';
  pointer.style.borderStyle = 'var(' + propertyPrefix + 'pointerBorderStyle)';
  pointer.style.borderColor = 'var(' + propertyPrefix + 'pointerBorderColor)';
  pointer.style.borderRadius = 'var(' + propertyPrefix + 'pointerRadius)';
  pointer.style.left = '0';
  pointer.style.marginLeft =
    'calc((var(' + propertyPrefix + 'pointerPadding) + var(' + propertyPrefix + 'pointerBorderWidth)) * -1)';
  pointer.style.marginTop =
    'calc((var(' + propertyPrefix + 'pointerPadding) + var(' + propertyPrefix + 'pointerBorderWidth)) * -1)';
  pointer.style.opacity = 'var(' + propertyPrefix + 'pointerOpacity)';
  pointer.style.padding = 'var(' + propertyPrefix + 'pointerPadding)';
  pointer.style.pointerEvents = 'none';

  pointer.style.position = 'fixed';
  pointer.style.top = '0';
  pointer.style.transform =
    'scale(var(' +
    propertyPrefix +
    'pointerScale)) matrix(1, 0, 0, 1, 0, 0) translate3d(var(' +
    propertyPrefix +
    'pointerX), var(' +
    propertyPrefix +
    'pointerY), 10px)';
  pointer.style.transformOrigin = '50%';

  pointer.style.webkitBackfaceVisibility = 'visible';
  pointer.style.zIndex = 'var(' + propertyPrefix + 'pointerZIndex)';

  document.body.append(pointer);
};
