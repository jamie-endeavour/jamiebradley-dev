console.log("This is a test", process.env.GATSBY_SANITY_DATASET);

module.exports = {
  sanity: {
    projectId: process.env.GATSBY_SANITY_PROJECT_ID || "ghm8pz5f",
    dataset: process.env.GATSBY_SANITY_DATASET || "production"
  }
};
