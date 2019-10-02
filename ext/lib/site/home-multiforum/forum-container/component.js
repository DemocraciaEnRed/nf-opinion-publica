import React from 'react'
import { Link } from 'react-router'
import CardsSlider from 'ext/lib/site/cards-slider/component'
import ForumCard from '../forum-card/component'
import urlBuilder from 'lib/url-builder'

const contentTypesMapper = {
  'ejes': 'Los ejes ',
  'propuestas': 'Las propuestas '
} 


export default ({ forum }) => 
( 
  <div className='container forum-card-container'>
    <ForumCard forum={forum} />
    <div className='forum-slider-wrapper'>
      <h4 className='forum-slider-title'>

       {/*
        
        forum.extra.contentType === 'ejes' && 'Los ejes '
      }
      {
        forum.extra.contentType === undefined && 'Los ejes '
      }
      {
        forum.extra.contentType === 'propuestas' && 'Las propuestas '        
      } */}
      {contentTypesMapper[forum.extra.contentType] || 'Los ejes '}
      que comprenden esta consulta son:</h4>
      <CardsSlider forum={forum} />
      <div className="btn-mobile">
        <Link to={urlBuilder.for('site.forum', { forum: forum.name })}>
            <button className='btn btn-link' >
              Ver más información
            </button>
          </Link>
      </div>
    </div>
  </div>
)
