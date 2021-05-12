import { PropTypes } from 'prop-types';

const SingleCatalogue = ({
  key, item, name,
}) => (
  <div className="single-catalog card" data-testid="catalogue">
    <h1 className="item-name">{item}</h1>
    <img src={name} alt={key} />
  </div>
);

SingleCatalogue.propTypes = {
  item: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};
export default SingleCatalogue;
