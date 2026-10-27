const User = () => {
    //variáveis devem vir antes do "return"
    const name = "Natasha";
    return (
        <>
            <div>
                {/* {} : expressões JSX */}
                <p>Olá, {name}</p>
            </div>
        </>
    );
};

export default User;