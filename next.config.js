module.exports = {
  env: {
    API_ENDPOINT: "https://api.spacexdata.com/v4",
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: "secret",
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    API_ENDPOINT: "https://api.spacexdata.com/v4",
  },
};
