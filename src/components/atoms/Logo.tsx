export const Logo = ({ className = "w-24 h-auto" , text = "white" }) => {
  return (
    <img
      src={`/logo-${text}-text.png`}
      alt="Logo"
      className={className}
    />
  );
};
