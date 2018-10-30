import React      from 'react';
import PropTypes  from 'prop-types';
// Componentes
import ExternalLink   from '../ExternalLink';
import {Link} from 'react-router-dom'
import { GoStar, GoRepoForked } from 'react-icons/go'
import GithubAvatar from '../GithubAvatar';

/**
 * Renderiza la información relativa a un repositorio
 */
class RepositoryRow extends React.PureComponent {
  /**
   * Props del componente
   */
  static propTypes = {
    repo: PropTypes.object.isRequired
  }

   /**
   * Render the RepositoryRow component
   */
  render() {
    let repo = this.props.repo;

    return <tr>
      <td>{ repo.full_name }</td>
      <td><GithubAvatar author={ repo.owner } /></td>
      <td><GoStar /> { repo.stargazers_count }</td>
      <td><GoRepoForked /> { repo.forks_count }</td>
      <td className="align-right">
        <Link className="button button-primary" to={ `/${repo.owner.login}/${repo.full_name}`}>Releases</Link>
      </td>
    </tr>
  }
}

// Export the class
export default RepositoryRow;
