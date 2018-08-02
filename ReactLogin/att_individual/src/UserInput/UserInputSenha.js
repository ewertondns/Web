import React from 'react';

const userinput = function (props) {
	return <div className="userinput">		
	<input //Aqui é onde criamos a nossa caixa de diálogo
		type="password" value={props.valor}
		onChange={props.atualizar}//O onChange é o método nativo da classe input, então quando a caixa texto for modificada, ele chama o atualizar.
	/>
	</div>;
}
export default userinput;