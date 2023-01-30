// 封装一个session Storage,可以随着浏览器的关闭而关闭，不会自动存储
const STORAGE_KEY = 'mall'

export default {
  // 存储值,存储复杂类型的数据
  setItem (key, value, modulename) {
    if (modulename) {
      const val = this.getItem(modulename)
      val[key] = value
      this.setItem(modulename, val)
    } else {
      const val = this.getStorage()
      val[key] = value
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
  },
  // 获取存储数据
  getItem (key, modulename) {
    // 获取某一个模块下面的属性user对象的userName
    if (modulename) {
      const val = this.getItem(modulename)
      if (val) return val[key]
    }
    return this.getStorage()[key]
  },
  // 获取浏览器环境信息
  getStorage () {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
    // 将存储数据转化为JSON格式
  },
  // 清空数据
  clear (key, modulename) {
    const val = this.getStorage()
    if (modulename) {
      delete val[modulename][key]
    } else {
      delete val[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  }
}
