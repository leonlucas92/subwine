import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import registerServiceWorker from './registerServiceWorker';*/

/*var button = [
	{id: 1, label: "Cadastro de Produto"},
	{id: 2, label: "Registrar Pedido"},
	{id: 3, label: "Novo"},
	{id: 4, label: "Salvar"}
];*/

/*Função criar botão*/
var CallButton = (props) => (
	<button id={props.id} class={props.class}>{props.label}</button>
);

class MainApp extends React.Component{
	render(){
		return(
			<div>
				<h1>Subwine</h1>
				<div>
					<CallButton id="1" class="btn-01" label="Cadastro de Produto" />
					<CallButton id="2" class="btn-02" label="Registrar Pedido" />
				</div>



				

			</div>
		);
	}
};


ReactDOM.render(
	<MainApp />,
	document.getElementById('root')
);
/*registerServiceWorker();*/
