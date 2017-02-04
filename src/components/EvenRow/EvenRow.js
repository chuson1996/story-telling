import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { Square as _Square, MagicLines } from '..';
import { BreakParagraph } from 'react-break-paragraph';
import c from 'classnames';
import { Motion, spring } from 'react-motion';

import {
  MagicSpan,
  MagicSpanContainer,
  MagicText,
  MagicTextContainer
} from '../UI';


const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 21px;
  width: calc(100vw - 220px);
  padding-left: 50px;
  margin-bottom: 200px;
`;

const LeftBox = styled.div`
  width: 440px;
  z-index: 1;
  overflow-x: hidden;
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
`;

const LeftBoxForSquare = styled(LeftBox)`
  overflow-x: initial;
  position: absolute;
  z-index: 2;
  cursor: pointer;
  height: ${({ height }) => `${height}px` || 'auto'};
`;

const Square = styled(_Square)`
  transform: translate(20px, -50%);
  width: 50px;
  height: 50px;
`;

const CenterBox = styled.div`
  width: calc(100% - 440px);
`;

const H1 = styled.h1`
  font-size: 4em;
  margin-top: 0;
  text-align: right;
  width: 500px;
  transform: translateX(-${200}px);
`;

const LeftBoxH1 = styled(H1)`
  transform: translateX(${440 - 200}px);
  color: rgb(241, 228, 117);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`;

const ImageContainer = styled.div`
  width: 100%;
  z-index: -1;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
`;

const Quote = styled.p`
  width: 80%;
  padding-left: 50px;
`;

const RightBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 40px;
  width: 200px;
`;

export default class EvenRow extends Component {
  static propTypes = {
    number: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    quote: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array
    ]).isRequired,
    show: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      imageHeight: 0,
      moveImageDown: 0,
      imageTopOffset: 0
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const moveImageDown = Math.min(
      50,
      Math.max(
        -50,
        (this.state.imageTopOffset - window.scrollY) / 10
      )
    );
    this.setState({
      moveImageDown
    });
  };

  onMouseOver = () => {
    this.setState({
      hover: true
    });
  };

  onMouseLeave = () => {
    this.setState({
      hover: false
    });
  };

  setImageHeight = (e) => {
    this.setState({
      imageHeight: e.target.offsetHeight
    });
  };

  onImageLoad = (e) => {
    this.setImageHeight(e);
  }

  setImageOffsetTop = (elem) => {
    setTimeout(() => {
      this.setState({
        imageTopOffset: elem.getBoundingClientRect().top + window.scrollY
      });
    });
  };

  renderLines = (lines) => {
    const { show } = this.props;
    return (<MagicLines
      lines={lines}
      show={show}
      TextElement={Quote}
    />);
  };

  render() {
    const {
      number,
      headline,
      imgSrc,
      quote,
      show
    } = this.props;

    const _quote = Array.isArray(quote) ? quote : [quote];

    return (
      <Container>
        <LeftBoxForSquare
          height={293}
          onMouseOver={this.onMouseOver}
          onMouseLeave={this.onMouseLeave}>
          <Square className={c({ hover: this.state.hover })}/>
        </LeftBoxForSquare>
        <LeftBox>
          <LeftBoxH1>{headline}</LeftBoxH1>
          <ImageContainer>
            <div ref={this.setImageOffsetTop}></div>
            <Motion style={{ moveDown: spring(this.state.moveImageDown) }}>
              {({ moveDown }) =>
                <Image
                  style={{
                    transform: `scale(1.5) translate(0, ${(moveDown || 0) - this.state.imageHeight * 0.25}px)`
                  }}
                  onLoad={this.onImageLoad}
                  src={imgSrc}
                  moveDown={moveDown}
                  alt=""/>
              }
            </Motion>
          </ImageContainer>
        </LeftBox>
        <CenterBox>
          <H1>{headline}</H1>
          {_quote.map((q, i) =>
            <BreakParagraph
              key={i}
              renderPlaceholder={(children) => <Quote>{children}</Quote>}
              renderLines={this.renderLines}
              paragraph={q}
            />
          )}
        </CenterBox>
        <RightBox>
          <MagicTextContainer>
            <MagicText show={show}>{number}</MagicText>
          </MagicTextContainer>
        </RightBox>
      </Container>
    );
  }
}
