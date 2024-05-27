const Footer = () => {
  return (
    <footer className="justify-self-end pt-16 pb-8 lg:pt-24 lg:pb-10">
      <div className="px-4 mx-auto max-w-8xl lg:px-4">
        <div className="grid gap-12 lg:grid-cols-6 lg:gap-18">
          <div className="col-span-2">
            <a className="flex mb-6" href="/">
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  maxWidth: "100%",
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    maxWidth: "100%",
                  }}
                >
                  <img
                    alt={true.toString()}
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2733%27/%3e"
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                    }}
                  />
                </span>
                <img
                  alt="Nothing.me Logo"
                  src="/images/logo.svg"
                  decoding="async"
                  data-nimg="intrinsic"
                  style={{
                    position: "absolute",
                    inset: 0,
                    boxSizing: "border-box",
                    padding: 0,
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: 0,
                    height: 0,
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                  }}
                />
              </span>
              <span className="self-center ml-3 text-2xl font-semibold text-gray-900 dark:text-white">
                Nothing.me
              </span>
            </a>
            <p className="text-gray-600 dark:text-gray-400">
              Nothing.me is an ecosystem built on top of Tailwind CSS including a
              component library, block sections, a Figma design system and other
              resources.
            </p>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">
              Resources
            </h3>
            <ul>
              <li className="mb-4">
                <a
                  href="https://nothing.me.com/docs/getting-started/introduction/"
                  className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                >
                  Documentation
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  href="/blocks/"
                >
                  Nothing.me Blocks
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  href="/icons/"
                >
                  Nothing.me Icons
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  href="/figma/"
                >
                  Nothing.me Figma
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  href="https://chat.openai.com/g/g-y7yC35HB9-Nothing.me-gpt"
                >
                  Nothing.me GPT
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  href="/pro/"
                >
                  Pro version
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">
              Help &amp; support
            </h3>
            <ul>
              <li className="mb-4">
                <a
                  className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  href="/contact/"
                >
                  Contact us
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  href="/dashboard/support/"
                >
                  Support center
                </a>
              </li>
              <li className="mb-4 flex items-center">
                <a
                  className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  href="/work-with-us/"
                >
                  Work with us
                </a>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-2">
                  New
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">
              Follow us
            </h3>
            <ul>
              <li className="mb-4">
                <a
                  href="https://discord.gg/4eeurUVvTy"
                  rel="noreferrer nofollow"
                  className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                >
                  Discord
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://github.com/themesberg"
                  rel="noreferrer nofollow"
                  className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                >
                  Github
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://twitter.com/zoltanszogyenyi"
                  rel="noreferrer nofollow"
                  className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">
              Legal
            </h3>
            <ul>
              <li className="mb-4">
                <a
                  className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  href="/license/"
                >
                  License (EULA)
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  href="/privacy-policy/"
                >
                  Privacy policy
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  href="/terms-and-conditions/"
                >
                  Terms &amp; conditions
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  href="/brand/"
                >
                  Brand guideline
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-200 dark:border-gray-700 lg:my-12" />
        <span className="block font-normal text-center text-gray-600 dark:text-gray-400">
          © 2019-2024 Nothing.me™ is a registered trademark. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
export default Footer;
