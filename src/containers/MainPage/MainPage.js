import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import {
  Square as _Square,
  OddRow,
  EvenRow,
  ShowOrHide
} from '../../components';

export default class MainPage extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        {/* <video width="320" height="240" controls>
          <source src={require('./StreetPainter.mp4')} type="video/mp4"/>
          Your browser does not support the video tag.
        </video> */}
        <ShowOrHide>
          {({ show }) =>
            <OddRow
              show={show}
              number="01"
              headline="School Yourself"
              quote="You have to be curious about the world in which you live. Look things up. Chase down every reference. Go deeper than anybody else - that’s how you’ll get ahead."
              imgSrc={require('./drawing_small.jpg')}
            />
          }
        </ShowOrHide>
        <ShowOrHide>
          {({ show }) =>
            <EvenRow
              number="02"
              headline="Geography is no longer our master"
              quote="If you’re not into the world you live in, you can build your own world around you. Surround yourself with books and objects that you love. Tape things up on the wall. Create your own world."
              imgSrc={require('./geography_small.jpg')}
              show={show}
            />
          }
        </ShowOrHide>
        <ShowOrHide>
          {({ show }) =>
            <OddRow
              imageWidth={60}
              mainBoxWidth={800}
              number="03"
              headline="Fake it till you make it"
              quote={[
                "1. Pretend to be something you’re not until you are - fake it until you’re successful, until everybody sees you the way you want them to; or",
                "2. Pretend to be making something until you actually make something."
              ]}
              imgSrc={require('./violin_small.jpg')}
              show={show}
            />
          }
        </ShowOrHide>
      </div>
    );
  }
}
