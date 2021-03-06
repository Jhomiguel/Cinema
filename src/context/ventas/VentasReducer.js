export default (state, action) => {
  switch (action.type) {
    case "OBTENER_FACTURAS":
      return{
        ...state,
        facturas: action.payload
      }
    case "REMOVER_FACTURA":
      return {
        ...state,
        facturas: state.facturas.filter(
          (factura) => factura[0] !== action.payload
          ),
        facturaSeleccionada: null,
      };
    default:
      return state;
  }
};
