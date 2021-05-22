//useEffect como componentDidMount()
useEffect(() => {
  // O código que será executado quando o componente for montado
}, []);

//useEffect como componentDidMount() e componentDidUpdate()
useEffect(() => {
  //O código a ser executado quando o componente for montado ou atualizado
});

//useEffect como componentWillUnmount()
useEffect(() => {
  //A função que será chamada quando o componente for desmontado
  return () => {
    //O código que será executado quando o componente for desmontado
  };
});
