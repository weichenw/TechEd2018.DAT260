/*eslint-env node, es6 */
"use strict";

module.exports = (app, server) => {
	app.use("/node", require("./routes/node")());
	app.use("/node/ex1", require("./routes/ex1")());
	app.use("/node/ex2", require("./routes/ex2")());
	app.use("/node/excAsync", require("./routes/exerciseAsync")(server));
	app.use("/node/JavaScriptBasics", require("./routes/JavaScriptBasics")());
	app.use("/node/textBundle", require("./routes/textBundle")());
};