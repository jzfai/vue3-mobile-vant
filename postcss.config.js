module.exports = {
  plugins: {
    // postcss-pxtorem 插件的版本需要 >= 5.0.0
    'postcss-pxtorem': {
      rootValue({ file }) {
        //use 37.5 for  vant ui  and  75 for other
        return file.indexOf('node_modules/vant') !== -1 ? 37.5 : 75;
      },
      propList: ['*'],
    },
  },
}
