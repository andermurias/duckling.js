export const createPointer = () => {
  const pointer = document.createElement('div');

  pointer.style.setProperty('--pointerPadding', 'calc(var(--pointerSize) / 2)');

  pointer.style.background = 'var(--pointerBackground)';
  pointer.style.borderWidth = 'var(--pointerBorderWidth)';
  pointer.style.borderStyle = 'var(--pointerBorderStyle)';
  pointer.style.borderColor = 'var(--pointerBorderColor)';
  pointer.style.borderRadius = 'var(--pointerRadius)';
  pointer.style.left = '0';
  pointer.style.marginLeft = 'calc((var(--pointerPadding) + var(--pointerBorderWidth)) * -1)';
  pointer.style.marginTop = 'calc((var(--pointerPadding) + var(--pointerBorderWidth)) * -1)';
  pointer.style.opacity = 'var(--pointerOpacity)';
  pointer.style.padding = 'var(--pointerPadding)';
  pointer.style.pointerEvents = 'none';

  pointer.style.position = 'fixed';
  pointer.style.top = '0';
  pointer.style.transform =
    'scale(var(--pointerScale)) matrix(1, 0, 0, 1, 0, 0) translate3d(var(--pointerX), var(--pointerY), 10px)';
  pointer.style.transformOrigin = '50%';

  pointer.style.webkitBackfaceVisibility = 'visible';
  pointer.style.zIndex = 'var(--pointerZIndex)';

  document.body.append(pointer);
};
