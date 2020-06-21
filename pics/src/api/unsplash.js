import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID d29eyYQoShr-lsE6u83SefYO7Fys61dhh4d9z_yreU8",
  },
});
