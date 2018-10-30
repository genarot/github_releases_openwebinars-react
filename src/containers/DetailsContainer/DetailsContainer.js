import React      from 'react';
import Header from '../../components/Header';
import ReleaseList from '../../components/ReleaseList/ReleaseList';
import PropTypes from 'prop-types';
// Componentes

/**
 * Este container muestra los detalles para un repositorio concreto
 */
class DetailsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
        releases: [],
        loading: false,
        repoName: null
    }
  }
  static propTypes = {
    // params:
    match: PropTypes.shape({
      params:  PropTypes.shape({
        user: PropTypes.string.isRequired,
        repo: PropTypes.string.isRequired
      })
    
    }) 
  }

  get repoName() {
    const {user, repo} = this.props.match.params;
    return `${user}/${repo}`;
  }
  stubData() {
    let repo = {
      name: 'v1.0',
      html_url: 'https://github.com/Angelmmiguel/material_icons/releases/tag/v2.2.0',
      author: {
        login: 'Angel',
        avatar_url: 'https://avatars.githubusercontent.com/u/4056725?v=3',
        html_url: 'https://github.com/Angelmmiguel'
      },
      published_at: 12018092381213,
      zipball_url: 'https://github.com/Angelmmiguel/material_icons/archive/v2.2.0.zip',
      tarball_url: 'https://github.com/Angelmmiguel/material_icons/archive/v2.2.0.tar.gz'
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

  componentDidMount() {
    this.setState({
      releases: this.stubData()
    })
  }
  /**
   * UI del contenedor
   */
  render() {
    console.log(this.props);
    return <main className="container">
            <h2>Releases for <b>{this.repoName }</b></h2>
            <ReleaseList data={this.state.releases} loading={this.state.loading} repoName={this.repoName}/>
          </main>;
  }
}

// Export the class
export default DetailsContainer;
