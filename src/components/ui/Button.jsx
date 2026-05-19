const Button = ({ children, href }) => {
  return (
    <a
      href={href}
      className="px-6 py-3 rounded-xl bg-primary hover:bg-secondary transition text-white font-medium shadow-lg"
    >
      {children}
    </a>
  );
};

export default Button;
