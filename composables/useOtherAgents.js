export const useOtherAgents = async () => {
  const otherAgents = useState("otherAgents");

  if (!otherAgents.value) {
    otherAgents.value = {};
    const agents = await useAgents();

    agents.value.forEach((agent, agentIndex) => {
      otherAgents.value[agent.uuid] = [];

      for (let i = agentIndex + 1; i < agentIndex + 4; i++) {
        let adjustedIndex = i >= agents.value.length ? i - agents.value.length : i;
        otherAgents.value[agent.uuid].push(agents.value[adjustedIndex]);
      }
    });
  }

  return otherAgents;
};
