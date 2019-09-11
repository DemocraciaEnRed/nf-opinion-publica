import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, Link } from 'react-router'
import Jump from 'jump.js'
import userConnector from 'lib/site/connectors/user'
import Footer from 'ext/lib/site/footer/component'
import forumStore from '../../stores/forum-store/forum-store'
import ForumContainer from './forum-container/component'
import ForumCard from './forum-card/component'
import Search from './search/component'

class HomeMultiForum extends Component {
  constructor (props) {
    super(props)

    this.state = {
      page: 0,
      activeFilter: 'byDate',
      forums: []
    }
  }

  componentDidMount () {
    const {
      activeFilter
    } = this.state;

    forumStore
      .filterBy(activeFilter)
      .then((forums) => {
        this.setState({
          forums,
          showMore: forums.length === 3
        })
      })
      .catch(console.error)
  }

  handleClick = (name) => {
    const { page } = this.state;

    forumStore
      .filterBy(name)
      .then((forums) => {
        this.setState({
          page,
          forums,
          activeFilter: name
        })
      })
      .catch(err => console.error('este es el error', err))
  }

  handleMoreClick = () => {
    const {
      page,
      activeFilter
    } = this.state;

    forumStore
      .filterBy(activeFilter, page + 1)
      .then((forums) => {
        this.setState({
          page: this.state.page + 1,
          forums: [...this.state.forums, ...forums],
          showMore: forums.length === 10
        });
      })
      .catch(console.error)
  }

  handleButtonClick = () => {
    Jump('#consultas')
    // const consultasNode = ReactDOM.findDOMNode(this.refs.consultas)
    // window.scrollTo(0, consultasNode.offsetTop)
  }

  render () {
    if (this.props.user.state.pending) return null

    const {
      showMore,
      activeFilter,
      forums
    } = this.state

    return (
      <div className='ext-site-home-multiforum'>
        <section
          className='cover jumbotron'
          // style={{
          //   backgroundImage: `url('/ext/lib/site/home-multiforum/header_photo2.jpg')`,
 
          // }}>
          >
          <div className='jumbotron_body'>
            <div className='container'>
              <img
                src="/ext/lib/site/home-multiforum/logo-op.png"
                alt="Logo"
                width="270px"
              />
              <p className='lead highlight'>
              Juntos por una  ciudad más transparente y más justa.
              </p>
              <button
                className='btn btn-primary'
                onClick={this.handleButtonClick}
              >
                Quiero participar
              </button>
            </div>
          </div>
        </section>
        <div className='lead-paragraph'>
            <div className='container-paragraph'>
              <p>
              <span className="skyblue">Opinión Pública</span> es un canal de debate e intercambio entre la Fundación Confianza Pública y la comunidad, para promover
              la participación ciudadana, enriquecer buenas prácticas sobre integridad pública y llevar este conocimiento a todas las provincias de nuestro país.
                <br />
              </p>
          </div>
          <br />
          <p className="bold">
            Seguí estos pasos para participar y empezar a debatir
          </p>
        </div>
        <div className='container'>
        <div className='section-icons'>
            <div className='section-icon'>
              <div className="img-container">
                <img
                  className='icon'
                  src='/ext/lib/site/home-multiforum/informate.svg'
                  alt='Informate'
                />
              </div>
              <div className='text'>
                <h5>Informate</h5> <span className="epigraph">sobre las consultas disponibles</span>
              </div>
            </div>
            <div className='section-icon'>
              <div className="img-container">
                <img
                    className='icon'
                    src='/ext/lib/site/home-multiforum/participa.svg'
                    alt='Participá'
                  />
              </div>
              <div className='text'>
                <h5>Votá</h5> <span className="epigraph">en los ejes de las consultas</span>
              </div>
            </div>
            <div className='section-icon'>
              <div className="img-container">
              <img
                  className='icon'
                  src='/ext/lib/site/home-multiforum/vota.svg'
                  alt='Compartí'
                />
                </div>
              <div className='text'>
                <h5>Participá</h5> <span className="epigraph">con tu opinión. </span>
              </div>
            </div>
          </div>
        </div>
        <div className='lead-paragraph last col-md-4 offset-md-4 col-xs-12'>
          <i className='icon-arrow-down' onClick={this.handleButtonClick} />
        </div>

        <div className='container forums-list' id='consultas'>
          <h2 className='forums-list-title'>Conocé las consultas</h2>
          <div className="filter-container content-center">
            <div className="btn-group btn-group-sm dropdown-element" role="group" aria-label="Filtros">
            <button
                className={`btn dropbtn ${activeFilter === 'byDate' ? 'btn-active' : 'btn-secondary'}`}
                onClick={this.handleClick.bind(this, 'byDate')}
              >
              {(() => {
                switch(this.state.activeFilter) {
                  case 'byDate':
                    return  'Nuevas'
                  case 'byPopular':
                    return 'Relevantes'
                  case 'byClosed':
                    return 'Finalizadas'
                  }
              })()}
              </button>
            <ul className='dropdown-content'>
              <li
                className={`btn btn-item-dropdown ${activeFilter === 'byDate' ? 'btn-active' : 'btn-secondary'}`}
                onClick={this.handleClick.bind(this, 'byDate')}
              >
                Nuevas
              </li>
              <li
                className={`btn btn-item-dropdown ${activeFilter === 'byPopular' ? 'btn-active' : 'btn-secondary'}`}
                onClick={this.handleClick.bind(this, 'byPopular')}
              >
                Relevantes
              </li>
              <li
                className={`btn btn-item-dropdown ${activeFilter === 'byClosed' ? 'btn-active' : 'btn-secondary'}`}
                onClick={this.handleClick.bind(this, 'byClosed')}
              >
                Finalizadas
              </li></ul>
            </div>
          </div>
          {!forums.length && <h3 className="no-result">No hay resultados</h3>}

          <Search />

          {!!forums.length && forums.map((forum, key) => (
            <ForumContainer forum={forum} key={forum.id} />
          ))}
          {!!forums.length && showMore &&
            <div className='row content-center'>
              <button className="btn btn-active show-more" onClick={this.handleMoreClick}>
                Cargar mas consultas
              </button>
            </div>
          }
        </div>
        <Footer />
      </div>
    )
  }
}

export default userConnector(HomeMultiForum)