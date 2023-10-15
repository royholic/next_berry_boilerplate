"use client"
import Image from 'next/image'
import styled from '@emotion/styled'

const ExampleComponentCSS = styled.div`
  color: red; 
`; 

export default function Home() {
  return (
    <ExampleComponentCSS>NextJS</ExampleComponentCSS>
  )
}
