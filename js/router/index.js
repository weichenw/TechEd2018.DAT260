/*eslint-env node, es6 */
"use strict";

module.exports = (app, server) => {
	app.use("/node", require("./routes/node")());
	app.use("/node/ex1", require("./routes/ex1")());
	app.use("/node/ex2", require("./routes/ex2")());
	app.use("/node/excAsync", require("./routes/exerciseAsync")(server));
	app.use("/node/JavaScriptBasics", require("./routes/JavaScriptBasics")());
	app.use("/node/textBundle", require("./routes/textBundle")());
	app.use("/node/excel", require("./routes/excel")());
	app.use("/node/xml", require("./routes/xml")());
	app.use("/node/zip", require("./routes/zip")());
	app.use("/node/smtp", require("./routes/smtp")());
	app.use("/node/oo", require("./routes/oo")());
	app.use("/node/chat", require("./routes/chatServer")(server));
	app.use("/node/auth", require("./routes/auth")());	
};