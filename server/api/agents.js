export default defineEventHandler(async (event) => {
  let agents = await useStorage().getItem("agents");
  const query = getQuery(event);

  if (!agents) {
    agents = await $fetch("https://valorant-api.com/v1/agents").then((data) =>
      data.data.filter((agent) => agent.isPlayableCharacter === true),
    );

    useStorage().setItem("agents", agents);
  }

  const agent = agents.find((agent) => agent.uuid === query.uuid) || undefined;

  return agent ?? agents;
});
