const AboutPage = () => {
  return (
    <>
      <h3>About me:</h3>
      <br></br>
      <p>I'm a software engineer with a hardware background, and I think games are neat.</p>
      <br></br>
      <p>I've recently received my M.Eng in Computer Science and a B.S. in Electrical and Computer Engineering from Cornell University,</p>
      <p>with a minor in Game Design. My interests span <b>game development, VR/AR, and hardware and robotics</b>. In my spare time, I enjoy</p>
      <p>listening to and making music, playing and making video games, falling off my skateboard, and taking low-quality pictures of dogs.</p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
