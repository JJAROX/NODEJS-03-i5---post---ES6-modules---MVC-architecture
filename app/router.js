import path from "path";
import controller from "./controller.js";
import getRequestData from "./utils.js";
import { Animal, animalsArray } from './model.js'
const __dirname = path.resolve();
import { read, readFile } from "fs";
const router = async (req, res) => {
  console.log(req.method)

  switch (req.method) {
    case "GET":
      const mypath = path.join(__dirname, "app", "views", "index.html")
      readFile(mypath, (error, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        res.write(data);
        res.end();
      })

    case "POST":

      if (req.url == "/add") {
        // odczytaj dane z body
        // użyj odpowiedniej funkcji z controllera
        // odpowiedz do klienta
        let data = await getRequestData(req);
        console.log("/add 1" + JSON.stringify(data));
        controller.add(data)
        console.log("/add 2" + JSON.stringify(data));
        res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
        res.end(JSON.stringify({ status: "animal added", animals: animalsArray }))
      }
      else if (req.url == "/getall") {
        //  pobierz dane z tablicy zwierząt i odpowiedz do klienta
        controller.getall()
        res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
        res.end(JSON.stringify({ status: "get all animals", animals: animalsArray }))
      }
      else if (req.url == "/delete") {
        //  usuń dane z tablicy zwierząt i odpowiedz do klienta
        let data = await getRequestData(req);
        console.log("/add 1" + JSON.stringify(data));
        controller.delete(data.id)
        console.log("/add 2" + JSON.stringify(data));
        res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
        res.end(JSON.stringify({ status: "animal deleted", animals: animalsArray }))
      }
      else if (req.url == "/update") {
        //  updatuj dane z tablicy zwierząt i odpowiedz do klienta
        let data = await getRequestData(req);
        console.log("/add 1" + JSON.stringify(data));
        controller.update(data.id)
        console.log("/add 2" + JSON.stringify(data));
        res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
        res.end(JSON.stringify({ status: "animal updated", animals: animalsArray }))
      }
      else if (req.url == "/deleteall") {
        controller.deleteall()
        res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
        res.end(JSON.stringify({ status: "all animals deleted", animals: animalsArray }))
        //  usuń wszystkie dane z tablicy zwierząt i odpowiedz do klienta
      }
      else if (req.url === '/addmany') {
        let data = await getRequestData(req);
        console.log("/add 1" + JSON.stringify(data));
        for (let i = 0; i < 3; i++) {
          controller.add(data)
        }
        console.log("/add 2" + JSON.stringify(data));
        res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
        res.end(JSON.stringify({ status: "many animals added", animals: animalsArray }))
      }
      // pozostałe funkcje

      break;

  }
}

export default router