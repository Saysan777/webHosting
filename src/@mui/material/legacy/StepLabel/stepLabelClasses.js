import { generateUtilityClass, generateUtilityClasses } from '@mui/base';
export function getStepLabelUtilityClass(slot) {
  return generateUtilityClass('MuiStepLabel', slot);
}
var stepLabelClasses = generateUtilityClasses('MuiStepLabel', ['root', 'horizontal', 'vertical', 'label', 'active', 'completed', 'error', 'disabled', 'iconContainer', 'alternativeLabel', 'labelContainer']);
export default stepLabelClasses;