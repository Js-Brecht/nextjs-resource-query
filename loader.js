const { parseQuery } = require("loader-utils");

module.exports = function(source) {
    const options = Object.assign(
        {},
        this.getOptions(),
        this.resourceQuery && parseQuery(this.resourceQuery),
    );

    console.log(this.resourcePath, "options:", options);

    return `module.exports = ${JSON.stringify(source)}`;
}