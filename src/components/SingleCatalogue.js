import { PropTypes } from 'prop-types';

const SingleCatalogue = ({
  key, item, name, description,
}) => (
  <div className="single-catalog card">
    <h1 className="item-name">{item}</h1>
    <img src={name} alt={key} />

    <h5><i>{description}</i></h5>
  </div>
);

SingleCatalogue.propTypes = {
  key: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default SingleCatalogue;
