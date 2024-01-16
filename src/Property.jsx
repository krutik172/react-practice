import PropTypes from 'prop-types'

function Property({ name, price, rating }) {
    return (
        <div>
            <h1>{name}</h1>
            <h2>${price} a night</h2>
            <p>Rating {rating}</p>
        </div>
    );
}

Property.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number
}
export default Property
