function ShoppingList({ items }) {
    return (
        <ul>
            {items.map((item) => <li
                key={item.id}
                style={{
                    color: item.completed ? "green" : "red",
                    textDecoration: item.completed ? "line-through" : "none"
                }}>
                {item.name} - {item.price}
            </li>
            )}
        </ul>
    );
}
export default ShoppingList
