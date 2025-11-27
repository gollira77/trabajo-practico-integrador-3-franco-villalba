const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-zinc-800 text-white text-center p-4">
      <p>&copy; {currentYear} - Dario Ezequiel Ruiz Diaz</p>
      <p>Trabajo Práctico Integrador II</p>
    </footer>
  );
};
export default Footer;