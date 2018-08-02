import React, { Component } from 'react';
import './App.css';
import OutputUsuario from './UserOutput/UserOutput';
import OutputSenha from './UserOutput/UserOutputSenha';
import InputUsuario from './UserInput/UserInput';
import InputSenha from './UserInput/UserInputSenha';

class App extends Component {

  state = {//Aqui nós vamos definir o que irá aparecer na nossa tela, referente a usuarios

	usuarios: [ {usuario: 'usuario', senha: 'senha'}]

  }

  trataEvento0 = (event) => {		
	var novoUsuario = event.target.value;
	//Aqui no setState, atualizamos apenas quem chamou o evento	
	this.setState(	{ 
		usuarios:
		 [ {usuario: novoUsuario, senha: this.state.usuarios[0].senha}]
	})

  }

trataEvento1 = (event) => {	
	var novaSenha = event.target.value;
	this.setState(	{ 
		usuarios:
		 [ {usuario: this.state.usuarios[0].usuario, senha: novaSenha}]
	})

  }

  render() {
    return (
    	//Aqui vamos criar o nosso Output e o nosso Input
     <div className="App">
		<OutputUsuario usuario={this.state.usuarios[0].usuario}/>
		<InputUsuario valor={this.state.usuarios[0].usuario}//Valor é referente a o nome que aparece na nossa caixa de diálogo assim que abrimos a page
			atualizar={this.trataEvento0}/>
		<OutputSenha senha={this.state.usuarios[0].senha}/>
		<InputSenha valor={this.state.usuarios[0].senha}//Valor é referente a o nome que aparece na nossa caixa de diálogo assim que abrimos a page
			atualizar={this.trataEvento1}/>
		<button style={{background: 222, color: 'silver', marginTop: 10, padding: 10}} onClick={()=>{ alert('Sucesso!'); }}>
			Confirmar
		</button>
      </div>
    );
  }
}

export default App;
