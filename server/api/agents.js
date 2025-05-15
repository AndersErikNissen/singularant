export default defineEventHandler(async (event) => {
  let agents = await useStorage().getItem("agents");
  const agentUuid = getRouterParam(event, "uuid");

  if (!agents) {
    agents = await $fetch("https://valorant-api.com/v1/agents").then((res) => {
      let filteretAgents = res.data.filter(
        (agent) => agent.isPlayableCharacter === true,
      );

      filteretAgents.forEach((agent, agentIndex) => {
        agent.otherAgents = [];

        for (let i = agentIndex + 1; i < agentIndex + 4; i++) {
          let adjustedIndex =
            i >= filteretAgents.length ? i - filteretAgents.length : i;
          agent.otherAgents.push(filteretAgents[adjustedIndex]);
        }
      });

      // NOT WORKING
      // NOT WORKING
      // NOT WORKING
      // NOT WORKING
      // NOT WORKING
      // NOT WORKING
      // NOT WORKING
      // NOT WORKING

      return filteretAgents;
    });

    useStorage().setItem("agents", agents);
  }

  const agent = false;

  return agents;
});
