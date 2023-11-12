export const Header = (props) => {
    const { level = 1, className } = props;
    const Tag = `h${level}`;
    return <Tag className={className}>{props.children}</Tag>;
  };