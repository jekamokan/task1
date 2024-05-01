import React, { useState } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import galleryBlack from '../../img/galleryBlack.jpeg';
import galleryGrey from '../../img/galleryGrey.jpeg';
import galleryWhite from '../../img/galleryWhite.jpeg';
import './style.css';

const Gallery = ({ setSelectedImage }) => {
    const [activeImage, setActiveImage] = useState('white');

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setActiveImage(image);
    };

    return (
        <div className='gallery'>
            <Tooltip.Provider>
                <Tooltip.Root>
                    <Tooltip.Portal>
                        <Tooltip.Content>
                            White
                            <Tooltip.Arrow />
                        </Tooltip.Content>
                    </Tooltip.Portal>
                    <Tooltip.Trigger>
                        <img
                            id='gallery__img'
                            src={galleryWhite}
                            alt="white-t-shirt"
                            className={activeImage === 'white' ? 'active' : ''}
                            onClick={() => handleImageClick('white')}
                        />
                    </Tooltip.Trigger>
                </Tooltip.Root>
            </Tooltip.Provider>

            <Tooltip.Provider>
                <Tooltip.Root>
                    <Tooltip.Portal>
                        <Tooltip.Content>
                            Black
                            <Tooltip.Arrow />
                        </Tooltip.Content>
                    </Tooltip.Portal>
                    <Tooltip.Trigger>
                        <img
                            id='gallery__img'
                            src={galleryBlack}
                            alt="black-t-shirt"
                            className={activeImage === 'black' ? 'active' : ''}
                            onClick={() => handleImageClick('black')}
                        />
                    </Tooltip.Trigger>
                </Tooltip.Root>
            </Tooltip.Provider>

            <Tooltip.Provider>
                <Tooltip.Root>
                    <Tooltip.Portal>
                        <Tooltip.Content>
                            Grey
                            <Tooltip.Arrow />
                        </Tooltip.Content>
                    </Tooltip.Portal>
                    <Tooltip.Trigger>
                        <img
                            id='gallery__img'
                            src={galleryGrey}
                            alt="grey-t-shirt"
                            className={activeImage === 'grey' ? 'active' : ''}
                            onClick={() => handleImageClick('grey')}
                        />
                    </Tooltip.Trigger>
                </Tooltip.Root>
            </Tooltip.Provider>
        </div>
    )
}

export default Gallery;
