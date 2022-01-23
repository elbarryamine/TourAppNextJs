import React from 'react'

type Props = {
  height?: number | string
  width?: number | string
  fill?: string
}
const defaultSettings = {
  height: 15,
  width: 15,
  fill: '#CABFFD',
}
Notification.defaultProps = defaultSettings
export function Notification({ width, height, fill }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width={width} height={height}>
      <path
        fill={fill}
        d="M22.555,13.662l-1.9-6.836A9.321,9.321,0,0,0,2.576,7.3L1.105,13.915A5,5,0,0,0,5.986,20H7.1a5,5,0,0,0,9.8,0h.838a5,5,0,0,0,4.818-6.338ZM12,22a3,3,0,0,1-2.816-2h5.632A3,3,0,0,1,12,22Zm8.126-5.185A2.977,2.977,0,0,1,17.737,18H5.986a3,3,0,0,1-2.928-3.651l1.47-6.616a7.321,7.321,0,0,1,14.2-.372l1.9,6.836A2.977,2.977,0,0,1,20.126,16.815Z"
      />
    </svg>
  )
}
FilledNotification.defaultProps = defaultSettings
export function FilledNotification({ width, height, fill }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width={width} height={height}>
      <path d="M7.424,21a4.99,4.99,0,0,0,9.152,0Z" fill={fill} />
      <path
        fill={fill}
        d="M22.392,12.549,20.656,6.826A9.321,9.321,0,0,0,2.58,7.28L1.232,12.817A5,5,0,0,0,6.09,19H17.607a5,5,0,0,0,4.785-6.451Z"
      />
    </svg>
  )
}
Search.defaultProps = defaultSettings
export function Search({ width, height, fill }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width={width} height={height}>
      <path
        fill={fill}
        d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"
      />
    </svg>
  )
}
Bulb.defaultProps = defaultSettings
export function Bulb({ width, height, fill }: Props) {
  return (
    <svg id="Layer_1" height={height} viewBox="0 0 24 24" width={width} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
      <path
        fill={fill}
        d="m17.994 2.286a9 9 0 0 0 -14.919 5.536 8.938 8.938 0 0 0 2.793 7.761 6.263 6.263 0 0 1 2.132 4.566v.161a3.694 3.694 0 0 0 3.69 3.69h.62a3.694 3.694 0 0 0 3.69-3.69v-.549a5.323 5.323 0 0 1 1.932-4 8.994 8.994 0 0 0 .062-13.477zm-5.684 19.714h-.62a1.692 1.692 0 0 1 -1.69-1.69s-.007-.26-.008-.31h4.008v.31a1.692 1.692 0 0 1 -1.69 1.69zm4.3-7.741a7.667 7.667 0 0 0 -2.364 3.741h-1.246v-7.184a3 3 0 0 0 2-2.816 1 1 0 0 0 -2 0 1 1 0 0 1 -2 0 1 1 0 0 0 -2 0 3 3 0 0 0 2 2.816v7.184h-1.322a8.634 8.634 0 0 0 -2.448-3.881 7 7 0 0 1 3.951-12.073 7.452 7.452 0 0 1 .828-.046 6.921 6.921 0 0 1 4.652 1.778 6.993 6.993 0 0 1 -.048 10.481z"
      />
    </svg>
  )
}
