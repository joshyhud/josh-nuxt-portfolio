import fs from "fs";

const filesArg = process.argv[2];

if (!filesArg) {
  console.log("No new files to process");
  process.exit(0);
}

const files = filesArg.split(" ");

for (const file of files) {
  try {
    const content = fs.readFileSync(file, "utf-8");

    // Extract frontmatter safely
    const title =
      content.match(/title:\s*(.*)/)?.[1]?.replace(/['"]/g, "") || "New post";

    const slug =
      content.match(/slug:\s*(.*)/)?.[1]?.replace(/['"]/g, "") ||
      file.split("/").pop().replace(".md", "");

    const url = `https://josh-hudson.co.uk/blog/${slug}`;

    const status = `🚀 ${title}\n\n${url}\n\n#webdev #astro`;

    console.log(`Posting: ${title}`);

    const res = await fetch("https://mastodon.social/api/v1/statuses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.MASTODON_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Failed:", text);
    } else {
      console.log("Posted successfully");
    }
  } catch (err) {
    console.error(`Error processing ${file}:`, err);
  }
}
