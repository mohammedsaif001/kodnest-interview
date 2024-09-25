import { toast } from "react-toastify";

export function showToast(text, message) {
  if (text == "success") {
    toast.success(message, {
      position: "bottom-right",
    });
  } else {
    toast.error(message, {
      position: "bottom-right",
    });
  }
}
