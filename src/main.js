import gsap from 'gsap';
import {createPointer} from './element';

export const getProperty = (prop) => getComputedStyle(document.documentElement).getPropertyValue(prop);
export const setProperty = (prop, value) => document.documentElement.style.setProperty(prop, value);

const setShouldMove = (shouldMove) => document.documentElement.style.setProperty('--shouldMove', shouldMove ? 1 : 0);

const getShouldMove = () =>
  getComputedStyle(document.documentElement).getPropertyValue('--shouldMove') === '1' ? true : false;

export const updateProperties = (propperties, trackPosition = null) => {
  setShouldMove(trackPosition !== null ? trackPosition : getShouldMove());
  const cssVars = {
    duration: 0.3,
  };
  for (let key in propperties) {
    cssVars['--' + key] = propperties[key];
  }

  gsap.to('html', cssVars);
};

export const px = (int) => int + 'px';

export const setProps = ({
  smallPointerSize,
  pointerSize,
  pointerOpacity,
  pointerBackground,
  pointerBorderColor,
  pointerX,
  pointerY,
  pointerScale,
  pointerBorderStyle,
  pointerBorderWidth,
  cursorScale,
  cursorSize,
  pointerRadius,
  pointerZIndex,
  pointerAnimationDuration,
}) => {
  const props = {
    smallPointerSize: smallPointerSize || '5px',
    pointerSize: pointerSize || '30px',
    pointerOpacity: pointerOpacity || 1,
    pointerBackground: pointerBackground || 'rgba(31,31,31,.3)',
    pointerBorderColor: pointerBorderColor || '#000000',
    // pointerX: pointerX || '50%',
    // pointerY: pointerY || '50%',
    pointerScale: pointerScale || 1,
    pointerBorderStyle: pointerBorderStyle || '1.5px',
    pointerBorderWidth: pointerBorderWidth || '1.5px',
    cursorScale: cursorScale || 1,
    cursorSize: cursorSize || '5px',
    pointerRadius: pointerRadius || '100%',
    pointerZIndex: pointerZIndex || 1000000000,
    pointerAnimationDuration: pointerAnimationDuration || 300,
  };

  updateProperties(props);

  return props;
};

export const getProps = () => ({
  smallPointerSize: getProperty('--smallPointerSize'),
  pointerSize: getProperty('--pointerSize'),
  pointerOpacity: getProperty('--pointerOpacity'),
  pointerBackground: getProperty('--pointerBackground'),
  pointerBorderColor: getProperty('--pointerBorderColor'),
  pointerX: getProperty('--pointerX'),
  pointerY: getProperty('--pointerY'),
  pointerScale: getProperty('--pointerScale'),
  pointerBorderStyle: getProperty('--pointerBorderStyle'),
  pointerBorderWidth: getProperty('--pointerBorderWidth'),
  cursorScale: getProperty('--cursorScale'),
  cursorSize: getProperty('--cursorSize'),
  pointerRadius: getProperty('--pointerRadius'),
  pointerZIndex: getProperty('--pointerZIndex'),
  pointerAnimationDuration: getProperty('--pointerAnimationDuration'),
});

const trackMouse = () => {
  const trackMouseOnMove = (e) => {
    if (getShouldMove()) {
      updateProperties({
        pointerX: px(e.x),
        pointerY: px(e.y),
      });
    }
  };

  document.addEventListener('mousemove', trackMouseOnMove);
};

export const init = () => {
  if (getProperty('--pointerInit') !== '') {
    console.warn('Another instance of duckling is already running, duckling should only be running once');
    return {
      interactionConfig: null,
      initialProps: null,
    };
  }
  setProperty('--pointerInit', 1);

  const position = {x: 0, y: 0};

  setShouldMove(true);
  createPointer();
  const initialProps = setProps({});

  document.documentElement.style.transition = 'ease-out all 300ms';

  trackMouse();

  const interactionConfig = new Map();

  const resetOut = () => {
    updateProperties(initialProps, true);
  };

  const processCallback = ({target, callback}) => {
    const callbackResponse = callback(target);
    updateProperties(callbackResponse.props, callbackResponse.track);
  };

  const checkSeletorsAndDispatchCallback = (event) => {
    for (let [selector, callback] of interactionConfig) {
      const closest = event.target.closest(selector);
      if (!!closest) {
        processCallback({target: closest, callback: callback});
      }
    }
  };

  const checkSeletorsAndResetVars = (event) => {
    for (let [selector, callback] of interactionConfig) {
      if (!!event.target.closest(selector)) {
        resetOut();
      }
    }
  };

  document.removeEventListener('mouseover', checkSeletorsAndDispatchCallback, false);
  document.removeEventListener('mouseout', checkSeletorsAndResetVars, false);

  document.addEventListener('mouseover', checkSeletorsAndDispatchCallback, false);
  document.addEventListener('mouseout', checkSeletorsAndResetVars, false);

  return {
    interactionConfig,
    initialProps,
  };
};
