
import Base,{themeType} from "../wz-base"
export function theme(this:Base,e?: themeType) {
  let temp = localStorage.getItem("webzen_theme")
  do {
    // 初始化
    if (!temp) {
      let init = { mode: "light" }
      localStorage.setItem("webzen_theme", JSON.stringify(init))
      this.mode({ mode: "light" })
    }
    // 读取缓存 | e不存在 和 temp存在
    if (temp && JSON.parse(temp)["mode"] && !e) {
      this.mode({ mode: JSON.parse(temp)["mode"] })
    }
    // 更改缓存 | e存在 和 temp存在
    if (e) {
      let init = { mode: e.mode }
      localStorage.setItem("webzen_theme", JSON.stringify(init))
      this.mode({ mode: e.mode })
    }
  } while (false)
}