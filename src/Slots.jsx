function Slots({ val1, val2, val3 }) {
    const cond = val1 === val2 && val1 === val3;
    return (
        <div>
            <h1>{val1} {val2} {val3}</h1>
            <h2 style={{ color: cond ? "green" : "red" }}>{cond ? "You are winner" : "you lose :("} </h2>
            {cond && <h2>Congrats!</h2>}
        </div>

    );
}
export default Slots;
