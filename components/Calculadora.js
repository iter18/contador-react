const Calculadora = () =>{
    const [valor, setValueCalc] = React.useState(0);

    const cambiaEdo = () => { 
            //Asignación JS tradicional
            //document.querySelector("#cajaCalc").value="valor";
            
            setValueCalc(valor);

        
    }

    const sumar = () =>{

    }
    const restar = () =>{

    } 

    return (
        <div>
            <h1>Calculadora</h1>
            <br/>
            <table>
                <tr>
                    <td colspan="4">
                        <input type="text" id="cajaCalc" value={valor} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <button  onClick={cambiaEdo} value="1">1</button>
                    </td>
                    <td>
                        <button>2</button>
                    </td>
                    <td>
                        <button>3</button>
                    </td>  
                    <td>
                        <button>+</button>
                    </td>                                                            
                </tr>
                <tr>
                    <td>
                        <button>4</button>
                    </td>
                    <td>
                        <button>5</button>
                    </td>
                    <td>
                        <button>6</button>
                    </td>  
                    <td>
                        <button>-</button>
                    </td>                                                            
                </tr>                
            </table>
        </div>   
    );
}