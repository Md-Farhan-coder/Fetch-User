import axios from "axios";
export function CheckImage(path) {
    axios
      .get(path)
      .then((res) => {
        return true;
      })
      .catch(() => {
        return false;
      });
  }