import { DefaultOptons, Options } from "../types/index";

// import {ajax, cache,error,eventbus,tdk} from "../utils/index"
class utilInit {
  public data: DefaultOptons;
  public loading_circle: HTMLElement = document.createElement("div");
  public mask: HTMLElement = document.createElement("div");

  public constructor(options: Options) {
    // 赋值
    this.data = Object.assign(this.init(), options);
    this.init();
  }

  public config() {
    console.log(this.data);
  }
  public init(): DefaultOptons {
    return <DefaultOptons>{};
  }

  // 1.支持eventBus
  /* webpackPrefetch: true */
  /* webpackPreload: true */
  public eventbusFn() {
    return new Promise((resolve) => {
      import(
        /* webpackChunkName: "eventbus" */
        "../utils/eventbus"
      ).then((e) => {
        resolve(e);
      });
    });
  }

  public webComponentFn() {
    return new Promise((resolve) => {
      import(
        /* webpackChunkName: "webcomponent" */
        "../utils/webcomponent"
      ).then((e) => {
        resolve(e);
      });
    });
  }
  // 2.支持cache
  public cacheFn() {
    return new Promise((resolve) => {
      import(
        /* webpackChunkName: "cache" */
        "../utils/cache"
      ).then((e) => {
        resolve(e);
      });
    });
  }

  // //3.支持tdk，需要new
  public tdkFn() {
    return new Promise((resolve) => {
      import(
        /* webpackChunkName: "tdk" */
        "../utils/tdk"
      ).then((e) => {
        resolve(e);
      });
    });
  }

  // // 4.支持error
  public errorFn(){
    return new Promise((resolve) => {
      import(
        /* webpackChunkName: "error" */
        "../utils/error"
      ).then((e) => {
        resolve(e);
      });
    });
  }

  //  // 5.支持ajax 需要new
   public ajaxFn(){
    return new Promise((resolve) => {
      import(
        /* webpackChunkName: "ajax" */
        "../utils/ajax"
      ).then((e) => {
        resolve(e);
      });
    });
  }
}

export { utilInit };
