import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Amanda Trang is a Software Engineer"
      />
      <meta
        name="keywords"
        content="amanda trang, amanda, trang, amanda trang portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Amanda Trang's Portfolio" />
      <meta
        property="og:description"
        content="This is Amanda's site!"
      />
      <meta property="og:image" content="https://imgur.com/bsat11O.png" />
      <meta property="og:url" content="https://amandatrang.vercel.app/" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Amanda Trang',
};
