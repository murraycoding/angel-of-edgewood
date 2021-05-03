import Head from 'next/head'
import Content from '../components/content'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Content 
        heading="Section Title"
        image="Images here"
        content="This is where you can write something about the image for this section."
        flipped={false}
      />
      <Content 
        heading="Section Title"
        image="Images here"
        content="This is a section where the content is flipped."
        flipped={true}
      />
    </>
  )
}
