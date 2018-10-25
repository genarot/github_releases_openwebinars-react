import React    from 'react';

/**
 * Renderiza el formulario de búsqueda.
 */
class SearchForm extends React.Component {
  constructor( props ) {
    super(props);

    //Binds
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      value: ''
    }
  } 

  /**
   * Actualizamos el estado con cada cambio en el input.
   * El parámetro e incluye toda la información del evento
   */
  onChange( e ) {
      this.setState({value: e.target.value });
  }

  /**
   * El usuario ha pulsado enter! Cancelamos el evento por defecto para
   * evitar el envío de la petición POST y notificamos al padre
   */
  onSubmit( e ) {
    e.preventDefault();
    console.log(this.state);
    
    this.props.onSubmit( this.state.value );
  }

  /**
   * Este componente renderiza un formulario con un único campo. Cuando
   * el usuario pulse enter, este form lanzará el evento onSubmit. También
   * capturamos el evento onChange del input para almacenar el valor del texto.
   */
  render() {
    return  <form onSubmit={this.onSubmit}>
                <label htmlFor="searchInput">Search a repository</label>
                <input type="text" placeholder="react, webpack..." className="u-full-width" onChange={ this.onChange } defaultValue={ this.props.search }/>
                <p className="align-center" >
                  <input type="submit" className="button-primary" value="Search" />
                </p>
            </form>
  }
}

// Export the class
export default SearchForm;
