import React from 'react';
import PropTypes from 'prop-types';

/**
 * Muestra un link que se abrirá en una nueva página
 */
class ExternalLink extends React.PureComponent {
  /**
   * Props del componente
   */
  static propTypes = {
    to: PropTypes.string.isRequired,
    //El hijo debe ser o un string, nodo o elemento
    children: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.node,
                PropTypes.element
              ]).isRequired,
    className: PropTypes.string
  };

  // Por defecto, el link no tiene ninguna clase
  static defaultProps = {
    className: ''
  }

  /**
   * Renderizamos el link
   */
  render() {
    return <a href={ this.props.to } className={ this.props.className }
      rel="noopener noreferrer" target="_blank">
      { this.props.children }
    </a>;
  }
}

// Export the class
export default ExternalLink;
