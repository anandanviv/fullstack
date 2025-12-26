// extract.mjs
import fs from "fs";
import { Mbox } from "node-mbox";   // <-- named import
import { simpleParser } from "mailparser";
import { createObjectCsvWriter as createCsvWriter } from "csv-writer";

const mboxPath = "mbox";
const outputPath = "github_submissions.csv";

const csvWriter = createCsvWriter({
  path: outputPath,
  header: [
    { id: "email", title: "Email" },
    { id: "github", title: "GitHubLink" }
  ]
});

// node-mbox expects a callback
const mboxStream = new Mbox(fs.createReadStream(mboxPath), {});

const records = [];

mboxStream.on("message", async (msg) => {
  try {
    const parsed = await simpleParser(msg);

    const email = parsed.from?.value?.[0]?.address || "";

    const bodyText = parsed.text || "";
    const match = bodyText.match(/https?:\/\/github\.com\/\S+/i);
    const github = match ? match[0] : "";

    if (email || github) {
      records.push({ email, github });
    }
  } catch (err) {
    console.error("Parse error:", err);
  }
});

mboxStream.on("end", async () => {
  await csvWriter.writeRecords(records);
  console.log(`✅ Extracted ${records.length} submissions to ${outputPath}`);
});