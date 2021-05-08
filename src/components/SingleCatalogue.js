const SingleCatalogue = ({
  key, item, name, description,
}) => (
  <div className="single-catalog card">
    <h1 className="item-name">{item}</h1>
    <img src={name} />

    <h5><i>{description}</i></h5>
  </div>
);
export default SingleCatalogue;
