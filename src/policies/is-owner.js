module.exports = async (policyContext, config, { strapi }) => {
  const { username } = policyContext.state.user;
  const buildingId = policyContext.params.id;
  const buildings = await strapi.documents("api::building.building").findMany({
    filters: { documentId: buildingId },
  });
  if (buildings && buildings[0].owner === username) {
    return true;
  }

  return false;
};
