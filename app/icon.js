import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = {
  width: 62,
  height: 62,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        A
      </div>
    ),
    {
      ...size,
    }
  )
}