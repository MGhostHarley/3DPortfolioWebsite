const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/m-harley/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          class="object-fit h-[34px] w-8"
          alt="linkedin-link"
          src="./src/assets/linkedin.webp"
        />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          class="object-scale-down h-10 w-10"
          alt="twitter-link"
          src="./src/assets/twitter.png"
        />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/MGhostHarley"
        target="_blank"
        rel="noreferrer"
      >
        <img
          class="object-scale-down h-10 w-10"
          alt="github-link"
          src="./src/assets/github2.png"
        />
      </a>
    </div>
  )
}

export default SocialMediaIcons
