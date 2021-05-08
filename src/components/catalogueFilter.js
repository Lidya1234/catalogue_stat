import Form from 'react-bootstrap/Form';
import { PropTypes } from 'prop-types';

const catalogueFilter = ({ categories, handleFilterChange }) => (
  <Form>
    <Form.Group
      controlId="exampleForm.CategorySelect1"
      className="selectbox d-flex justtify-content-around"
    >
      <Form.Label className="selectbox-title mt-2">
        <span>Category:</span>
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

catalogueFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};
export default catalogueFilter;
