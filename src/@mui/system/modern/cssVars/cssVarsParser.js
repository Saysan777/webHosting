/**
 * This function create an object from keys, value and then assign to target
 *
 * @param {Object} obj : the target object to be assigned
 * @param {string[]} keys
 * @param {string | number} value
 *
 * @example
 * const source = {}
 * assignNestedKeys(source, ['palette', 'primary'], 'var(--palette-primary)')
 * console.log(source) // { palette: { primary: 'var(--palette-primary)' } }
 *
 * @example
 * const source = { palette: { primary: 'var(--palette-primary)' } }
 * assignNestedKeys(source, ['palette', 'secondary'], 'var(--palette-secondary)')
 * console.log(source) // { palette: { primary: 'var(--palette-primary)', secondary: 'var(--palette-secondary)' } }
 */
export const assignNestedKeys = (obj, keys, value) => {
  let temp = obj;
  keys.forEach((k, index) => {
    if (index === keys.length - 1) {
      if (temp && typeof temp === 'object') {
        temp[k] = value;
      }
    } else if (temp && typeof temp === 'object') {
      if (!temp[k]) {
        temp[k] = {};
      }

      temp = temp[k];
    }
  });
};
/**
 *
 * @param {Object} obj : source object
 * @param {Function} callback : a function that will be called when
 *                   - the deepest key in source object is reached
 *                   - the value of the deepest key is NOT `undefined` | `null`
 *
 * @example
 * walkObjectDeep({ palette: { primary: { main: '#000000' } } }, console.log)
 * // ['palette', 'primary', 'main'] '#000000'
 */

export const walkObjectDeep = (obj, callback, shouldSkipPaths) => {
  function recurse(object, parentKeys = []) {
    Object.entries(object).forEach(([key, value]) => {
      if (!shouldSkipPaths || shouldSkipPaths && !shouldSkipPaths([...parentKeys, key])) {
        if (value !== undefined && value !== null) {
          if (typeof value === 'object' && Object.keys(value).length > 0) {
            recurse(value, [...parentKeys, key]);
          } else {
            callback([...parentKeys, key], value, object);
          }
        }
      }
    });
  }

  recurse(obj);
};

const getCssValue = (keys, value) => {
  if (typeof value === 'number') {
    if (['lineHeight', 'fontWeight', 'opacity', 'zIndex'].some(prop => keys.includes(prop))) {
      // CSS property that are unitless
      return value;
    }

    return `${value}px`;
  }

  return value;
};
/**
 * a function that parse theme and return { css, vars }
 *
 * @param {Object} theme
 * @param {{
 *  prefix?: string,
 *  basePrefix?: string,
 *  shouldSkipGeneratingVar?: (objectPathKeys: Array<string>, value: string | number) => boolean
 * }} options.
 *  `basePrefix`: defined by design system.
 *  `prefix`: defined by application
 *
 *   This function also mutate the string value of theme input by replacing `basePrefix` (if existed) with `prefix`
 *
 * @returns {{ css: Object, vars: Object }} `css` is the stylesheet, `vars` is an object to get css variable (same structure as theme)
 *
 * @example
 * const { css, vars } = parser({
 *   fontSize: 12,
 *   lineHeight: 1.2,
 *   palette: { primary: { 500: '#000000' } }
 * })
 *
 * console.log(css) // { '--fontSize': '12px', '--lineHeight': 1.2, '--palette-primary-500': '#000000' }
 * console.log(vars) // { fontSize: '--fontSize', lineHeight: '--lineHeight', palette: { primary: { 500: 'var(--palette-primary-500)' } } }
 */


export default function cssVarsParser(theme, options) {
  const {
    prefix,
    basePrefix = '',
    shouldSkipGeneratingVar
  } = options || {};
  const css = {};
  const vars = {};
  walkObjectDeep(theme, (keys, val, scope) => {
    if (typeof val === 'string' || typeof val === 'number') {
      let value = val;

      if (typeof value === 'string' && value.startsWith('var')) {
        // replace the value of the `scope` object with the prefix or remove basePrefix from the value
        if (!basePrefix && prefix) {
          value = value.replace(/var\(--/g, `var(--${prefix}-`);
        } else {
          value = prefix ? value.replace(new RegExp(basePrefix, 'g'), prefix) : value.replace(new RegExp(`${basePrefix}-`, 'g'), '');
        } // scope is the deepest object in the tree, keys is the theme path keys


        scope[keys.slice(-1)[0]] = value;
      }

      if (!shouldSkipGeneratingVar || shouldSkipGeneratingVar && !shouldSkipGeneratingVar(keys, value)) {
        // only create css & var if `shouldSkipGeneratingVar` return false
        const cssVar = `--${prefix ? `${prefix}-` : ''}${keys.join('-')}`;
        Object.assign(css, {
          [cssVar]: getCssValue(keys, value)
        });
        assignNestedKeys(vars, keys, `var(${cssVar})`);
      }
    }
  }, keys => keys[0] === 'vars' // skip 'vars/*' paths
  );
  return {
    css,
    vars
  };
}