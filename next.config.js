const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
//PHASE_DEVELOPMENT_SERVER - npm run dev / next dev
//PHASE_EXPORT - next export
//PHASE_PRODUCTION_BUILD - next build
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER)
    return {
      env: {
        mongodb_username: "ejmat",
        mongodb_password: "supsupsup",
        mongodb_clustername: "cluster0",
        mongodb_database: "blogBase",
      },
    };

  return {
    reactStrictMode: true,
    env: {
      mongodb_username: "ejmat",
      mongodb_password: "supsupsup",
      mongodb_clustername: "cluster0",
      mongodb_database: "blogBase",
    },
  };
};
