/*
 * @Author: Jin Li
 * @Date: 2022-11-17 10:40:22
 * @LastEditTime: 2022-11-17 10:50:17
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \webpack.config.js
 */
// configure
module.exports = {
  resolve: {
    alias: {
      '@': require('path').resolve(__dirname, 'src')
    }
  }
}
