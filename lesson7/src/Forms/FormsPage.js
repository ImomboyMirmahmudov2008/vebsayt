import React, {Component} from 'react'

export default class FormPage extends Component {
  // state = {
  //   name: ''
  // }

  // valueHandler = (e) => {
  //   this.setState({
  //     name:e.target.value
  //   })
  // }

  // inputChange = (e) => {
  //   console.log('imom ');
  // }

  // deleteFunc = (item) => {
  //   this.setState({

  //   })
  // }

  state = {
    lists: [],
    inputVal: '',
    inputVal2:'',
    arr:[]
  }

  addLists = () => {
    let list = this.state.lists
    list.push(this.state.inputVal)
    this.setState({
      lists:list,
      inputVal:''
    })
  }

  valueHandler = (e) => {
    

    this.setState({
      inputVal:e.target.value
    })
  }

  deleteFunc = (item,index) => {
    let a = this.state.lists.splice(index, 1)
    console.log(a);
    this.setState({
      
    })
  }


  // email

  addList1 = () => {
    let arr1 = this.state.arr
    arr1.push(this.state.inputVal2)
    this.setState({
      arr:arr1,
      inputVal2:''
    })
  }

  valueHandler2 = (event) => {
    this.setState({
      inputVal2:event.target.value
    })
  }

  deleteFunc1 = (item1,index1) => {
    let a1 = this.state.arr.splice(index1, 1)
    console.log(a1);
    this.setState({
      
    })
  }

  render(){
    return(
      <div className='mx-auto col-md-6 mt-5'>
          <div>
              <input type="text" className='w-75 form-control mb-4' value={this.state.inputVal} onChange={this.valueHandler}></input>
              <button className='btn btn-success ms-3' onClick={this.addLists}>Add me</button>
              <button className='btn btn-danger ms-3' onClick={(item,index)=>this.deleteFunc(item,index)}>Delete</button>


              {/* email input */}


              <input type="email" className='w-75 form-control mb-4  mt-4' value={this.state.inputVal2} onChange={this.valueHandler2}></input>
              <button className='btn btn-success ms-3' onClick={this.addList1}>Add me</button>
              <button className='btn btn-danger ms-3' onClick={(item1,index1)=>this.deleteFunc1(item1,index1)}>Delete</button>
          </div>

        <ul className="list-group">
          {
            this.state.lists.map((item,index) => <li className="list-group-item mt-3 w-75" key={index}>{item}</li>)  
          }
          
        </ul>

        <ul className='list-group'>
          {
            this.state.arr.map((item1,index1) =>  <li className="list-group-item mt-3 w-75" key={index1}>{item1}</li>)
          }
        </ul>
      </div>
    )
  }

} 