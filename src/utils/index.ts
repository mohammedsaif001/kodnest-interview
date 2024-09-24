import { toast } from "react-toastify";

export function showToast(text, message) {
  if (text == "success") {
    toast.success(message, {
      position: "top-right",
    });
  } else {
    toast.error(message, {
      position: "top-right",
    });
  }
}
