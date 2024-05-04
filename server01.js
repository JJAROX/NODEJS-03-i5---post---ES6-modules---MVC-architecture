import { createServer } from "http";
import { read, readFile } from "fs";
import path from "path";
const __dirname = path.resolve();
const PORT = 3000;
let body = "";
function serverResponse(req, res) {

  req.on("data", (data) => {
    console.log("data: " + data)
    body += data.toString()
  })

  req.on("end", (data) => {
    console.log("body end:" + body)
    res.writeHead(200, { "Content-type": "text/plain;charset=utf-8" });
    res.end(body);

  })
}
const server = createServer((req, res) => {
  console.log(req.method)

  switch (req.method) {
    case "GET":
      const mypath = path.join(__dirname, "static", "async_fetch_selects.html")
      readFile(mypath, (error, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        res.write(data);
        res.end();
      })
      break;
    case "POST":
      if (req.url === '/login') {
        serverResponse(req, res)
      }


      break;
  }
})

server.listen(PORT, () => {
  console.log(`serwer startuje na porcie ${PORT}`)
});