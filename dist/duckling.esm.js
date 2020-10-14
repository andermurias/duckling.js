import 'core-js/modules/es.array.iterator';
import 'core-js/modules/es.map';
import 'core-js/modules/es.object.to-string';
import 'core-js/modules/es.string.iterator';
import 'core-js/modules/web.dom-collections.iterator';
import gsap from 'gsap';

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

var propertyPrefix = '--dck-';
var px = function px(int) {
  return int + 'px';
};
var getProperty = function getProperty(prop) {
  return getComputedStyle(document.documentElement).getPropertyValue(propertyPrefix + prop);
};
var setProperty = function setProperty(prop, value) {
  return document.documentElement.style.setProperty(propertyPrefix + prop, value);
};
var updateProperties = function updateProperties() {
  var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  properties = properties || getProperties();
  var cssVars = {
    duration: properties.pointerAnimationDuration / 1000
  };

  for (var key in properties) {
    cssVars[propertyPrefix + key] = properties[key];
  }

  gsap.to('html', cssVars);
};
var setInitialProperties = function setInitialProperties(_ref) {
  var _ref$smallPointerSize = _ref.smallPointerSize,
      smallPointerSize = _ref$smallPointerSize === void 0 ? '5px' : _ref$smallPointerSize,
      _ref$pointerSize = _ref.pointerSize,
      pointerSize = _ref$pointerSize === void 0 ? '30px' : _ref$pointerSize,
      _ref$pointerOpacity = _ref.pointerOpacity,
      pointerOpacity = _ref$pointerOpacity === void 0 ? 1 : _ref$pointerOpacity,
      _ref$pointerBackgroun = _ref.pointerBackground,
      pointerBackground = _ref$pointerBackgroun === void 0 ? 'rgba(31,31,31,.3)' : _ref$pointerBackgroun,
      _ref$pointerBorderCol = _ref.pointerBorderColor,
      pointerBorderColor = _ref$pointerBorderCol === void 0 ? '#000000' : _ref$pointerBorderCol,
      _ref$pointerScale = _ref.pointerScale,
      pointerScale = _ref$pointerScale === void 0 ? 1 : _ref$pointerScale,
      _ref$pointerX = _ref.pointerX,
      pointerX = _ref$pointerX === void 0 ? 0 : _ref$pointerX,
      _ref$pointerY = _ref.pointerY,
      pointerY = _ref$pointerY === void 0 ? 0 : _ref$pointerY,
      _ref$pointerBorderSty = _ref.pointerBorderStyle,
      pointerBorderStyle = _ref$pointerBorderSty === void 0 ? 'solid' : _ref$pointerBorderSty,
      _ref$pointerBorderWid = _ref.pointerBorderWidth,
      pointerBorderWidth = _ref$pointerBorderWid === void 0 ? '1.5px' : _ref$pointerBorderWid,
      _ref$pointerRadius = _ref.pointerRadius,
      pointerRadius = _ref$pointerRadius === void 0 ? '100%' : _ref$pointerRadius,
      _ref$pointerZIndex = _ref.pointerZIndex,
      pointerZIndex = _ref$pointerZIndex === void 0 ? 1000000000 : _ref$pointerZIndex,
      _ref$pointerAnimation = _ref.pointerAnimationDuration,
      pointerAnimationDuration = _ref$pointerAnimation === void 0 ? 300 : _ref$pointerAnimation,
      _ref$shouldMove = _ref.shouldMove,
      shouldMove = _ref$shouldMove === void 0 ? 1 : _ref$shouldMove;
  var props = {
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
    shouldMove: shouldMove
  };
  updateProperties(props);
  return props;
};
var getProperties = function getProperties() {
  return {
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
    shouldMove: getProperty('shouldMove')
  };
};

var createPointer = function createPointer() {
  var pointer = document.createElement('div');
  pointer.style.setProperty(propertyPrefix + 'pointerPadding', 'calc(var(' + propertyPrefix + 'pointerSize) / 2)');
  pointer.style.background = 'var(' + propertyPrefix + 'pointerBackground)';
  pointer.style.borderWidth = 'var(' + propertyPrefix + 'pointerBorderWidth)';
  pointer.style.borderStyle = 'var(' + propertyPrefix + 'pointerBorderStyle)';
  pointer.style.borderColor = 'var(' + propertyPrefix + 'pointerBorderColor)';
  pointer.style.borderRadius = 'var(' + propertyPrefix + 'pointerRadius)';
  pointer.style.left = '0';
  pointer.style.marginLeft = 'calc((var(' + propertyPrefix + 'pointerPadding) + var(' + propertyPrefix + 'pointerBorderWidth)) * -1)';
  pointer.style.marginTop = 'calc((var(' + propertyPrefix + 'pointerPadding) + var(' + propertyPrefix + 'pointerBorderWidth)) * -1)';
  pointer.style.opacity = 'var(' + propertyPrefix + 'pointerOpacity)';
  pointer.style.padding = 'var(' + propertyPrefix + 'pointerPadding)';
  pointer.style.pointerEvents = 'none';
  pointer.style.position = 'fixed';
  pointer.style.top = '0';
  pointer.style.transform = 'scale(var(' + propertyPrefix + 'pointerScale)) matrix(1, 0, 0, 1, 0, 0) translate3d(var(' + propertyPrefix + 'pointerX), var(' + propertyPrefix + 'pointerY), 10px)';
  pointer.style.transformOrigin = '50%';
  pointer.style.webkitBackfaceVisibility = 'visible';
  pointer.style.zIndex = 'var(' + propertyPrefix + 'pointerZIndex)';
  document.body.append(pointer);
};

var helper = {
  px: px
};

var usePointer = function usePointer() {
  var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (getProperty('pointerInit') !== '') {
    console.warn('Another instance of duckling is already running, duckling should only be running once');
    return {
      interactionConfig: null,
      initialProps: null
    };
  }

  setProperty('pointerInit', 1);
  createPointer();
  var initialProperties = setInitialProperties(properties);

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
    interactionConfig: interactionConfig,
    initialProperties: initialProperties
  };
};

var index = {
  usePointer: usePointer,
  helper: helper
};

export default index;
