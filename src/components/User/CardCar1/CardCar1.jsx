import React from 'react'
import { ReactSmartScroller } from 'react-smart-scroller'

const renderImages = () => {
    const images = [
        'https://cdn.pixabay.com/photo/2019/06/02/00/46/chapel-4245437__340.jpg',
        'https://cdn.pixabay.com/photo/2017/08/22/22/36/cinque-terre-2670762__340.jpg',
        'https://cdn.pixabay.com/photo/2016/08/01/20/34/girl-1562091__340.jpg',
        'https://cdn.pixabay.com/photo/2013/09/26/23/23/glitter-powder-186829__340.jpg',
        'https://cdn.pixabay.com/photo/2019/04/11/09/50/wave-4119274__340.jpg'
    ]

    return images.map((image, index) => (
        <img
            key={index}
            src={image}
            style={{
                width: '50%',
                height: 300,
                objectFit: 'cover',
            }}
        />
    ))
}
export const Slider = () => (
  <ReactSmartScroller spacing={10} numCols={4} draggable>
      {renderImages()}
  </ReactSmartScroller>
)
export default Slider;



