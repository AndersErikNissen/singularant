export default defineEventHandler(async (event) => {
  let player = await useStorage().getItem("player");

  if (!player) {
    const cards = await $fetch("https://valorant-api.com/v1/playercards").then(
      (res) => res.data,
    );
    const titles = await $fetch(
      "https://valorant-api.com/v1/playertitles",
    ).then((res) => res.data.filter((title) => title.displayName));
    player = { cards, titles };
    useStorage().setItem("player", player);
  }

  return player;
});
