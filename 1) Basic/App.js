const http = require("http");
const fs = require("fs");
const path = require("path");
const filePath = path.join(process.cwd(), "text.txt");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  } else if (req.url === "/form") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<form action="submit" method="post">
      <input type="data" name="name" placeholder="Enter Your Name" />
      <button type="submit">submit</button>
    </form>`);
    res.end();
  } else if (req.url === "/submit") {
    var data = "";
    req.on("data", (chunks) => {
      data += chunks;
    });
    req.on("end", () => {
        fs.readFile(filePath,"utf-8" ,(_,fileData)=>{
            let updatedData =fileData  +"\n" + data
      
      fs.writeFile(filePath, updatedData, (err) => {
        if (err) {
          res.write("Server crash");
          res.end();
        } else {
          res.write("Data Recieved Successfully");
          res.end();
        }
      }); 
     });
    });
  }
});

server.listen(3000);
