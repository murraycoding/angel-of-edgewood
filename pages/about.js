import Content from '../components/content'

export default function AboutPage() {
  return (
    <>
      <h2 className="center">Board of Directors</h2>
      <p className="center">Meet the team!</p>
      <Content
        image="picture here"
        heading="Name of Person"
        content="This is a quick bio of the person."
      />
    </>
  )
}