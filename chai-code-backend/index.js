require('dotenv').config();
const express = require("express");

const app = express();

const port = 3000;

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${port}`)
})

app.get('/', (req, res) => {
    res.send('hello world');
});

const jsonEx = {
    "glossary": {
        "title": "example glossary",
		"GlossDiv": {
            "title": "S",
			"GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
					"SortAs": "SGML",
					"GlossTerm": "Standard Generalized Markup Language",
					"Acronym": "SGML",
					"Abbrev": "ISO 8879:1986",
					"GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
						"GlossSeeAlso": ["GML", "XML"]
                    },
					"GlossSee": "markup"
                }
            }
        }
    }
}


app.get('/test', (req, res) => {
    res.json(jsonEx);
});