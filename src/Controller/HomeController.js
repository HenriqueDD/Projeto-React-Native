import React from 'react'
import HomeView from '../View/HomeView'
import HomeModel from '../Model/HomeModel'

class HomeController extends React.Component{
    constructor() {
        super();

       let homeModel = new HomeModel();
       console.log(homeModel.returnText())

       this.state = {
           count: 0,
           isRunning: false
       };
    }

    onPressed = () =>{
        if(this.state.isRunning){
            clearInterval(this.interval);
            this.setState({
                isRunning: false
            })
        } else{
            this.interval = setInterval(() => {
                this.setState({
                    count: this.state.count + 1,
                });
            }, 1000);
            this.setState({
                isRunning: true,
            });


            
        }
    }

    static getDrivedStateFromProps = () => {
        return this.state
    }

    shouldComponentUpdate = () => {
        console.log('shouldComponentUpdate');
        if(this.state.count < 5){
            return true
        }
        return true //Somente reotornar True se realmente  quiser atualizar a tela
    }
 
    getSnapshotBeforeUpdate = () => {
        console.log('shouldComponentUpdate');
    }

    componentDidUpdate = () => {
        console.log('componentDidUpdate');
    }

    render = () =>{
        return <HomeView count={this.state.count} onPressed={this.onPressed}/>
            
        
    };
}

export default HomeController;