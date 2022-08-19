// Je récupère mes données dans le fichier.json
const data = require("./parts.json");
const db = require("./database")


// Je parcours mes données
for (const table in data) {
    integrationDb(table, data)
};
async function integrationDb(table, data) {
    const table_rename = table === "names" ? "noun" : table.slice(0, -1);
    console.log(data[table])
    for (let value of data[table]) {
        value = value.replace("'", "''")
        const query = {
            text: `INSERT INTO ${table_rename} (label) VALUES ('${value}')`,

        }
       // console.log(value)
        const result = await db.query(query);
    }
}
// j'insère en BDD