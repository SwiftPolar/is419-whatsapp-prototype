import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import 'semantic-ui-react/dist/semantic.min.css';
import Slider from 'react-slick';
import Lightbox from 'react-image-lightbox';

import '../style/slick.min.css';
import '../style/slick-theme.min.css';

export default class ImageGallery extends Component {
    constructor(props) {
        super(props);
        let {images, date} = props;
        
        this.state = {
            images: images ? images : [],
            date: date ? date : new Date(),
            photoIndex: 0,
            photoOpen: false
        };
    }

    componentWillReceiveProps(nextProps) {
        let {images, date} = nextProps;
        this.setState({
            images: images,
            date: date 
        });
    }

    getImages() {
        let {images, date} = this.state;
        let results = [];
        let count = 0;

        images.map((img) => {
            const i = count;
            results.push(
                <div style={{padding: '5px', height: window.innerHeight / 5, overflow: 'hidden'}} key={date + '-image-' + count}>
                    <Image style={{width: '100%'}} src={img} onClick={() => {this.setState({photoOpen: true, photoIndex: i})}} />
                </div>
            );
            count++;
        });

        return results;
    }

    render() {
        const settings = {
            vertical: false,
            arrows: false,
            autoplay: false,
            slidesToShow: 2,
        }

        const {images, photoIndex, photoOpen} = this.state;

        const getLightbox = () => {
            return photoOpen ? (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}

                    onCloseRequest={() => this.setState({ photoOpen: false })}
                    onMovePrevRequest={() => this.setState({
                        photoIndex: (photoIndex + images.length - 1) % images.length,
                    })}
                    onMoveNextRequest={() => this.setState({
                        photoIndex: (photoIndex + 1) % images.length,
                    })}
                />
            ) : "";
        }

        return (
            <div>
                <Slider {...settings}>
                    {this.getImages()}
                </Slider>
                {getLightbox()}
            </div>
        )
    }
}