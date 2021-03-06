import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import merge from '../merge';
import getThemeValue, { propToStyleFunction } from '../getThemeValue';
import { handleBreakpoints, createEmptyBreakpointObject, removeUnusedBreakpoints } from '../breakpoints';

function objectsHaveSameKeys() {
  for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {
    objects[_key] = arguments[_key];
  }

  var allKeys = objects.reduce(function (keys, object) {
    return keys.concat(Object.keys(object));
  }, []);
  var union = new Set(allKeys);
  return objects.every(function (object) {
    return union.size === Object.keys(object).length;
  });
}

function callIfFn(maybeFn, arg) {
  return typeof maybeFn === 'function' ? maybeFn(arg) : maybeFn;
}

function styleFunctionSx(props) {
  var _ref = props || {},
      sx = _ref.sx,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? {} : _ref$theme;

  if (!sx) {
    return null; // emotion & styled-components will neglect null
  }
  /*
   * Receive `sxInput` as object or callback
   * and then recursively check keys & values to create media query object styles.
   * (the result will be used in `styled`)
   */


  function traverse(sxInput) {
    var sxObject = sxInput;

    if (typeof sxInput === 'function') {
      sxObject = sxInput(theme);
    } else if (_typeof(sxInput) !== 'object') {
      // value
      return sxInput;
    }

    var emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
    var breakpointsKeys = Object.keys(emptyBreakpoints);
    var css = emptyBreakpoints;
    Object.keys(sxObject).forEach(function (styleKey) {
      var value = callIfFn(sxObject[styleKey], theme);

      if (value !== null && value !== undefined) {
        if (_typeof(value) === 'object') {
          if (propToStyleFunction[styleKey]) {
            css = merge(css, getThemeValue(styleKey, value, theme));
          } else {
            var breakpointsValues = handleBreakpoints({
              theme: theme
            }, value, function (x) {
              return _defineProperty({}, styleKey, x);
            });

            if (objectsHaveSameKeys(breakpointsValues, value)) {
              css[styleKey] = styleFunctionSx({
                sx: value,
                theme: theme
              });
            } else {
              css = merge(css, breakpointsValues);
            }
          }
        } else {
          css = merge(css, getThemeValue(styleKey, value, theme));
        }
      }
    });
    return removeUnusedBreakpoints(breakpointsKeys, css);
  }

  return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
}

styleFunctionSx.filterProps = ['sx'];
export default styleFunctionSx;