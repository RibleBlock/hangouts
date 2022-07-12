/* eslint-disable no-unused-vars */
declare interface EventType {
  innerText?: string,
  firstChild: {
    innerText?: string,
  },
  lastChild: {
    lastChild: EventType,
    innerText?: string,
    querySelector: (value: string) => any,
  },
  labels: [
    key: {
      getAttribute: (key: string) => string,
      lastChild: {
        innerText: string,
      },
    },
  ],
  parentElement: EventType,
}
