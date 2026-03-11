import React from 'react';

interface Props {
    image?: string;
    video?: string;
    mobileImage?: string;
}

export default function MediaContent({ image, video }: Props) {
    return video ? (
        <video
            key={video}
            style={{ maxHeight: '85vh', maxWidth: '90vw', width: '100%', objectFit: 'contain' }}
            typeof="video/mp4"
            controls
            autoPlay
        >
            <source src={video} />
        </video>
    ) : (
        
        <img
            key={image}
            src={image}
            alt="img_project"
            style={{ objectFit: 'contain', height: '100%', width: '100%' }}
        />
    );
}
