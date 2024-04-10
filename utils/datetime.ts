import moment from "moment-timezone";

const TIME_ZONE = "Europe/Rome";
const TIME_FORMAT = "HH:mm";
const DATE_FORMAT = "DD/MM/YYYY";

export const extractTime = (d: Date): string =>
  moment(d).tz(TIME_ZONE).format(TIME_FORMAT);

export const extractDate = (d: Date): string =>
  moment(d).tz(TIME_ZONE).format(DATE_FORMAT);
