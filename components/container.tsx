type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  // return <div className="container mx-auto px-0">{children}</div>;
  return <div className="mx-auto px-0">{children}</div>;
  // };
};

export default Container;
