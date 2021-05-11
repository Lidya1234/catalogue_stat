import { PropTypes } from 'prop-types';

const SingleCatalogue = ({
  item, name, description,
}) => (
  <div className="single-catalog card" data-testid="catalogue">
    <h1 className="item-name">{item}</h1>
    <img src={name} alt={name} />
    <h5>
      <i>
        {description}
      </i>
    </h5>
  </div>
);

SingleCatalogue.propTypes = {
  item: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default SingleCatalogue;
