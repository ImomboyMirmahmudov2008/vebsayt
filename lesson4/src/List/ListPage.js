import React from 'react'
import ReactDOM from 'react-dom/client';

class Lists extends React.Component {

    state = {
        students:[
            "Imomboy",
            'Nodirbek',
            'Mahammad',
            'Salim'
        ],
        cars:[
            'Malibu',
            'Zaparoj',
            'Audi',
            'Nexia'
        ]
    }

    deleteFunc=(selectedItem, index) => {
        this.state.students.splice(index , 1)
        this.setState({
            students: this.state.students
        }) 
    }

  render() {
    const {students,cars} = this.state
    return (
        <div>   
            <ul className="list-group col-md-4 mx-auto mt-5">
            {
                students.map((item,index) => (
                    <li className="list-group-item d-flex justify-content-between" key={index}>{item}
                    <button className='btn btn-danger ms-5' onClick={() => this.deleteFunc(item)}>delete</button>
                    </li>
                ))
            }
            </ul>
        </div>
      )
  }
}

export default Lists