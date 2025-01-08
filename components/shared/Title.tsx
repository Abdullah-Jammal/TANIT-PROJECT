const Title = ({ title, style }: { title: string; style: string }) => {
  return <h2 className={style}>{title}</h2>;
};

export default Title;
