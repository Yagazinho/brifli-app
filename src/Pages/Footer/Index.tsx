const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-black/75 dark:text-gray-500 py-4 text-center">
      <p className="text-sm">
        &copy; {currentYear} Brifli. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
