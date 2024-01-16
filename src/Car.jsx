import "./Car.css"

function Car({ name, year = "not specified", fontSize }) {
    const styles = { color: year > 2010 ? "green" : "red" }
    return (
        <div className="Car" style={{ styles, fontSize: fontSize }}>
            {year > 2010 ? <h2>New Model</h2> : <h2>Old Model</h2>}
            {name === "Nissan GTR" && <h2>Nissan GTR is the beast!</h2>}
            <h1>This is a {name} car</h1>
            <p>Year: {year}</p>
        </div>
    );
}
export default Car
