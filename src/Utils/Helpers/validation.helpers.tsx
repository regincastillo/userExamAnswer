import { Entries } from "@Store/Entries/Entries.type";

export const isNullish = (obj: Entries) =>
  Object.entries(obj)
    // eslint-disable-next-line array-callback-return
    .filter((item) => {
      if (item[0] !== "Auth" && item[1] === "") {
        return item;
      }
    })
    .map((item) => item[0]);

export const useFakeMutation = () => (entries: Entries) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      let fields = isNullish(entries);
      if (fields?.length > 0) {
        reject(
          new Error(
            `Error while saving Entrie: ${fields.toString()} ${
              fields?.length > 1 ? "are" : "is"
            } required`
          )
        );
      } else {
        resolve(entries);
      }
    }, 200)
  );
