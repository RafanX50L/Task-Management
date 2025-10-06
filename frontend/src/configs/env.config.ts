export const env = {
  get SERVER_ORIGIN() {
    // return import.meta.env.VITE_SERVER_ORIGIN;
    return "http://localhost:4000";
    // return "http://3.111.41.75";
  },
};

console.log(import.meta.env.VITE_SERVER_ORIGIN);
