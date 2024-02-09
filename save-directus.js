const fs = require("fs");
const exec = require("child_process");

async function main() {
  console.info("Creating a snapshot of Directus' data model");
  exec.exec(
    "docker exec -it clic-directus npx directus schema snapshot /share/snapshot.yaml -y"
  );

  console.info("Logging into Directus");
  let auth = await fetch("http://localhost/directus/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "clic@epfl.ch", password: "1234" }),
  }).then((r) => r.json());

  console.info("Retrieving OpenApi schema");
  let openApiSchema = await fetch(
    "http://localhost/directus/server/specs/oas",
    { headers: { Authorization: `Bearer ${auth.data.access_token}` } }
  ).then((r) => r.json());

  fs.writeFileSync("oas.json", JSON.stringify(openApiSchema));

  console.info("Generating types to app/src/types/schema.d.ts");
  exec.exec(
    "npx directus-typescript-gen -i oas.json > app/src/types/schema.d.ts"
  );
  exec.exec("npx prettier --write app/src/types/schema.d.ts");
}

main();
