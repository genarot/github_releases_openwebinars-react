import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './Paginator.css';


export default  ( PaginatedComponent )  => {

    class Paginator  extends Component{
        static propTypes = {
            itemsPerPage: PropTypes.number.isRequired,
            data:       PropTypes.arrayOf(PropTypes.object).isRequired
        }
    
        static defaultProps = {
            itemsPerPage: 8
        }
    
        constructor(props ) {
            super(props);
    
            //Binds
            this.onClick = this.onClick.bind(this);
        
            this.state = {
                page:0
            }
        }
    
        componentWillReceiveProps(nextProps) {
            //Tenemos que comprobar si los estados son distintos viendolos
            //por pantalla. si no, forzamos la pagina a 0
            let page = this.state.page;
            if ( nextProps.data.length /  this.props.itemsPerPage < page ) {
                page = 0;
            }
    
            //Comprobamos si ha cambiado algo
            if ( page !== this.state.page ) {
                //si cambio cambiamos el numero de pagina
                //asi evitamos renderizar
                this.setState = {page: page};
            }
    
        }
        onClick( e , page) {
            e.preventDefault();
    
            if ( page !== this.state.page ) {
                this.setState({page});
            }
        }
    
        renderPagination() {
            let numberPages = Math.ceil(this.props.data.length / this.props.itemsPerPage),
                pages = [];
            //Create Links
            if ( numberPages > 1) {
                for( let i = 0; i < numberPages; i++ ) {
                    //Podemos agregar elementos JSX  a nuestro Array. Recordad que 
                    //en ultima instancia, son llamados al metodo React.createElement
                    let cssClass = "Paginator_Page";
                    cssClass = i === this.state.page ? `${ cssClass } active` : cssClass;
    
                    // pages.push(
                    //     <a href="#" className={ cssClass} key={i} onClick={e => this.onClick(e, i)}>
                    //         { i + 1 }
                    //     </a>
                    // )
                }
            }
            //englibamos todos los elementos en uno 
            return (
                <div className="Paginator__Pagination">
                    { pages }
                </div>
            )
        }
    
        /**
         * Obtenemos los datos que hay que mostrar
         */
        pageData() {
            let data = [];
            
            if ( this.props.data.length > 0 ) {
                data    = this.props.data.slice( ( this.props.itemsPerPage * this.state.page), (this.state.page + 1) * this.props.itemsPerPage);
                
                console.log(( this.props.itemsPerPage * this.state.page), (this.state.page + 1) * this.props.itemsPerPage);
                
            }
            console.log('DAta:',data,data.length);
    
            return data;
        }
    
        render() {
            let newProps = Object.assign({}, this.props, {
                data: this.pageData()
            })
            

            return <div className="Paginator">
                        <PaginatedComponent { ...newProps } />
                        {this.renderPagination()}
                    </div>
        }
    }

    Paginator.WrappedComponent = PaginatedComponent;

    return Paginator;
}