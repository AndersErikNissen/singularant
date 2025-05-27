export default defineEventHandler(async (event) => {
  let skins = await useStorage().getItem("skins");

  if (!skins) {
    const player = await $fetch("/api/player");

    const bundles = await $fetch("https://valorant-api.com/v1/bundles").then(
      (res) => res.data,
    );

    const weapons = await $fetch(
      "https://valorant-api.com/v1/weapons/skins",
    ).then((res) => res.data);

    const buddies = await $fetch("https://valorant-api.com/v1/buddies").then(
      (res) => res.data,
    );

    const sprays = await $fetch("https://valorant-api.com/v1/sprays").then(
      (res) => res.data,
    );

    bundles.forEach((bundle) => {
      bundle.items = [];

      const matchingWeapons = weapons.filter((weapon) =>
        weapon.displayName.includes(bundle.displayName),
      );

      if (matchingWeapons.length > 0) {
        bundle.items.push({ displayName: "weapons", items: matchingWeapons });
      }

      const matchingCards = player.cards.filter((card) => {
        let cardName = card.displayName;
        let lastIndex = cardName.lastIndexOf(" ");
        cardName = cardName.substring(0, lastIndex); // Remove last word

        return cardName === bundle.displayName;
      });

      if (matchingCards.length > 0) {
        bundle.items.push({
          displayName: "player cards",
          items: matchingCards,
        });
      }

      const matchingBuddies = buddies.filter((buddie) =>
        buddie.displayName.includes(bundle.displayName),
      );

      if (matchingBuddies.length > 0) {
        bundle.items.push({ displayName: "buddies", items: matchingBuddies });
      }

      const matchingSprays = sprays.filter((spray) =>
        spray.displayName.includes(bundle.displayName),
      );

      if (matchingSprays.length > 0) {
        bundle.items.push({ displayName: "sprays", items: matchingSprays });
      }
    });

    skins = {
      bundles: bundles,
      weapons: weapons,
      buddies: buddies,
      sprays: sprays,
    };

    useStorage().setItem("skins", skins);
  }

  return skins;
});
