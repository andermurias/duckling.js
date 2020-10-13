import gsap from 'gsap';

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
  return document.documentElement.style.setProperty(prop, vlue);
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
      pointerZIndex = _ref.pointerZIndex;
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
    pointerZIndex: pointerZIndex || 1000000000
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
    pointerZIndex: getProperty('--pointerZIndex')
  };
};
var init = function init() {
  setShouldMove(true);
  createPointer();
  var initialProps = setProps({});
  console.log(initialProps);
  document.documentElement.style.transition = 'ease-out all 300ms';

  var launch = function launch() {

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

  launch();

  var loadInteractionListeners = function loadInteractionListeners(interactionConfig) {
    var resetOut = function resetOut() {
      updateProperties(initialProps, true);
    };

    var processCallback = function processCallback(current) {
      return function (callback) {
        return function () {
          var callbackResponse = callback(current);
          updateProperties(callbackResponse.props, callbackResponse.track);
        };
      };
    };

    var _loop = function _loop(selector) {
      var callback = interactionConfig[selector];
      var elems = document.querySelectorAll(selector);
      elems.forEach(function (current) {
        current.removeEventListener('mouseover', processCallback(current)(callback));
        current.addEventListener('mouseover', processCallback(current)(callback));
        current.removeEventListener('mouseout', resetOut);
        current.addEventListener('mouseout', resetOut);
      });
    };

    for (var selector in interactionConfig) {
      _loop(selector);
    }
  };

  return {
    loadInteractionListeners: loadInteractionListeners,
    initialProps: initialProps
  };
};

export { getProperty, getProps, init, px, setProperty, setProps, updateProperties };
