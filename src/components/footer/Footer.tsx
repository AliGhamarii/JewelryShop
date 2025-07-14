import { Container } from "../container/Container";

export const Footer = () => {
  const footerLinks = [
    { label: "About Us", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ];

  return (
    <footer className="min-h-auto bg-white/50 dark:bg-gray-700/50 backdrop-blur-md border-t border-gray-200 dark:border-gray-600 shadow-sm mt-10">
      <Container>
        <div className="relative">
          <div className="w-full py-4 md:flex-row md:items-center md:justify-between flex flex-col justify-center items-center">
            <span className="text-sm text-gray-900 dark:text-white sm:text-center">
              © 2025{" "}
              <a href="/" className="hover:underline font-semibold">
                Jewelry Shop
              </a>
              . All rights reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-900 dark:text-white sm:mt-0">
              {footerLinks.map(({ label, href }, index) => (
                <li key={label}>
                  <a
                    href={href}
                    className={`hover:underline ${
                      index !== footerLinks.length - 1 ? "me-4 md:me-6" : ""
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};
