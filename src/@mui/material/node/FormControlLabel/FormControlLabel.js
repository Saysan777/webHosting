"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FormControlLabelRoot = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _utils = require("@mui/utils");

var _base = require("@mui/base");

var _FormControl = require("../FormControl");

var _Typography = _interopRequireDefault(require("../Typography"));

var _capitalize = _interopRequireDefault(require("../utils/capitalize"));

var _styled = _interopRequireDefault(require("../styles/styled"));

var _useThemeProps = _interopRequireDefault(require("../styles/useThemeProps"));

var _formControlLabelClasses = _interopRequireWildcard(require("./formControlLabelClasses"));

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "value"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useUtilityClasses = ownerState => {
  const {
    classes,
    disabled,
    labelPlacement
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', `labelPlacement${(0, _capitalize.default)(labelPlacement)}`],
    label: ['label', disabled && 'disabled']
  };
  return (0, _base.unstable_composeClasses)(slots, _formControlLabelClasses.getFormControlLabelUtilityClasses, classes);
};

const FormControlLabelRoot = (0, _styled.default)('label', {
  name: 'MuiFormControlLabel',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${_formControlLabelClasses.default.label}`]: styles.label
    }, styles.root, styles[`labelPlacement${(0, _capitalize.default)(ownerState.labelPlacement)}`]];
  }
})(({
  theme,
  ownerState
}) => (0, _extends2.default)({
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'pointer',
  // For correct alignment with the text.
  verticalAlign: 'middle',
  WebkitTapHighlightColor: 'transparent',
  marginLeft: -11,
  marginRight: 16,
  // used for row presentation of radio/checkbox
  [`&.${_formControlLabelClasses.default.disabled}`]: {
    cursor: 'default'
  }
}, ownerState.labelPlacement === 'start' && {
  flexDirection: 'row-reverse',
  marginLeft: 16,
  // used for row presentation of radio/checkbox
  marginRight: -11
}, ownerState.labelPlacement === 'top' && {
  flexDirection: 'column-reverse',
  marginLeft: 16
}, ownerState.labelPlacement === 'bottom' && {
  flexDirection: 'column',
  marginLeft: 16
}, {
  [`& .${_formControlLabelClasses.default.label}`]: {
    [`&.${_formControlLabelClasses.default.disabled}`]: {
      color: theme.palette.text.disabled
    }
  }
}));
/**
 * Drop-in replacement of the `Radio`, `Switch` and `Checkbox` component.
 * Use this component if you want to display an extra label.
 */

exports.FormControlLabelRoot = FormControlLabelRoot;
const FormControlLabel = /*#__PURE__*/React.forwardRef(function FormControlLabel(inProps, ref) {
  const props = (0, _useThemeProps.default)({
    props: inProps,
    name: 'MuiFormControlLabel'
  });
  const {
    className,
    componentsProps = {},
    control,
    disabled: disabledProp,
    disableTypography,
    label,
    labelPlacement = 'end'
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const muiFormControl = (0, _FormControl.useFormControl)();
  let disabled = disabledProp;

  if (typeof disabled === 'undefined' && typeof control.props.disabled !== 'undefined') {
    disabled = control.props.disabled;
  }

  if (typeof disabled === 'undefined' && muiFormControl) {
    disabled = muiFormControl.disabled;
  }

  const controlProps = {
    disabled
  };
  ['checked', 'name', 'onChange', 'value', 'inputRef'].forEach(key => {
    if (typeof control.props[key] === 'undefined' && typeof props[key] !== 'undefined') {
      controlProps[key] = props[key];
    }
  });
  const ownerState = (0, _extends2.default)({}, props, {
    disabled,
    label,
    labelPlacement
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(FormControlLabelRoot, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other, {
    children: [/*#__PURE__*/React.cloneElement(control, controlProps), label.type === _Typography.default || disableTypography ? label : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, (0, _extends2.default)({
      component: "span",
      className: classes.label
    }, componentsProps.typography, {
      children: label
    }))]
  }));
});
process.env.NODE_ENV !== "production" ? FormControlLabel.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * If `true`, the component appears selected.
   */
  checked: _propTypes.default.bool,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: _propTypes.default.object,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The props used for each slot inside.
   * @default {}
   */
  componentsProps: _propTypes.default.object,

  /**
   * A control element. For instance, it can be a `Radio`, a `Switch` or a `Checkbox`.
   */
  control: _propTypes.default.element.isRequired,

  /**
   * If `true`, the control is disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the label is rendered as it is passed without an additional typography node.
   */
  disableTypography: _propTypes.default.bool,

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _utils.refType,

  /**
   * A text or an element to be used in an enclosing label element.
   */
  label: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.number, _propTypes.default.string]).isRequired,

  /**
   * The position of the label.
   * @default 'end'
   */
  labelPlacement: _propTypes.default.oneOf(['bottom', 'end', 'start', 'top']),

  /**
   * @ignore
   */
  name: _propTypes.default.string,

  /**
   * Callback fired when the state is changed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: _propTypes.default.func,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object]),

  /**
   * The value of the component.
   */
  value: _propTypes.default.any
} : void 0;
var _default = FormControlLabel;
exports.default = _default;