const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
}) { publicPath: process.env.NODE_ENV === "production"
	? 'https://hidden-reef-58565.herokuapp.com/
	: '/'
}
