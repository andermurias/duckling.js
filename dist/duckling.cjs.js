'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var gsap = _interopDefault(require('gsap'));

console.log('Hello');

var setShouldMove = function setShouldMove(shouldMove) {
  return document.documentElement.style.setProperty('--shouldMove', shouldMove ? 1 : 0);
};

var updateProperties = function updateProperties(propperties) {
  var trackPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  shouldMove = trackPosition !== null ? trackPosition : shouldMove;
  var cssVars = {
    duration: 0.3
  };

  for (var key in propperties) {
    cssVars['--' + key] = propperties[key];
  }

  gsap.to('html', cssVars);
};
var getProperty = function getProperty(prop) {
  return getComputedStyle(document.documentElement).getPropertyValue(prop);
};
var setProperty = function setProperty(prop) {
  return getComputedStyle(document.documentElement).setProperty(prop);
};
var setProps = function setProps(_ref) {
  var smallPointerSize = _ref.smallPointerSize,
      pointerSize = _ref.pointerSize,
      pointerOpacity = _ref.pointerOpacity,
      pointerBackground = _ref.pointerBackground,
      pointerBorderColor = _ref.pointerBorderColor;
  return updateProperties({
    smallPointerSize: smallPointerSize,
    pointerSize: pointerSize,
    pointerOpacity: pointerOpacity,
    pointerBackground: pointerBackground,
    pointerBorderColor: pointerBorderColor
  });
};
var getProps = function getProps() {
  return {
    smallPointerSize: getProperty('--smallPointerSize'),
    pointerSize: getProperty('--pointerSize'),
    pointerOpacity: getProperty('--pointerOpacity'),
    pointerBackground: getProperty('--pointerBackground'),
    pointerBorderColor: getPropertgetPropertyyValue('--pointerBorderColor')
  };
};
var loadInteractionListeners = function loadInteractionListeners(interactionConfig) {
  var resetOut = function resetOut() {
    return function () {
      updateProperties(initialProps, true);
    };
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
var init = function init() {
  var position = {
    x: 0,
    y: 0
  };

  var px = function px(int) {
    return int + 'px';
  };

  setShouldMove(true);
  var initialProps = getInitialProps();

  var launch = function launch() {
    var moveOnScroll = function moveOnScroll(d) {
      updateProperties({
        pointerX: px(position.x + d.x),
        pointerY: px(position.y + d.y)
      });
      p.classList.remove('pointer--move');
      p.classList.add('pointer--move');
    };

    var scrollTimeout, start, end, distance;

    var onScrollMove = function onScrollMove() {
      end = {
        y: window.pageYOffset,
        x: window.pageXOffset
      };
      distance = {
        y: end.y - start.y,
        x: end.x - start.x
      };
      moveOnScroll(distance);
      start = distance = end = null;
    };

    var onScrollAction = function onScrollAction(e) {
      window.requestAnimationFrame(function () {
        if (!start) {
          start = {
            y: window.pageYOffset,
            x: window.pageXOffset
          };
        }

        window.clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(onScrollMove, 66);
      });
    };

    window.addEventListener('scroll', onScrollAction, false);

    var trackMouseOnMove = function trackMouseOnMove(e) {
      if (shouldMove) {
        updateProperties({
          pointerX: px(e.pageX),
          pointerY: px(e.pageY)
        });
      }
    };

    document.addEventListener('mousemove', trackMouseOnMove);
  };

  launch();
};

exports.getProperty = getProperty;
exports.getProps = getProps;
exports.init = init;
exports.loadInteractionListeners = loadInteractionListeners;
exports.setProperty = setProperty;
exports.setProps = setProps;
exports.updateProperties = updateProperties;
