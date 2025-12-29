import { promises as fs } from "fs";

export async function logFile(error: any) {
  try {
    await fs.writeFile("./utils/log.txt", error, { encoding: "utf8" });
    console.log("Log inside log.txt created successfully!");
  } catch (err) {
    console.error("Error creating file:", err);
  }
}
