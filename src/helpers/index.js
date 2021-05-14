import { fromUnixTime, formatDistanceStrict } from "date-fns";

export const getDistanceDate = (created) => {
  return formatDistanceStrict(fromUnixTime(created), new Date(), {
    addSuffix: true,
  });
};

export const formatNumComments = (numComments) => {
  return `comment${numComments > 1 || numComments === 0 ? "s" : ""}`;
};
