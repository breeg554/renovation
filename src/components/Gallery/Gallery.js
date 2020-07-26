import React, { Component } from "react"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css" //   Copyright (c) 2016 Chris Fritz
import styled from "styled-components"
import { Title } from "../SectionTitle"
import Client from "./Contentful"

const Wrapper = styled.section`
  width: 100%;
  padding: 1.5em 0.5em;
  overflow: hidden;

  ${({ theme }) => theme.mediaQ.medium} {
    padding: 5.5em 0.5em;
  }
`

const GalleryImg = styled.div`
  position: relative;

  overflow: hidden;
  width: 100%;
  height: 40vh;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  span {
    width: 80%;
    text-align: center;
    position: absolute;
    z-index: 1;
    top: 90%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: top 0.1s ease-in-out, opacity 0.1s ease-in-out;
    color: #fff;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateY(80%);
    transition: transform 0.2s ease-in-out;
    background: linear-gradient(
      0deg,
      rgba(62, 57, 57, 0.8) 0%,
      rgba(62, 57, 57, 0.4) 26%,
      rgba(62, 57, 57, 0.01) 89%
    );
  }
  &:hover::after {
    transform: translateY(0);
  }
  &:hover span {
    opacity: 1;
    top: 75%;
  }
  ${({ theme }) => theme.mediaQ.small} {
    height: 20vh;
  }
  ${({ theme }) => theme.mediaQ.medium} {
    height: 20vh;
    span {
      width: 90%;
    }
    &:hover span {
      top: 65%;
    }
  }
  ${({ theme }) => theme.mediaQ.big} {
    height: 30vh;
    &:hover span {
      top: 80%;
    }
  }
  @media (max-height: 500px) {
    height: 170px;
  }
`
const ImgWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 0.5em;
  max-width: 1200px;
  margin: 0 auto;

  ${({ theme }) => theme.mediaQ.small} {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 0.5em;
  }
  ${({ theme }) => theme.mediaQ.medium} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  ${({ theme }) => theme.mediaQ.big} {
    grid-column-gap: 1em;
    grid-row-gap: 1em;
  }
`
const ErrorProjects = styled.p`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`
export default class Gallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [],
      photoIndex: 0,
      isOpen: false,
    }
  }
  formatData = data => {
    const project = { ...data, src: data.src.fields.file.url }
    return project
  }
  getData = () => {
    try {
      Client.getEntries({
        content_type: "projects",
      })
        .then(res => {
          if (res.items) {
            return res.items
          } else {
            throw new Error("contentful err")
          }
        })
        .then(res => {
          this.setState({
            images: res.map(field => this.formatData(field.fields)),
          })
        })
    } catch (err) {
      console.log(err)
    }
  }
  createImages = () => {
    const { images } = this.state

    return images.map((img, index) => (
      <GalleryImg
        key={index}
        id={index}
        onClick={() => {
          this.setState({ photoIndex: index, isOpen: true })
        }}
      >
        <img src={img.src} alt={img.alt} />
        <span>{img.about}</span>
      </GalleryImg>
    ))
  }

  componentDidMount() {
    this.getData()
  }
  render() {
    const { photoIndex, isOpen, images } = this.state
    const tmpGalleryImages = this.createImages()
    return (
      <Wrapper id="gallery">
        <Title>Ostatnie Projekty</Title>
        <ImgWrapper>
          {images.length > 0 ? (
            tmpGalleryImages
          ) : (
            <ErrorProjects>Brak projektów</ErrorProjects>
          )}
        </ImgWrapper>
        {/* Copyright (c) 2016 Chris Fritz */}
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
      </Wrapper>
    )
  }
}
