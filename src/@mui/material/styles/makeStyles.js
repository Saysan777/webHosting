import { formatMuiErrorMessage as _formatMuiErrorMessage } from "@mui/utils";
export default function makeStyles() {
  throw new Error(process.env.NODE_ENV !== "production" ? `MUI: makeStyles is not longer exported from @mui/material/styles.
You have to import it from @mui/styles.
See https://mui.com/r/migration-v4/#material-ui-core-styles for more details.` : _formatMuiErrorMessage(14));
}