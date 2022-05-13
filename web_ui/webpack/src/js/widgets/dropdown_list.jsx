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
                <option key={data.name} value={data.name}>
                    {data.name}
                </option>
            );
        let name = label.toLowerCase().trim();
        return (
            <div>
                <p>{label}</p>
                <select className="form-select" onChange={this.handleChange} name={name} >
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
    { id: '0', name: 'Other' },
    { id: '1', name: 'Toro' },
    { id: '2', name: 'Vino de Espana' },
    { id: '3', name: 'Ribera del Duero' },
    { id: '4', name: 'Montilla-Moriles' },
    { id: '5', name: 'Jumilla' },
    { id: '6', name: 'Priorato' },
    { id: '7', name: 'Rioja Alta' },
    { id: '8', name: 'Somontano' },
    { id: '9', name: 'Mallorca' },
    { id: '10', name: 'Costers del Segre' },
    { id: '11', name: 'Sardon de Duero' },
    { id: '12', name: 'Rueda' },
    { id: '13', name: 'Montsant' },
    { id: '14', name: 'Rias Baixas' },
    { id: '15', name: 'Penedes' },
    { id: '16', name: 'Alicante' },
];

const types = [
    { id: '0', name: 'Other' },
    { id: '1', name: 'Toro Red' },
    { id: '2', name: 'Tempranillo' },
    { id: '3', name: 'Ribera Del Duero Red' },
    { id: '4', name: 'Pedro Ximenez' },
    { id: '5', name: 'Red' },
    { id: '6', name: 'Priorat Red' },
    { id: '7', name: 'Rioja Red' },
    { id: '8', name: 'Rioja White' },
    { id: '9', name: 'Grenache' },
    { id: '10', name: 'Cava' },
    { id: '11', name: 'Sherry' },
    { id: '12', name: 'Verdejo' },
    { id: '13', name: 'Syrah' },
    { id: '14', name: 'Monastrell' },
    { id: '15', name: 'Mencia' },
    { id: '16', name: 'Sparkling' },
    { id: '17', name: 'Montsant Red' },
    { id: '18', name: 'Albarino' },
    { id: '19', name: 'Chardonnay' },
    { id: '20', name: 'Cabernet Sauvignon' },
    { id: '21', name: 'Sauvignon Blanc' },
];

const base = [
    { name: '1' },
    { name: '2' },
    { name: '3' },
    { name: '4' },
    { name: '5' },
]
const acidity = [
    { name: '1' },
    { name: '2' },
    { name: '3' },
    { name: '4' },
    { name: '5' },
]

class DropdownApp extends React.Component {
  constructor(props){
    super(props)
    this.state={
      selectedValue: 'Other'
    }
  }

  handleSelectChange = (selectedValue) => {
      this.setState({
        selectedValue: selectedValue
      });
  }

  render() {
    return (
        <div>
            <div className="DropdownApp">
                <DynamicSelect label="Winery" arrayOfData={winery} onSelectChange={this.handleSelectChange} />
                <DynamicSelect label="Region" arrayOfData={region} onSelectChange={this.handleSelectChange} />
                <DynamicSelect label="Grape type" arrayOfData={types} onSelectChange={this.handleSelectChange} />
            </div>
            <div className="DropdownApp">
                <DynamicSelect label="Base" arrayOfData={base} onSelectChange={this.handleSelectChange} />
                <DynamicSelect label="Acidity" arrayOfData={acidity} onSelectChange={this.handleSelectChange} />
            </div>
        </div>
    );
  }
}

export {DropdownApp};