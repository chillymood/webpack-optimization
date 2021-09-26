const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {}); // 暂不添加配置
