/*
Untranspiled code:
const inputStyle = {
  width: 235,
  margin: 5
}

class QuoteGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: 6
    }
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    
      this.setState({
        randomIndex: Math.floor(Math.random() * 7),
        userInput: ''
      });
    }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const quotesList = [["I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", "Marilyn Monroe"],["Be yourself; everyone else is already taken.", "Oscar Wilde"], ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "Albert Einstein"], ["A room without books is like a body without a soul.", "Marcus Tullius Cicero"], ["You only live once, but if you do it right, once is enough.", "Mae West"], ["If you tell the truth, you don't have to remember anything.", "Mark Twain"], ["Always forgive your enemies; nothing annoys them so much.", "Oscar Wilde"], ["Live as if you were to die tomorrow. Learn as if you were to live forever.", "Mahatma Gandhi"]];
    const answer = quotesList[this.state.randomIndex][0];
    const author = quotesList[this.state.randomIndex][1];// << change code here
    return (
      <div>
        <button onClick={this.ask}>
          Get a random quote
        </button><br />
        <h3>Quote</h3>
        <p>
          {answer}<br/>
          {author}
        </p>
      </div>
    );
  }
};
ReactDOM.render(<QuoteGenerator />, document.getElementById('challenge-node')); */

"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var inputStyle = {
  width: 235,
  margin: 5
};

var QuoteGenerator =
/*#__PURE__*/
function (_React$Component) {
  _inherits(QuoteGenerator, _React$Component);

  function QuoteGenerator(props) {
    var _this;

    _classCallCheck(this, QuoteGenerator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(QuoteGenerator).call(this, props));
    _this.state = {
      userInput: '',
      randomIndex: 6
    };
    _this.ask = _this.ask.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(QuoteGenerator, [{
    key: "ask",
    value: function ask() {
      this.setState({
        randomIndex: Math.floor(Math.random() * 7),
        userInput: ''
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        userInput: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var quotesList = [["I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", "Marilyn Monroe"], ["Be yourself; everyone else is already taken.", "Oscar Wilde"], ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "Albert Einstein"], ["A room without books is like a body without a soul.", "Marcus Tullius Cicero"], ["You only live once, but if you do it right, once is enough.", "Mae West"], ["If you tell the truth, you don't have to remember anything.", "Mark Twain"], ["Always forgive your enemies; nothing annoys them so much.", "Oscar Wilde"], ["Live as if you were to die tomorrow. Learn as if you were to live forever.", "Mahatma Gandhi"]];
      var answer = quotesList[this.state.randomIndex][0];
      var author = quotesList[this.state.randomIndex][1]; // << change code here

      return React.createElement("div", null, React.createElement("button", {
        onClick: this.ask
      }, "Get a random quote"), React.createElement("br", null), React.createElement("h3", null, "Quote"), React.createElement("p", null, answer, React.createElement("br", null), author));
    }
  }]);

  return QuoteGenerator;
}(React.Component);

;
ReactDOM.render(React.createElement(QuoteGenerator, null), document.getElementById('challenge-node'));