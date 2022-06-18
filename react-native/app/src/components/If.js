const If = props => {
  if (props.teste) {
    return props.children;
  }
  return false;
};

export default If;
