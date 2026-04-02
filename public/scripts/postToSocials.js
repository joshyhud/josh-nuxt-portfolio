import fs from "fs";
import fetch from "node-fetch";

const files = process.argv[2].split(" ");

for (const file of files) {
  const content = fs.readFileSync(file, "utf-8");

  const titleMatch = content.match(/title:\s*(.*)/);
  const slugMatch = content.match(/slug:\s*(.*)/);

  const title = titleMatch?.[1] || "New post";
  const slug = slugMatch?.[1] || file.split("/").pop().replace(".md", "");

  const url = `https://yourdomain.com/blog/${slug}`;

  const text = `🚀 ${title}\n\n${url}`;

  // Mastodon
  await fetch("https://mastodon.social/api/v1/statuses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.MASTODON_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status: text }),
  });
}
