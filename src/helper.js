import gsap from 'gsap';

export const propertyPrefix = '--dck-';

export const px = (int) => int + 'px';

export const getProperty = (prop) => getComputedStyle(document.documentElement).getPropertyValue(propertyPrefix + prop);
export const setProperty = (prop, value) => document.documentElement.style.setProperty(propertyPrefix + prop, value);

export const updateProperties = (properties = null) => {
  properties = properties || getProperties();

  const cssVars = {
    duration: properties.pointerAnimationDuration / 1000,
  };
  for (let key in properties) {
    cssVars[propertyPrefix + key] = properties[key];
  }
  gsap.to('html', cssVars);
};

export const setInitialProperties = ({
  smallPointerSize = '5px',
  pointerSize = '30px',
  pointerOpacity = 1,
  pointerBackground = 'rgba(31,31,31,.3)',
  pointerBorderColor = '#000000',
  pointerScale = 1,
  pointerX = 0,
  pointerY = 0,
  pointerBorderStyle = 'solid',
  pointerBorderWidth = '1.5px',
  pointerRadius = '100%',
  pointerZIndex = 1000000000,
  pointerAnimationDuration = 300,
  shouldMove = 1,
}) => {
  const props = {
    smallPointerSize: smallPointerSize,
    pointerSize: pointerSize,
    pointerOpacity: pointerOpacity,
    pointerBackground: pointerBackground,
    pointerBorderColor: pointerBorderColor,
    pointerX: pointerY,
    pointerY: pointerX,
    pointerScale: pointerScale,
    pointerBorderStyle: pointerBorderStyle,
    pointerBorderWidth: pointerBorderWidth,
    pointerRadius: pointerRadius,
    pointerZIndex: pointerZIndex,
    pointerAnimationDuration: pointerAnimationDuration,
    shouldMove: shouldMove,
  };

  updateProperties(props);

  return props;
};

export const getProperties = () => ({
  smallPointerSize: getProperty('smallPointerSize'),
  pointerSize: getProperty('pointerSize'),
  pointerOpacity: getProperty('pointerOpacity'),
  pointerBackground: getProperty('pointerBackground'),
  pointerBorderColor: getProperty('pointerBorderColor'),
  pointerX: getProperty('pointerX'),
  pointerY: getProperty('pointerY'),
  pointerScale: getProperty('pointerScale'),
  pointerBorderStyle: getProperty('pointerBorderStyle'),
  pointerBorderWidth: getProperty('pointerBorderWidth'),
  pointerRadius: getProperty('pointerRadius'),
  pointerZIndex: getProperty('pointerZIndex'),
  pointerAnimationDuration: getProperty('pointerAnimationDuration'),
  shouldMove: getProperty('shouldMove'),
});
