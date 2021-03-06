import React from 'react'
import { Svg } from './styles.js'
import { Link } from '@reach/router'

export const Logo = props => (
  <Link to={'/'}>
    <Svg
      width={471.052}
      height={144.822}
      viewBox='14.474 2.589 471.052 144.822'
      style={{
        background: '0 0'
      }}
      preserveAspectRatio='xMidYMid'
      {...props}
    >
      <defs>
        <linearGradient
          id='prefix__editing-halftone-gradient'
          x1={0.5}
          y1={0.2}
          x2={0.5}
          y2={0.8}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#00d9ff' stopOpacity={0.8} />
          <stop offset={0.5} stopColor='#619aee' stopOpacity={0.9} />
          <stop offset={1} stopColor='#b20d99' />
        </linearGradient>
        <filter id='prefix__editing-halftone'>
          <feFlood result='color' floodColor='red' />
          <feImage
            xlinkHref='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAwcHgiIGhlaWdodD0iMTAwMHB4Ij4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iNC45IiBoZWlnaHQ9IjQuOSI+CiAgICAgIDxjaXJjbGUgY3g9IjIuNDUiIGN5PSIyLjQ1IiByPSIxLjkiIGZpbGw9InJlZCIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+Cjwvc3ZnPg=='
            width={1000}
            height={1000}
            result='image'
          />
          <feTile in='image' result='tile' />
          <feComposite operator='in' in='SourceGraphic' in2='tile' result='dot' />
          <feComposite
            operator='in'
            in='dot'
            in2='SourceGraphic'
            result='dotted'
          />
          <feGaussianBlur in='dotted' stdDeviation={0.8} />
          <feComponentTransfer result='cutoff'>
            <feFuncA type='linear' slope={10} intercept={-3} />
          </feComponentTransfer>
        </filter>
      </defs>
      <path
        d='M32.23-52.69q19.36 0 19.36 13.66 0 7.51-4.82 12.01-4.74 4.5-13.04 4.5-3.87 0-6.87-2.21-1.42-.95-2.37-2.21 5.77 0 8.81-3.51 3.04-3.52 3.04-10.39 0-6.88-6.79-6.88h-1.9q-.47 0-.87.08L17.7 0H.55l9.72-51.74q8.45-.8 13.35-.87 4.9-.08 8.61-.08zm51.75 39.34q1.97 1.34 1.97 4.3 0 2.97-1.5 4.86-1.5 1.9-3.95 3.16-5.05 2.61-10.51 2.61-5.45 0-8.65-1.18-3.2-1.19-5.33-3.4-4.19-4.19-4.19-11.85 0-11.93 6.48-19.2 6.95-7.82 19.04-7.82 7.51 0 11.22 3.16 2.76 2.37 2.76 6.24 0 13.9-24.01 13.9-.32 2.06-.32 3.8 0 3.63 1.62 5.01 1.62 1.39 4.62 1.39t6.2-1.39q3.2-1.38 4.55-3.59zm-16.12-8.61q5.61 0 8.85-3.48 3.24-3.32 3.24-8.61 0-1.82-.67-2.8-.67-.99-2.02-.99-1.34 0-2.49.51-1.14.52-2.33 2.25-2.92 3.95-4.58 13.12zM95.27-7.9q0-2.13 1.11-7.5l4.19-21.33h-4.66l.31-2.37q9.48-2.85 18.65-9.8h3.79l-1.9 8.61h6.16l-.71 3.56h-6.08L112.1-15.4q-1.03 4.89-1.03 6.55 0 3.79 3.32 4.58-.79 2.69-3.63 4.27-2.85 1.58-6.87 1.58-4.03 0-6.33-2.53-2.29-2.53-2.29-6.95zm32.55-25.12q2.69-3.79 6.76-6.32 4.07-2.53 9.04-2.53 4.98 0 7.35 1.58l15.48-1.58-5.37 30.34q-2.76 15.48-8.61 21.56-5.61 5.77-16.51 5.77-8.3 0-13.04-2.61-4.74-2.6-4.74-6.95 0-3.24 2.45-5.09 2.45-1.86 6.24-1.86 3.32 0 5.85 1.5 1.5.79 2.21 1.9-1.81 1.58-1.81 4.18 0 3.4 3.16 3.4 5.29 0 8.29-12.48.87-3.4 1.58-6.8-3.56 4.35-11.61 4.35-5.61 0-8.85-2.69-3.24-2.68-3.24-9 0-3.95 1.34-8.42 1.35-4.46 4.03-8.25zm10.27 16.9q0 5.38 2.77 5.38 1.89 0 3.71-2.06 1.42-1.66 1.98-4.11l4.02-20.3q-.39-.08-.79-.24-.79-.31-1.81-.31-4.82 0-7.67 7.9-2.21 6.16-2.21 13.74zm56.17-6.08q2.85-5.05 2.85-10.19 0-3.4-2.45-3.4-1.9 0-3.88 3.24-2.05 3.24-2.68 7.43L183.99 0l-16.35 1.58 8.06-41.87 13.03-1.58-1.42 7.98q3.87-7.98 12.56-7.98 4.58 0 7.07 2.37t2.49 7.23q0 4.86-3.2 7.94t-8.65 3.08q-2.37 0-3.32-.95zm19.87 19.83q-1.86-2.05-2.69-5.29-.83-3.24-.83-8.54 0-5.29 1.82-10.11 1.82-4.82 5.14-8.29 6.79-7.27 18.01-7.27 4.03 0 6.95 1.34l13.51-1.34-5.85 30.81q-.23.95-.23 2.69 0 1.73 1.06 2.84 1.07 1.11 2.65 1.26Q252.88-1.58 250 0q-2.89 1.58-6.13 1.58-3.24 0-5.41-1.22-2.17-1.23-2.8-3.28-1.27 1.97-3.95 3.24-2.69 1.26-6.28 1.26-3.6 0-6.52-.95-2.92-.95-4.78-3zm16.67-32.07q-.91 1.42-1.7 3.83-.79 2.41-2.09 8.85-1.31 6.43-1.31 11.02 0 4.58.71 5.92.72 1.34 1.98 1.34 2.53 0 4.38-2.41 1.86-2.4 2.57-6.67l4.19-23.15q-1.66-1.42-3.6-1.42-1.93 0-3.08.63-1.14.63-2.05 2.06zm86.39 36.02q-9.56 0-9.56-7.43 0-3.24 1.38-9.52 1.38-6.28 1.86-8.8 1.1-5.77 1.1-7.59 0-4.03-3-4.03-1.98 0-3.87 2.73-1.9 2.72-2.77 8.17L297.44 0l-15.41 1.58 4.27-21.49q.71-3.55 1.34-7.58.63-4.03.63-4.66 0-3.64-2.69-3.64-1.81 0-3.79 2.69-1.97 2.69-3.08 8.21L273.89 0l-15.56 1.58 8.3-41.87 12.87-1.58-1.34 7.98q2.05-4.27 5.84-6.12 3.8-1.86 9.72-1.86 3.4 0 5.61 1.66 2.21 1.66 2.92 4.34 1.35-2.76 4.78-4.38 3.44-1.62 7.67-1.62 4.22 0 6.32.91 2.09.91 3.35 2.41 2.14 2.76 2.14 7.82 0 4.98-2.14 15.33-1.1 5.05-1.1 6.91 0 1.85 1.06 2.96 1.07 1.11 2.65 1.26-.79 2.69-3.51 4.27-2.73 1.58-6.28 1.58z'
        fill='url(#prefix__editing-halftone-gradient)'
        transform='translate(86.235 109.651)'
        filter='url(#prefix__editing-halftone)'
      />
      <style />
    </Svg>
  </Link>
)
