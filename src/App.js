import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txt_fname: "",
      txt_lname: "",
      rdo_gender: "",
      rdo_marital: "",
      sel_department: "",
      txt_basicsalary: "",

      name: "",
      gender: "",
      marital: "",
      department: "",
      bs: "",
      ta: "",
      da: "",
      hra: "",
      lic: "",
      pf: "",
      deduction: "",
      net: ""
    }
  }

  inputChange = (e) => {
    this.setState({ [e.target.name]: [e.target.value] })
  }

  buttonSubmit = (e) => {

    var localName = "";
    if (this.state.gender === "Female") {
      if (this.state.marital === "Married") {
        localName = "Mrs." + this.state.txt_fname + " " + this.state.txt_lname;
      }
      else {
        localName = "Miss." + this.state.txt_fname + " " + this.state.txt_lname;
      }
    }
    else {
      localName = "Mr." + this.state.txt_fname + " " + this.state.txt_lname;
    }

    var TA = "", DA = "", HRA = "", LIC = "", PF = "", DEDUCTION = "", NET = "", BS = parseInt(this.state.txt_basicsalary);
    if (BS >= 10000) {
        TA = BS * .4;
        DA = BS * .35;
        HRA = BS * .30;
        LIC = BS * .25;
        PF = BS * .20;
    }
    else if (BS >= 5000 && BS < 10000) {
      TA = BS * .35;
      DA = BS * .30;
      HRA = BS * .25;
      LIC = BS * .20;
      PF = BS * .15;
    } else if (BS < 5000) {
      TA = BS * .30;
      DA = BS * .25;
      HRA = BS * .20;
      LIC = BS * .15;
      PF = BS * .10;
    }
    DEDUCTION = LIC + PF;
    NET = BS + TA + DA + HRA - ( LIC + PF);

    this.setState({name: localName});
    this.setState({gender: this.state.rdo_gender});
    this.setState({marital: this.state.rdo_marital});
    this.setState({department: this.state.rdo_marital});
    this.setState({bs: this.state.txt_basicsalary});
    this.setState({ta: TA});
    this.setState({da: DA});
    this.setState({hra: HRA});
    this.setState({lic: LIC});
    this.setState({pf: PF});
    this.setState({deduction: DEDUCTION});
    this.setState({net: NET});

  }

  render() {
    return (
      <div>
        <table border="1" align='center'>
          <tr>
            <td>First Name</td>
            <td>
              <input type='text' name="txt_fname" onChange={this.inputChange}/>
            </td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>
              <input type='text' name="txt_lname" onChange={this.inputChange}/>
            </td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>
              <input type='radio' name="rdo_gender" value="Male" onChange={this.inputChange}/>Male
              <input type='radio' name="rdo_gender" value="Female" onChange={this.inputChange}/>Female
            </td>
          </tr>
          <tr>
            <td>Marital</td>
            <td>
              <input type='radio' name="rdo_marital" value="Single" onChange={this.inputChange}/>Single
              <input type='radio' name="rdo_marital" value="Married" onChange={this.inputChange}/>Married
            </td>
          </tr>
          <tr>
            <td>Department</td>
            <td>
              <select name="sel_department" onChange={this.inputChange}>
                <option value="">-----Select-----</option>
                <option value="Front End">Front End</option>
                <option value="Back End">Back End</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Basic Salary</td>
            <td>
              <input type='number' name="txt_basicsalary" onChange={this.inputChange}/>
            </td>
          </tr>
          <tr>
            <td colSpan={2} align='center'>
              <input type='submit' name="btn_submit" value="Submit" onClick={this.buttonSubmit} />
            </td>
          </tr>
          <tr>
            <td colSpan={2}></td>
          </tr>
          <tr>
            <td>Name</td>
            <td>
              {this.state.name}
            </td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>
              {this.state.gender}
            </td>
          </tr>
          <tr>
            <td>Marital</td>
            <td>
              {this.state.marital}
            </td>
          </tr>
          <tr>
            <td>Department</td>
            <td>
              {this.state.department}
            </td>
          </tr>
          <tr>
            <td>Basic Salary</td>
            <td>
              {this.state.bs}
            </td>
          </tr>
          <tr>
            <td>TA</td>
            <td>
              {this.state.ta}
            </td>
          </tr>
          <tr>
            <td>DA</td>
            <td>
              {this.state.da}
            </td>
          </tr>
          <tr>
            <td>HRA</td>
            <td>
              {this.state.hra}
            </td>
          </tr>
          <tr>
            <td>LIC</td>
            <td>
              {this.state.lic}
            </td>
          </tr>
          <tr>
            <td>PF</td>
            <td>
              {this.state.pf}
            </td>
          </tr>
          <tr>
            <td>Deduction</td>
            <td>
              {this.state.deduction}
            </td>
          </tr>
          <tr>
            <td>Net</td>
            <td>
              {this.state.net}
            </td>
          </tr>
        </table>
      </div>
    )
  }
}
