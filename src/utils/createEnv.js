const fs = require("fs");

fs.writeFileSync("./.env", `URL_API=${process.env.URL_API}\n`);
fs.writeFileSync("./.env", `URL_AUTH=${process.env.URL_AUTH}\n`);
fs.writeFileSync("./.env", `LIMIT=${process.env.LIMIT}\n`);
fs.writeFileSync("./.env", `CLIEN_ID=${process.env.CLIEN_ID}\n`);
fs.writeFileSync("./.env", `CLIENT_SECRET=${process.env.CLIENT_SECRET}\n`);
