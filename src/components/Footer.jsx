import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  const footerGroups = [
    {
      title: "About",
      links: [
        { label: "Company", to: "/" },
        { label: "Community", to: "/" },
        { label: "Careers", to: "/" },
      ],
    },
    {
      title: "Blog",
      links: [
        { label: "Tech", to: "/" },
        { label: "Music", to: "/" },
        { label: "Videos", to: "/" },
      ],
    },
    {
      title: "Movies",
      links: [
        { label: "Now Playing", to: "/movie" },
        { label: "Popular", to: "/movie" },
        { label: "Top Rated", to: "/movie" },
      ],
    },
  ];

  return (
    <footer className="bg-neutral-900 border-t border-neutral-800">
      <div className="container mx-auto p-6">
        <div className="lg:flex lg:gap-10">
          <div className="w-full lg:w-2/5">
            <div>
              <Link to={"/"}>
                <img className="w-auto h-9" src={logo} alt="Komsan Movie logo" />
              </Link>

              <p className="max-w-sm mt-3 text-neutral-400">
                Komsan Movie – A modern movie discovery platform that helps users explore trending movies and TV shows through a fast, responsive, and user-friendly interface.
              </p>

              <div className="flex mt-6 -mx-2">
                <a
                  href="https://t.me/Samnang_ch_77"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-2 text-neutral-400 transition-transform duration-300 hover:scale-110 hover:text-white"
                  aria-label="Telegram"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.78 18.65l-.4 3.9c.57 0 .82-.24 1.12-.54l2.69-2.57 5.58 4.08c1.02.56 1.74.27 2.02-.94L24.43 5.4c.37-1.5-.54-2.09-1.54-1.72L1.49 11.93c-1.46.57-1.44 1.38-.25 1.75l5.47 1.71L19.41 7.4c.6-.4 1.15-.18.69.22"></path>
                  </svg>
                </a>

                <a
                  href="https://github.com/samnanggchan"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-2 text-neutral-400 transition-transform duration-300 hover:scale-110 hover:text-white"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {footerGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="uppercase text-white">{group.title}</h3>
                  {group.links.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="block mt-2 text-sm text-neutral-400 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}

              <div>
                <h3 className="uppercase text-white">Contact</h3>
                <span className="block mt-2 text-sm text-neutral-400">
                  +855 81 882 555
                </span>
                <span className="block mt-2 text-sm text-neutral-400">
                  komsan@gmail.com
                </span>
                <span className="block mt-2 text-sm text-neutral-400">
                  Phnom penh, Cambodia
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-neutral-800 border-none" />

        <div>
          <p className="text-center text-neutral-300 text-sm">
            © {new Date().getFullYear()} Komsan Movie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
