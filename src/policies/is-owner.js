module.exports = async (policyContext, config, { strapi }) => {
  const { username } = policyContext.state.user;
  const buildingId = policyContext.params.bid;

  const building = await strapi.entityService.findMany(
    "api::building.building",
    {
      filters: { bid: buildingId },
      populate: { owner: true },
    }
  );
  console.log("BUILD", building[0]);
  if (building[0] && building[0].owner === username) {
    return true;
  }

  return false;
};
