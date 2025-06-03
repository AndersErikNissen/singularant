import twColors from "#tailwind-config/theme/colors";

export const useColors = (colorObject) => {
  const colors = useState("colors");

  // defaults
  let updatedColors = {
    header: {
      color: twColors.brand[950],
      bg: twColors.brand[50],
    },
    body: {
      color: twColors.brand[950],
      bg: twColors.brand[50],
    },
    footer: {
      color: twColors.brand[50],
      bg: twColors.brand[500],
      cta: twColors.brand[950],
    },
  };

  const setColor = (v) => {
    // Makes it easier to reference a brand color
    let color = v;

    if (typeof v === "number") {
      color = twColors.brand[v];
    }

    return color;
  };

  if (colorObject) {
    if (colorObject.header) {
      for (const key in colorObject.header) {
        updatedColors.header[key] = setColor(colorObject.header[key]);
      }
    }

    if (colorObject.body) {
      for (const key in colorObject.body) {
        updatedColors.body[key] = setColor(colorObject.body[key]);
      }
    }

    if (colorObject.footer) {
      for (const key in colorObject.footer) {
        updatedColors.footer[key] = setColor(colorObject.footer[key]);
      }
    }

    if (!colorObject.header && !colorObject.body && !colorObject.footer) {
      updatedColors.header = colorObject;
      updatedColors.body = colorObject;
      updatedColors.footer = colorObject;
    }
  }

  colors.value = updatedColors;

  return colors;
};
