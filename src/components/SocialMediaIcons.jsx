const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://web.facebook.com/flare.lee.75/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/facebook-1.png" width={200} />
      </a>
     
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/MoralesRish/rishelle.github.io"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="../assets/github-2.png" width={200} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
