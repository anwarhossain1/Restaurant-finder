import Rollbar from "rollbar";

export const RollbarErrorTracking = (() => {
  const RollbarObj = new Rollbar({
    accessToken: process.env.REACT_APP_ROLLBAR_ACCESS_TOKEN,
    captureUncaught: true,
    captureUnhandledRejections: true,
  });
  const logErroInfo = (info) => {
    RollbarObj.info(info);
  };
  const logErrorInRollbar = (error) => {
    throw new Error(error);
  };
  return { logErroInfo, logErrorInRollbar };
})();
export default RollbarErrorTracking;
