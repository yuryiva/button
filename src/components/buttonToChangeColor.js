import React , {Component} from 'react'
import './buttonToChangeColor.css'

class ButtonToChangeColor extends Component {
    state={
        press: false,
        showPictureSection: false,
        text: 'alotoftext'
        }

    changeColor = () => {
        this.setState(state => ({
            press: !state.press
            }
        ))
    }

    onYesClick = () => {
        this.setState((state) => {
            return {
                showPictureSection: !state.showPictureSection
            }
        })
    }

    changeText =() => {
        this.setState({text: 'newText'})

    }


    // goBack = () => {
    //     this.setState({showPictureSection: false})

    // }
    render (){
        let classNames = 'green'

        if(this.state.press) {
            classNames = 'red'
        }
        
            return(

            <span>
            <button className={classNames}
            onClick={
                this.changeColor
            } >ButtonToChangeColor</button>
            
            {
                this.state.showPictureSection ?
                <div
                onMouseOver={this.changeText}
                ><h1>{this.state.text}</h1>
                <button   ////// onClick={this.goBack}>BACK</button>
                onClick={ this.onYesClick }>BACK</button>
                
                </div>
                :
                <div>
            <h1>Do you want to play with a picture?</h1>
            <button
            onClick={ this.onYesClick }>YES</button>
            </div>

            }

            
            

            </span>
            
        )
    }
}


export default ButtonToChangeColor;