'use strict';

class DynamicSelect extends React.Component{
    constructor(props){
        super(props)
    }

    handleChange = (event) =>
    {
        let selectedValue = event.target.value;
        this.props.onSelectChange(selectedValue);
    }

    render(){
        let label = this.props.label;
        let arrayOfData = this.props.arrayOfData;
        let options = arrayOfData.map((data) =>
                <option key={data.id} value={data.id}>
                    {data.name}
                </option>
            );

        return (
            <div>
                <p>{label}</p>
                <select className="form-select" onChange={this.handleChange}>
                    <option>Select Item</option>
                    {options}
                </select>
            </div>
        )
    }
}

const winery = [
    { id: '0', name: 'Other' },
    { id: '1', name: 'Artadi' },
    { id: '2', name: 'Vega Sicilia' },
    { id: '3', name: 'Toro Albala' },
    { id: '4', name: 'Dominio de Pingus' },
    { id: '5', name: 'Alvaro Palacios' },
    { id: '6', name: 'Vina Sastre' },
    { id: '7', name: 'Sierra Cantabria' },
    { id: '8', name: 'La Rioja Alta' },
    { id: '9', name: 'Marques de Murrieta' },
    { id: '10', name: 'Vinedos de Paganos' },
    { id: '11', name: 'Emilio Moro' },
    { id: '12', name: 'Remirez de Ganuza' },
    { id: '13', name: 'Bodegas Roda' },
    { id: '14', name: 'Martinet' },
    { id: '15', name: 'Matarromera' },
    { id: '16', name: 'Contino' },
    { id: '17', name: 'Abadia Retuerta' },
    { id: '18', name: 'Vina Pedrosa' },
    { id: '19', name: 'Sei Solo' },
    { id: '20', name: 'Losada' },
    { id: '21', name: 'Matsu' },
    { id: '22', name: 'La Vicalanda' },
    { id: '23', name: 'Mustiguillo' },
    { id: '24', name: 'Portal del Priorat' },
    { id: '25', name: 'Ramon Bilbao' },
    { id: '26', name: 'Imperial' },
    { id: '27', name: 'Conreria d\'Scala Dei' },
    { id: '28', name: 'Campillo' },
    { id: '29', name: 'Mar de Frades' },
    { id: '30', name: 'Bodegas La Horra' },
    { id: '31', name: 'Enrique Mendoza' },
    { id: '32', name: 'Clos Pons' },
];

const region = [
    { id: '0', name: 'Toro' },
    { id: '1', name: 'Vino de Espana' },
    { id: '2', name: 'Ribera del Duero' },
    { id: '3', name: 'Montilla-Moriles' },
    { id: '4', name: 'Jumilla' },
    { id: '5', name: 'Priorato' },
    { id: '6', name: 'Rioja Alta' },
    { id: '7', name: 'Somontano' },
    { id: '8', name: 'Mallorca' },
    { id: '9', name: 'Costers del Segre' },
    { id: '10', name: 'Sardon de Duero' },
    { id: '11', name: 'Rueda' },
    { id: '12', name: 'Montsant' },
    { id: '13', name: 'Rias Baixas' },
    { id: '14', name: 'Penedes' },
    { id: '15', name: 'Alicante' },
];

const types = [

];

class DropdownApp extends React.Component {
  constructor(props){
    super(props)
    this.state={
      selectedValue: 'Nothing selected'
    }
  }

  handleSelectChange = (selectedValue) =>{
    this.setState({
      selectedValue: selectedValue
    });
  }

  render() {
    return (
      <div id="DropdownApp">
          <DynamicSelect label="Winery" arrayOfData={winery} onSelectChange={this.handleSelectChange} />
          <DynamicSelect label="Region" arrayOfData={region} onSelectChange={this.handleSelectChange} />
          <DynamicSelect label="Types" arrayOfData={types} onSelectChange={this.handleSelectChange} />
      </div>
    );
  }
}

export {DropdownApp};