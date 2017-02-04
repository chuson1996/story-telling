import React, { Component, PropTypes } from 'react';
import { StaggeredMotion, spring } from 'react-motion';
import { MagicSpan as _MagicSpan, MagicSpanContainer } from '../UI';
import styled from 'styled-components';

const MagicSpan = styled(_MagicSpan)`
  transition: transform 1s;
`;

export default class MagicLines extends Component {
  static propTypes = {
    show: PropTypes.bool,
    lines: PropTypes.array,
    TextElement: PropTypes.any.isRequired
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.state = this.props.lines.map(() => ({ show: false }));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show) {
      this.timeouts = this.props.lines.map((_, i) => {
        return setTimeout(() => {
          this.setState({ [i]: { show: true } });
        }, i * 300);
      });
    } else {
      if (this.timeouts) this.timeouts.forEach(clearTimeout);

      this.setState(this.props.lines.map(() => ({ show: false })));
    }
  }

  render() {
    const { show, lines, TextElement } = this.props;

    return (
      <TextElement>
        {lines.map((line, i) =>
          <MagicSpanContainer key={i}>
            <MagicSpan y={(show && this.state[i].show) ? 0 : 39}>{line} </MagicSpan>
          </MagicSpanContainer>
        )}
      </TextElement>
    );

    // return (
    //   <StaggeredMotion
    //     defaultStyles={Array(lines.length).fill({ y: 39 })}
    //     styles={(styles) => styles.map((_, i) => {
    //       if (!show) return { y: spring(39) };

    //       return (i === 0) ?
    //         { y: spring(0) } :
    //         { y: styles[i - 1].y };
    //     })}
    //   >
    //     {(styles) => (
    //       <TextElement>
    //         {styles.map(({ y }, i) =>
    //           <MagicSpanContainer key={i}>
    //             <MagicSpan y={y}>{lines[i]} </MagicSpan>
    //           </MagicSpanContainer>
    //         )}
    //       </TextElement>
    //     )}
    //   </StaggeredMotion>
    // );
  };
}
