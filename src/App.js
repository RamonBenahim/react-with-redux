import { connect } from "react-redux";


function App({ contador, dispatch }) {
  return (
    <div>
      <h1>Total: {contador} </h1>
      <button onClick={() => dispatch( {
        type:'INCREMENTAR'})}>Incrementar</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    contador: state
  }
}

export default connect(mapStateToProps) (App)


