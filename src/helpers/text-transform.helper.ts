export enum TextTransformations {
  upperCase = "UPPER_CASE",
  lowerCase = "LOWER_CASE",
  capitalize = "CAPITALIZE",
}

export const TextTransform = (
  text: string,
  transformation: TextTransformations
) => {
  switch (transformation) {
    case TextTransformations.upperCase: {
      return text.toUpperCase();
    }
    case TextTransformations.lowerCase: {
      return text.toLowerCase();
    }
    case TextTransformations.capitalize: {
      return text
        .split("")
        .map((char, index) => (index === 0 ? char.toUpperCase() : char))
        .join("");
    }
    default:
      return text;
  }
};
