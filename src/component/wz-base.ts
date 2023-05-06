export default interface Base{
  slots:HTMLSlotElement
  mounted:Boolean
}

export default class Base extends HTMLElement {

  static urlPrefix = 'https://cdn.jsdelivr.net/npm/webzen-ui-icons'
  // this.slots : Object
  constructor() {
    
		super();
   
	}
  

  adoptedStyle (style: CSSStyleSheet   ) {
    let styleSheet = style
    if (!style.type) {
      // vite会把style编译成成字符串
			styleSheet = new CSSStyleSheet();
      //@ts-ignore
			styleSheet.replace(style );
		}
    this.shadowRoot!.adoptedStyleSheets = [...this.shadowRoot!.adoptedStyleSheets, styleSheet];
  }
  get name () {
    return this.getAttribute('name')!
  }
  set name (value:string) {
    this.setAttribute('name', value)
    return 
  }
  get attr () {
    const attrs = ['type', 'class']
    return [...this.attributes]
    .filter((el) => !el.name.startsWith("on") && !attrs.includes(el.name))
    .map((e) => e.name + "='" + (e.value || 'true')+"'").join(' ')
  }

  // slot元素渲染完成
  renderSlot() {
    if (!this.slots) {
      this.slots = this.shadowRoot!.querySelector('slot')!
    }
    if (!this.slots) return
    return new Promise((resolve:any) => {
      if (this.mounted) {
        resolve(0)
      } else {
        this.slots.addEventListener("slotchange", () => {
          this.mounted = true
          resolve()
        })
      }
    })
  }
}