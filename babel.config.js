module.exports = {
  presets: [ // 预设的解码规则
    '@vue/cli-plugin-babel/preset', ['@babel/preset-env', { modules: false }]
  ],
  plugins: [ // 辅助性插件配置
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
