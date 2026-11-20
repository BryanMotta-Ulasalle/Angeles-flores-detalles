import React from 'react'
import { images } from './data.js'

export default function Photo({ image, alt = '', className = '', priority = false }) {
  const asset = images[image]
  if (!asset) return <img className={className} src="/media/pendiente.svg" alt={alt} />
  const [width, height] = asset.size
  const [x, y, w, h] = asset.crop
  return <div className={'photo-crop ' + className} style={{ aspectRatio: `${w}/${h}` }}>
    <img src={asset.src} alt={alt} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} width={width} height={height}
      style={{ width: `${width / w * 100}%`, height: `${height / h * 100}%`, left: `${-x / w * 100}%`, top: `${-y / h * 100}%` }}
      onError={event => { event.currentTarget.style.cssText = 'width:100%;height:100%;left:0;top:0'; event.currentTarget.onerror = null; event.currentTarget.src = '/media/pendiente.svg' }} />
  </div>
}
