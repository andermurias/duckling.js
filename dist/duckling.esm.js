import 'core-js/modules/es.array.iterator';
import 'core-js/modules/es.map';
import 'core-js/modules/es.object.to-string';
import 'core-js/modules/es.string.iterator';
import 'core-js/modules/web.dom-collections.iterator';
import gsap from 'gsap';

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

var createPointer = function createPointer() {
  var pointer = document.createElement('div');
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
  pointer.style.transform = 'scale(var(--pointerScale)) matrix(1, 0, 0, 1, 0, 0) translate3d(var(--pointerX), var(--pointerY), 10px)';
  pointer.style.transformOrigin = '50%';
  pointer.style.webkitBackfaceVisibility = 'visible';
  pointer.style.zIndex = 'var(--pointerZIndex)';
  document.body.append(pointer);
};

var getProperty = function getProperty(prop) {
  return getComputedStyle(document.documentElement).getPropertyValue(prop);
};
var setProperty = function setProperty(prop, value) {
  return document.documentElement.style.setProperty(prop, value);
};

var setShouldMove = function setShouldMove(shouldMove) {
  return document.documentElement.style.setProperty('--shouldMove', shouldMove ? 1 : 0);
};

var getShouldMove = function getShouldMove() {
  return getComputedStyle(document.documentElement).getPropertyValue('--shouldMove') === '1' ? true : false;
};

var updateProperties = function updateProperties(propperties) {
  var trackPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  setShouldMove(trackPosition !== null ? trackPosition : getShouldMove());
  var cssVars = {
    duration: 0.3
  };

  for (var key in propperties) {
    cssVars['--' + key] = propperties[key];
  }

  gsap.to('html', cssVars);
};
var px = function px(int) {
  return int + 'px';
};
var setProps = function setProps(_ref) {
  var smallPointerSize = _ref.smallPointerSize,
      pointerSize = _ref.pointerSize,
      pointerOpacity = _ref.pointerOpacity,
      pointerBackground = _ref.pointerBackground,
      pointerBorderColor = _ref.pointerBorderColor,
      pointerX = _ref.pointerX,
      pointerY = _ref.pointerY,
      pointerScale = _ref.pointerScale,
      pointerBorderStyle = _ref.pointerBorderStyle,
      pointerBorderWidth = _ref.pointerBorderWidth,
      cursorScale = _ref.cursorScale,
      cursorSize = _ref.cursorSize,
      pointerRadius = _ref.pointerRadius,
      pointerZIndex = _ref.pointerZIndex,
      pointerAnimationDuration = _ref.pointerAnimationDuration;
  var props = {
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
    pointerAnimationDuration: pointerAnimationDuration || 300
  };
  updateProperties(props);
  return props;
};
var getProps = function getProps() {
  return {
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
    pointerAnimationDuration: getProperty('--pointerAnimationDuration')
  };
};

var trackMouse = function trackMouse() {
  var trackMouseOnMove = function trackMouseOnMove(e) {
    if (getShouldMove()) {
      updateProperties({
        pointerX: px(e.x),
        pointerY: px(e.y)
      });
    }
  };

  document.addEventListener('mousemove', trackMouseOnMove);
};

var init = function init() {
  if (getProperty('--pointerInit') !== '') {
    console.warn('Another instance of duckling is already running, duckling should only be running once');
    return {
      interactionConfig: null,
      initialProps: null
    };
  }

  setProperty('--pointerInit', 1);
  setShouldMove(true);
  createPointer();
  var initialProps = setProps({});
  document.documentElement.style.transition = 'ease-out all 300ms';
  trackMouse();
  var interactionConfig = new Map();

  var resetOut = function resetOut() {
    updateProperties(initialProps, true);
  };

  var processCallback = function processCallback(_ref2) {
    var target = _ref2.target,
        callback = _ref2.callback;
    var callbackResponse = callback(target);
    updateProperties(callbackResponse.props, callbackResponse.track);
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
          resetOut();
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
  return {
    interactionConfig: interactionConfig,
    initialProps: initialProps
  };
};

export { getProperty, getProps, init, px, setProperty, setProps, updateProperties };
