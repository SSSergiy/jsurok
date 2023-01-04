import React from "react";

type SmilesProps = {};
type SmilesState = {
  thumbsUp: number;
  thumbDown: number;
  heart: number;
  fecalMass: number;
  smile: number;
};

class Smiles extends React.Component<SmilesProps, SmilesState> {
  constructor(props: any) {
    super(props);
    this.plusThumbsUp = this.plusThumbsUp.bind(this);
    this.plusThumbDown = this.plusThumbDown.bind(this);
    this.plusHeart = this.plusHeart.bind(this);
    this.plusFecalMass = this.plusFecalMass.bind(this);
    this.plusSmile = this.plusSmile.bind(this);
    this.state = {
      thumbsUp: 0,
      thumbDown: 0,
      heart: 0,
      fecalMass: 0,
      smile: 0,
    };
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="container">
            <div>
              <button onClick={this.plusThumbsUp}>👍</button>
              <div className="counter">{this.state.thumbsUp}</div>
            </div>
            <div>
              <button onClick={this.plusThumbDown}>👎</button>
              <div className="counter">{this.state.thumbDown}</div>
            </div>
            <div>
              <button onClick={this.plusHeart}>💚</button>
              <div className="counter">{this.state.heart}</div>
            </div>
            <div>
              <button onClick={this.plusFecalMass}>💩</button>
              <div className="counter">{this.state.fecalMass}</div>
            </div>
            <div>
              <button onClick={this.plusSmile}>🤣</button>
              <div className="counter">{this.state.smile}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
  plusThumbsUp() {
    this.setState({ thumbsUp: this.state.thumbsUp + 1 });
  }
  plusThumbDown() {
    this.setState({ thumbDown: this.state.thumbDown + 1 });
  }
  plusSmile() {
    this.setState({ smile: this.state.smile + 1 });
  }
  plusFecalMass() {
    this.setState({ fecalMass: this.state.fecalMass + 1 });
  }
  plusHeart() {
    this.setState({ heart: this.state.heart + 1 });
  }
}
export default Smiles;
