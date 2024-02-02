const AboutPage = () => {
  return (
    <>
      <h3>About me:</h3>
      <br></br>
      <p>I'm a software engineer with a hardware background, and I think games are neat.</p>
      <br></br>
      <p>My interests span <b>game development, VR/AR, and hardware and robotics</b>. In my spare time, I enjoy</p>
      <p>playing and making video games, listening to and making music, falling off my skateboard, </p>
      <p>and taking low-quality pictures of dogs.</p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
