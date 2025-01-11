module.exports = async (policyContext, config, { strapi }) => {
  const { username } = policyContext.state.user;
  const buildingId = policyContext.params.id;
  const building = await strapi.entityService.findOne(
    "api::building.building",
    buildingId,
    {
      populate: { owner: true },
    }
  );
  if (building && building.owner === username) {
    return true;
  }

  return false;
};
