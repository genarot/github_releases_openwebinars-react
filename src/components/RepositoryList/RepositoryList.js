import React      from 'react';
import RepositoryRow from '../RepositoryRow';
import PropTypes  from 'prop-types';
import HintMessage from '../HintMessage';
import Paginator from  '../Paginator';
/**
 * Muestra los repositorios en una lista.
 */
class RepositoryList extends React.PureComponent {
  /**
   * Render the RepositoryList component
   */
  // constructor(props ) {
  //   super(props)
  //   this.renderMessage =  this.renderMessage.bind(this);
  // }
  static propTypes = {
        data: PropTypes.arrayOf( PropTypes.object).isRequired,
        loading:    PropTypes.bool.isRequired,
        queried:    PropTypes.bool.isRequired,
        search:     PropTypes.string.isRequired
      }

    renderMessage() {
      let text = "", l = this.props.data.length;
      console.log('Render message');
      
      if ( this.props.loading ) {
          text  = <span>Searching results for <b>{this.props.search }</b></span>
      } else if ( l > 0 ) {
          text = <span>We found <b>{ l }</b> repositories for <b>{this.props.search }</b></span>
      } else if (l === 0 && this.props.queried ) {
          //si el resultado es 0  y ya se habia realizado busqueda
          text = <span>
                  We could't find any repositories matching <b>{ this.props.search }</b>. Try another terms please.
                </span>;
      } else {
          text = 'Type the name of a repository and click search';
      }
  
      // return p
      return <HintMessage>{ text }</HintMessage>
    }

    renderTable() {
      if ( this.props.data.length === 0 ) {return null;}
      console.log(this.props);
      
      return  <table className="u-full-width">
                <thead>
                    <tr>
                        <th>Repository</th>
                        <th>Owner</th>
                        <th>stars</th>
                        <th>Forks</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.data.map( (repo, index) => <RepositoryRow repo={repo} key={index}/> )}
                </tbody>
              </table>
    }
    render() {
      return <section className="RepositoryList">
            <h1>RepositoryList</h1>
            { this.renderMessage() }
            { this.renderTable()  }
          </section>;
    }
}

// Export the class
export default Paginator(RepositoryList);
