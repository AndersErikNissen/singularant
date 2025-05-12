export const useAgents = async () => {
  // Help from example: https://stackblitz.com/edit/github-vcbsj4?file=app.vue
  const agents = ref();

  const { data: cachedAgents } = useNuxtData("agents");

  if (cachedAgents.value) {
    agents.value = cachedAgents.value;
  } else {
    const { data: fetchedAgents } = await useFetch("https://valorant-api.com/v1/agents", {
      key: "agents",
      transform: (data) => data.data.filter((agent) => agent.isPlayableCharacter === true),
    });

    agents.value = fetchedAgents.value;
  }

  return agents;
};
