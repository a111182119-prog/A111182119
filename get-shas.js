import https from "https";

const getSha = (repo, tag) => {
  https.get({
    hostname: "api.github.com",
    path: "/repos/" + repo + "/commits/" + tag,
    headers: { "User-Agent": "Node.js" }
  }, (res) => {
    let data = "";
    res.on("data", d => data += d);
    res.on("end", () => console.log(repo, JSON.parse(data).sha));
  });
};

getSha("actions/checkout", "v4");
getSha("actions/setup-node", "v4");
getSha("actions/upload-pages-artifact", "v3");
getSha("actions/deploy-pages", "v4");
