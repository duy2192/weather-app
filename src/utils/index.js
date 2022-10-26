import { format } from "date-fns";
import vi from "date-fns/locale/vi";

export const dateFormatVN = format(new Date(), "PPPP", { locale: vi });
export const formatTime = (time) => {
  return format(new Date(time * 1000), "HH:mm");
};
