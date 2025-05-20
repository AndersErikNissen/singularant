import twColors from "#tailwind-config/theme/colors";

export const useColors = (colorObject) => {
  const colors = useState("colors");

  colors.value = {
    body: colorObject?.body || twColors.brand[950],
    bg: colorObject?.bg || twColors.brand[50],
    cta: colorObject?.cta || twColors.brand[500],
  };

  return colors;
};
