import { connect } from "mongoose";
import { DB } from "./constant";

export const dbConfig = async () => {
  await connect(DB)
    .then(() => {
      console.clear(), console.log("DB connected successfully❤️❤️✈️✈️✈️");
    })
    .catch((err) => console.error(err));
};
