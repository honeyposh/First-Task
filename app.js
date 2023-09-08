const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.get("/api", (req, res) => {
  const slackname = req.query.slack_name;
  const track = req.query.track;
  const now = new Date();
  const utc_time = now.toISOString().slice(0, 19) + "Z";
  // console.log(utc_time);
  // console.log(now);
  const statusCode = res.statusCode;
  let daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayToday = daysOfTheWeek[now.getDay()];

  let githubrepourl = "https://github.com/honeyposh/First-Task.git";
  let githubfileurl =
    "https://github.com/honeyposh/First-Task/blob/main/app.js";

  const data = {
    slack_name: slackname,
    current_day: dayToday,
    utc_time: utc_time,
    track: track,
    github_file_url: githubfileurl,
    github_repo_url: githubrepourl,
    status_code: statusCode,
  };
  res.json(data);
});
app.listen(PORT);
