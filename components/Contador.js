const Contador = () => {
    const [contador,setContador] = React.useState(0);
    //creación de funcion para aumentar y cambiar estado
    const aumentar = () =>{
        //siempre se coloca el estado y dentro del estado la variable
        setContador(contador +1);
    } 
    const disminuir = () =>{
        setContador(contador - 1);
    }

    return (
        <div>
            <h1 className={contador > 0 ? "mayor" : "menor"}>Contador:{contador}</h1>
            <hr/>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={disminuir}>Disminuir</button>
        </div>
    );
}