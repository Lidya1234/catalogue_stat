import Form from 'react-bootstrap/Form';
import { PropTypes } from 'prop-types';

const catalogueFilter = ({ handleFilterChange }) => {
  const categories = [
    'All',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  return (
    <Form>
      <Form.Group
        controlId="exampleForm.CategorySelect1"
        className="selectbox d-flex"
      >
        <Form.Label className="selectbox-title mt-2">
          Filter books by category:
        </Form.Label>
        <Form.Control
          as="select"
          className="mt-1"
          onChange={(event) => {
            handleFilterChange(event);
          }}
        >
          {categories.map((category) => (
            <option key="i">{category}</option>
          ))}
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

catalogueFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};
export default catalogueFilter;
