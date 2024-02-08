import React from 'react'

interface SubtitleProps {
    color: string;
    value: string;
  }

export function Subtitle({color, value}: SubtitleProps) {
  return (
    <h2 className="subtitle" style={{color}}>{value}</h2>
  )
}
