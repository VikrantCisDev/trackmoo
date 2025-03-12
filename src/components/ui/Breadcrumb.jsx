import Breadcrumb from 'react-bootstrap/Breadcrumb';

function CustomBreadcrumb({active}) {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Livestock</Breadcrumb.Item>
      <Breadcrumb.Item active>{active}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default CustomBreadcrumb;