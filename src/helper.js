import {gsap} from 'gsap/all';

export const propertyPrefix = '--duckling-';

const defaultProperties = {
  pointerX: 0,
  pointerY: 0,
  shouldMove: 1,
  ease: 'power1.out',
  scale: 1,
  rotate: '0deg',
  height: 30,
  width: 30,
  marginLeft: -15,
  marginTop: -15,
  opacity: 1,
  backgroundColor: 'rgba(31,31,31,.3)',
  borderColor: '#000000',
  borderStyle: 'solid',
  borderWidth: '1.5px',
  borderRadius: '100%',
  zIndex: 1000000,
  transitionDuration: '300ms',
  transitionTimingFunction: 'ease',
  transformOrigin: '50%',
};

export const px = (int) => int + 'px';

export const toKebabCase = (str) => str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
export const toCamelCase = (str) => str.replace(/\-([a-z])/g, (letter) => letter[1].toUpperCase());

export const getCssVarKey = (str) => propertyPrefix + toKebabCase(str);

export const getProperty = (prop) => getComputedStyle(document.documentElement).getPropertyValue(getCssVarKey(prop));
export const setProperty = (prop, value) => document.documentElement.style.setProperty(getCssVarKey(prop), value);

export const isPxValue = (value) =>
  ['scale', 'rotate', 'shouldMove', 'opacity', 'transitionDuration'].indexOf(value) === -1;

export const updateProperties = (properties = null) => {
  properties = properties || getProperties();

  const cssVars = {
    duration: parseInt(properties.transitionDuration) / 1000,
    ease: properties.ease,
  };
  for (let key in properties) {
    const value = properties[key];
    cssVars[getCssVarKey(key)] = typeof value === 'number' && isPxValue(key) ? px(value) : value;
  }
  gsap.to('html', cssVars);
};

export const setInitialProperties = (givenProperties) => {
  const properties = {
    ...defaultProperties,
    ...givenProperties,
  };
  updateProperties(properties);
  return properties;
};

export const getProperties = (props) =>
  Object.keys(props).reduce((carry, key) => (carry[key] = getProperty(key)) && carry, {});
