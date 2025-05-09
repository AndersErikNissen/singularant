export const useAgent = async (uuid) => {
  const agents = await useAgents();
  return agents.value[uuid];
};
