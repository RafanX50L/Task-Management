export const env = {
  get SERVER_ORIGIN() {
    return import.meta.env.VITE_SERVER_ORIGIN;
  },
};