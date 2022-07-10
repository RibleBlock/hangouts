/* eslint-disable no-unused-vars */
declare interface EventType {
  firstChild: {
    innerText: string,
  },
  lastChild: {
    innerText: string,
  },
  labels: [
    key: {
      getAttribute: (key: string) => string,
      lastChild: {
        innerText: string,
      },
    }
  ],
}
