import express from "express";
import axios from "axios";

const app = express();

const PORT = 3000;

const levenshtein = (str1, str2) => {
  const m = str1.length;
  const n = str2.length;

  const dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0));

  // Initialize the first row
  // and column of the matrix
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }

  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] =
          1 +
          Math.min(
            // Insert
            dp[i][j - 1],
            Math.min(
              // Remove
              dp[i - 1][j],
              // Replace
              dp[i - 1][j - 1]
            )
          );
      }
    }
  }
  return dp[m][n];
};

app.use(express.json()); // So Express know you're using JSON

app.get("/", (request, response) => {
  return response.send("here");
});

app.get("/api/users", async (request, response) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");

  const users = res.data;

  return response.send(users);
});

app.get("/api/search", async (request, response) => {
  const { q } = request.query;

  const res = await axios.get("https://jsonplaceholder.typicode.com/users");

  const users = res.data;

  const distances = users.map((u) => {
    const id = u.id;
    const userName = u.name;

    return { id, name: userName, distance: levenshtein(userName, q) };
  });

  // sort descending
  distances.sort((a, b) => {
    return parseFloat(b.distance) - parseFloat(a.distance);
  });

  const top5 = distances.slice(-5);

  return response.send({ top5, distances });
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Runninand App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
