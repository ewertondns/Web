import React from 'react';
import img from './cat.png'
import './UserOutput.css'

const useroutput = function (props) {
	return 	<div className="useroutput">
				<img src={img} />
				<div txt>
					 <h1>Entrar</h1>
					<h3>Usuário: {props.usuario}</h3>
				</div>
			</div>;
}
export default useroutput;
