function Reveal({ as = "div", className = "", children, ...rest }) {
  const Tag = as;
  return (
    <Tag className={`reveal ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}

export default Reveal;
