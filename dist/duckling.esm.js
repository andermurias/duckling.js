import 'core-js/modules/es.array.iterator';
import 'core-js/modules/es.map';
import 'core-js/modules/es.object.to-string';
import 'core-js/modules/es.string.iterator';
import 'core-js/modules/web.dom-collections.iterator';
import 'core-js/modules/es.array.concat';
import 'core-js/modules/es.array.for-each';
import 'core-js/modules/es.object.keys';
import 'core-js/modules/web.dom-collections.for-each';
import 'core-js/modules/es.array.index-of';
import 'core-js/modules/es.array.reduce';
import 'core-js/modules/es.regexp.exec';
import 'core-js/modules/es.string.replace';
import { gsap } from 'gsap/all';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var propertyPrefix = '--duckling-';
var defaultProperties = {
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
  transformOrigin: '50%'
};
var px = function px(int) {
  return int + 'px';
};
var toKebabCase = function toKebabCase(str) {
  return str.replace(/[A-Z]/g, function (letter) {
    return "-".concat(letter.toLowerCase());
  });
};
var getCssVarKey = function getCssVarKey(str) {
  return propertyPrefix + toKebabCase(str);
};
var getProperty = function getProperty(prop) {
  return getComputedStyle(document.documentElement).getPropertyValue(getCssVarKey(prop));
};
var setProperty = function setProperty(prop, value) {
  return document.documentElement.style.setProperty(getCssVarKey(prop), value);
};
var isPxValue = function isPxValue(value) {
  return ['scale', 'rotate', 'shouldMove', 'opacity', 'transitionDuration'].indexOf(value) === -1;
};
var updateProperties = function updateProperties() {
  var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  properties = properties || getProperties();
  var cssVars = {
    duration: parseInt(properties.transitionDuration) / 1000,
    ease: properties.ease
  };

  for (var key in properties) {
    var value = properties[key];
    cssVars[getCssVarKey(key)] = typeof value === 'number' && isPxValue(key) ? px(value) : value;
  }

  gsap.to('html', cssVars);
};
var setInitialProperties = function setInitialProperties(givenProperties) {
  var properties = _objectSpread2(_objectSpread2({}, defaultProperties), givenProperties);

  updateProperties(properties);
  return properties;
};
var getProperties = function getProperties(props) {
  return Object.keys(props).reduce(function (carry, key) {
    return (carry[key] = getProperty(key)) && carry;
  }, {});
};

var createPointer = function createPointer(_ref) {
  var pointerX = _ref.pointerX,
      pointerY = _ref.pointerY,
      scale = _ref.scale,
      height = _ref.height,
      width = _ref.width,
      rest = _objectWithoutProperties(_ref, ["pointerX", "pointerY", "scale", "height", "width"]);

  var pointer = document.createElement('div');
  pointer.className = 'duckling__pointer';
  pointer.id = 'duckling-pointer';
  Object.keys(_objectSpread2({
    height: height,
    width: width
  }, rest)).forEach(function (element) {
    pointer.style[element] = "var(".concat(getCssVarKey(element), ")");
  });
  pointer.style.transitionDuration = 'initial';
  pointer.style.transitionProperty = 'initial';
  pointer.style.transform = "scale(var(".concat(getCssVarKey('scale'), ")) rotate(var(").concat(getCssVarKey('rotate'), "))");
  pointer.style.left = "var(".concat(getCssVarKey('pointerX'), ")");
  pointer.style.top = "var(".concat(getCssVarKey('pointerY'), ")");
  pointer.style.position = 'fixed';
  pointer.style.webkitBackfaceVisibility = 'visible';
  pointer.style.pointerEvents = 'none';
  document.body.append(pointer);
  return pointer;
};

var usePointer = function usePointer() {
  var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (getProperty('pointerInit') !== '') {
    console.warn('Another instance of duckling is already running, duckling should only be running once');
    return {
      pointer: null,
      interactionConfig: null,
      initialProperties: null
    };
  }

  setProperty('pointerInit', 1);
  var initialProperties = setInitialProperties(properties);
  var pointer = createPointer(initialProperties);

  var state = _objectSpread2({}, initialProperties);

  var setState = function setState(newState) {
    state = _objectSpread2(_objectSpread2({}, state), newState);
  };

  document.documentElement.style.transition = 'ease-out all 300ms';

  var trackMouseOnMove = function trackMouseOnMove(e) {
    if (state.shouldMove) {
      setState({
        pointerX: px(e.x),
        pointerY: px(e.y)
      });
    }
  };

  document.addEventListener('mousemove', trackMouseOnMove);
  var interactionConfig = new Map();

  var processCallback = function processCallback(_ref) {
    var target = _ref.target,
        callback = _ref.callback;
    var callbackResponse = callback(target);
    setState(_objectSpread2(_objectSpread2({}, callbackResponse.props), {}, {
      shouldMove: callbackResponse.track
    }));
  };

  var checkSeletorsAndDispatchCallback = function checkSeletorsAndDispatchCallback(event) {
    var _iterator = _createForOfIteratorHelper(interactionConfig),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
            selector = _step$value[0],
            callback = _step$value[1];

        var closest = event.target.closest(selector);

        if (!!closest) {
          processCallback({
            target: closest,
            callback: callback
          });
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  var checkSeletorsAndResetVars = function checkSeletorsAndResetVars(event) {
    var _iterator2 = _createForOfIteratorHelper(interactionConfig),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _step2$value = _slicedToArray(_step2.value, 2),
            selector = _step2$value[0],
            callback = _step2$value[1];

        if (!!event.target.closest(selector)) {
          setState(_objectSpread2({}, initialProperties));
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  };

  document.removeEventListener('mouseover', checkSeletorsAndDispatchCallback, false);
  document.removeEventListener('mouseout', checkSeletorsAndResetVars, false);
  document.addEventListener('mouseover', checkSeletorsAndDispatchCallback, false);
  document.addEventListener('mouseout', checkSeletorsAndResetVars, false);

  var updatePropertiesForAnimationFrame = function updatePropertiesForAnimationFrame() {
    updateProperties(state);
    requestAnimationFrame(updatePropertiesForAnimationFrame);
  };

  requestAnimationFrame(updatePropertiesForAnimationFrame);
  return {
    pointer: pointer,
    interactionConfig: interactionConfig,
    initialProperties: initialProperties
  };
};

var helper = {
  px: px
};
var index = {
  usePointer: usePointer,
  helper: helper
};

export default index;
