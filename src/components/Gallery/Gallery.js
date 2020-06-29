import React, { Component } from "react"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css" // This only needs to be imported once in your app
import styled from "styled-components"
import img1 from "../../images/slider/1.jpg"
import img2 from "../../images/slider/2.jpg"
import img3 from "../../images/slider/3.jpg"
import img4 from "../../images/slider/4.jpg"
import img5 from "../../images/slider/5.jpg"
const Wrapper = styled.div`
  width: 100px;
  height: 50px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const images = [
  { id: 0, src: img1 },
  { id: 1, src: img2 },
  { id: 2, src: img3 },
  { id: 3, src: img4 },
  { id: 4, src: img5 },
]

export default class Gallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photoIndex: 0,
      isOpen: false,
    }
  }

  render() {
    const { photoIndex, isOpen } = this.state
    const galleryImages = images.map((img, index) => (
      <Wrapper key={index} id={index}>
        <img
          src={img.src}
          onClick={() => {
            this.setState({ photoIndex: img.id, isOpen: true })
          }}
        />
      </Wrapper>
    ))
    return (
      <div>
        {galleryImages}
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex].src}
            nextSrc={images[(photoIndex + 1) % images.length].src}
            prevSrc={
              images[(photoIndex + images.length - 1) % images.length].src
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    )
  }
}
