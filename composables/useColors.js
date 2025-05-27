import twColors from "#tailwind-config/theme/colors";

export const useColors = (colorObject) => {
  const colors = useState("colors");

  // defaults
  let newColors = {
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
        newColors.header[key] = setColor(colorObject.header[key]);
      }
    }

    if (colorObject.body) {
      for (const key in colorObject.body) {
        newColors.body[key] = setColor(colorObject.body[key]);
      }
    }

    if (colorObject.footer) {
      for (const key in colorObject.footer) {
        newColors.footer[key] = setColor(colorObject.footer[key]);
      }
    }

    if (!colorObject.header && !colorObject.body && !colorObject.footer) {
      newColors.header = colorObject;
      newColors.body = colorObject;
      newColors.footer = colorObject;
    }
  }

  colors.value = newColors;

  return colors;
};
