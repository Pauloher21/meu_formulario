import React, {Component} from 'react';
import logo from './logo.svg';

class App extends Component {
  constructor(props){
    this.state={
      nome:'',
      email:'',
      senha:''
    };
    this.cadastrar=this.cadastrar.bind(this);
  }
  cadastrar(event){
    const{nome,email,senha}=this.state;
    if(nome!==''&&email!==''&senha!==''){
    alert(`nome:${nome} \n Email:${email}`);
    }else{

    }
    event.preventDefault();
  }
  render(){
    return (
      <div>
        <nav>
        <h1>Novo usuario</h1><br/><br/>
    {this.state.error&&<p>{this.state.error}</p>}
        <form onSubmit={this.cadastrar}>

          <h3>Nome</h3><input type="text" value={this.state.nome}
           onChange={(e)=>this.setState({nome:e.target.value})}/>
            <h3>E-mail</h3><input type="text" value={this.state.email}
           onChange={(e)=>this.setState({email:e.target.value})}/>
            <h3>Senha</h3><input type="password" value={this.state.senha}
           onChange={(e)=>this.setState({senha:e.target.value})}/>
           <br/><br/>
           <button type="submit"><h2>Cadastrar</h2></button>
        </form>
        </nav>
      </div>
    );
   
  }

}
export default App; 
