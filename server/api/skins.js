export default defineEventHandler(async (event) => {
  let skins = await useStorage().getItem("skins");

  if (!skins) {
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
      bundle.weapons = weapons.filter((weapon) =>
        weapon.displayName.includes(bundle.displayName),
      );

      bundle.buddies = buddies.filter((buddie) =>
        buddie.displayName.includes(bundle.displayName),
      );

      bundle.sprays = sprays.filter((spray) =>
        spray.displayName.includes(bundle.displayName),
      );
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
