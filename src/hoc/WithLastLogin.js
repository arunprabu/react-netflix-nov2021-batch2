// this is higher order comp - HOC 
// hoc is going to receive props children and return props children
// you can return multiple JSX elements 
// wrapper comp that doesn't return any JSX on its own. 
// naming convention: begin with 'With' prefix

const WithLastLogin = (props) => props.children;

export default WithLastLogin;