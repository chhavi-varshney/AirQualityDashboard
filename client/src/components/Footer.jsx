function Footer({ darkMode }) {
  return (
    <footer
      className={`text-center py-6 transition-all duration-300 ${
        darkMode
          ? "text-slate-400"
          : "text-gray-600"
      }`}
    >
      © 2026 Air Quality Analytics Dashboard
    </footer>
  );
}

export default Footer;