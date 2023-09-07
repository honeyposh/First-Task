const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.get("/firsttask/api", (req, res) => {
  const slackname = req.query.slack_name;
  const track = req.query.track;
  const utc_time = new Date();
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
  let dayToday = daysOfTheWeek[utc_time.getDay()];

  let githubrepourl = "https://github.com/honeyposh/First-Task.git";
  let githubfileurl =
    "https://github.com/honeyposh/First-Task/blob/main/app.js";

  const data = {
    slack_name: slackname,
    current_day: dayToday,
    utc_time: utc_time,
    track: track,
    status_code: statusCode,
    github_file_url: githubfileurl,
    github_repo_url: githubrepourl,
  };
  res.json(data);
});
app.listen(PORT);
