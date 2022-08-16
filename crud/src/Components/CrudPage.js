import { Component } from "react"

export default class CrudPage extends Component{


    state = {
        arr: [],
        inputVal1: '',
        inputVal2: '',
        inputVal: '',
    }

    AddName = () => {
        let arr1 = this.state.arr
        arr1.push(this.state.inputVal1)
        this.setState({
          arr:arr1,
          inputVal1:''
        })
      }
    
      valueHandler = (e) => {
        
    
        this.setState({
          inputVal1:e.target.value
        })
      }

    //   Email

    AddEmail = () => {
        let arr2 = this.state.arr
        arr2.push(this.state.inputVal2)
        this.setState({
          arr:arr2,
          inputVal2:''
        })
      }
    
      valueHandler2 = (e) => {
        
    
        this.setState({
          inputVal2:e.target.value
        })
      }

      //Phone


      AddPhone = () => {
        let arr3 = this.state.arr
        arr3.push(this.state.inputVal)
        this.setState({
          arr:arr3,
          inputVal:''
        })
      }
    
      valueHandler3 = (e) => {
        
    
        this.setState({
          inputVal:e.target.value
        })
      }
      


    render(){
        return(
            <div className="mx-auto w-50 text-center">
                <input type="text" className="form-control my-3 mx-auto w-50" value={this.state.inputVal1} onChange={this.valueHandler}></input><br></br>
                <input type="email" className="form-control my-3 mx-auto w-50" value={this.state.inputVal2} onChange={this.valueHandler2}></input><br></br>
                <input type="text" className="form-control my-3 mx-auto w-50" value={this.state.inputVal} onChange={this.valueHandler3}></input>
                <button className="btn btn-primary" onClick={this.AddEmail}>add list</button>

                <table className="table w-75 mx-auto my-5">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Surname</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    {
                        this.state.arr.map((item,index) => <td key={index}>{item}</td>)
                    }
                    {
                        this.state.arr.map((item1,index1) => <td key={index1}>{item1}</td>)
                    }
                    {
                        this.state.arr.map((item2,index2) => <td key={index2}>{item2}</td>)
                    }
                </tr>
                </tbody>
                </table>
            </div>
        )
    }
}