import React      from 'react';
// Importamos los componentes
import Header     from '../../components/Header';
import SearchForm from '../../components/SearchForm'
import RepositoryList from '../../components/RepositoryList'

/**
 * Muestra un buscador, así como la lista de resultados.
 */
class SearchContainer extends React.Component {
  constructor(props) {
    super(props);

    //Binds
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      loading: false,
      results: [],
      search: '',
      queried: false
    }
  }
  /**
   * Datos falsos. Los utilizamos en desarrollo hasta que leamos los datos de
   * la API.
   */
  stubData() {
    let repo = {
        full_name: 'My Repository',
        owner: {
          login: 'Angel',
          avatar_url: 'https://avatars.githubusercontent.com/u/4056725?v=3',
          html_url: 'https://github.com/Angelmmiguel'
        },
        stargazers_count: 10,
        forks_count: 5
    }

    return [
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo)
    ]
  }

  onSubmit( value ) {
      this.setState({ loading: true, search: value});      
      
      setTimeout(() => {
          this.setState({ loading: false, queried: true, results: this.stubData(), search: value })
      }, 2000);
  }

  /**
   * Render the SearchContainer component
   */
  render() {
    return <section className="container">
              <h1>Búsqueda</h1>
              <SearchForm onSubmit={ this.onSubmit } search={ this.search }/>
              <RepositoryList data={this.state.results} loading={this.state.loading} queried={this.state.queried} search={this.state.search}/>
            </section>
  }
}

// Exportamos
export default SearchContainer;
