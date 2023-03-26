const Card = (props) => {
  const classes =
    " overflow-hidden text-white tracking-wide bg-gradient-to-l from-[#00a6fb] to-[#0582ca] " +
    props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
