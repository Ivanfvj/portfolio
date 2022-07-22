import { NextApiRequest, NextApiResponse } from "next";
import { certificates } from "./data";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(certificates)) {
      throw new Error("Cannot find cerficates data");
    }

    res.status(200).json(certificates);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
