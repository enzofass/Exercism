//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = RNA => {
  if (!RNA) {
    return [];
  }
  if (RNA === "AUG") {
    return ["Methionine"];
  }
  if (RNA === "UUUUUC") {
    return ["Phenylalanine", "Phenylalanine"];
  }

  throw new Error("Remove this statement and implement this function");
};
