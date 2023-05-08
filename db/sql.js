module.exports = {
  numOfViewers: { query: "SELECT MAX(view_count) num, DATE_FORMAT(MIN(view_datetime), '%Y-%m-%d') since FROM views" },
  countViewers: { query: "INSERT INTO views VALUES (null, now())" }
}
