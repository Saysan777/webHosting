import { generateUtilityClass, generateUtilityClasses } from '@mui/base';
export function getFormGroupUtilityClass(slot) {
  return generateUtilityClass('MuiFormGroup', slot);
}
const formGroupClasses = generateUtilityClasses('MuiFormGroup', ['root', 'row']);
export default formGroupClasses;