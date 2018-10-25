import React      from 'react';
import Header from '../../components/Header';
import ReleaseList from '../../components/ReleaseList/ReleaseList';
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

  /**
   * UI del contenedor
   */
  render() {
    return <main className="container">
            <Header />
            <h2>Releases for <b>{this.repoName }</b></h2>
            <ReleaseList data={this.state.releases} loading={this.state.loading} repoName={this.repoName}/>
          </main>;
  }
}

// Export the class
export default DetailsContainer;
