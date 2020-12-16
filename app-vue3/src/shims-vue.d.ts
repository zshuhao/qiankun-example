declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare enum Directions {
  Up,
  Down,
  Left,
  Right
}
