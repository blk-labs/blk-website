import { useEffect } from "react";

const Title = (props) => {
  useEffect(() => {
    props.home === true ? 
    document.title = `BLK Labs | Web Design and Development`
    :
    document.title = `${props.title} | BLK Labs`;
  }, [props.title, props.home]);
  return props.children;
};

export default Title;