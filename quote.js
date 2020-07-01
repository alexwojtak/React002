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
        randomIndex: Math.floor(Math.random() * 25),
        userInput: ''
      });
    }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const quotesList = [["It was when I realized I needed to stop trying to be somebody else and be myself, I actually started to own, accept and love what I had.", "Tracee Ellis Ross"],["Don't settle for average. Bring your best to the moment. Then, whether it fails or succeeds, at least you know you gave all you had. We need to live the best that's in us", "Angela Bassett"], ["What I know for sure is that speaking your truth is the most powerful tool we all have." , "Oprah Winfrey"],
["If you prioritize yourself, you are going to save yourself.", "Gabrielle Union"],
["It is so liberating to really know what I want, what truly makes me happy, what I will not tolerate. I have learned that it is no one else's job to take care of me but me.", "Beyonce Carter Knowles"],
["My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.", "Maya Angelou"], ["I thrive on obstacles. If I'm told that it can't be told, then I push harder.", "Issa Rae"],
["I have standards I don't plan on lowering for anybody … including myself.", "Zendaya"],
["You may not always have a comfortable life and you will not always be able to solve all of the world's problems at once but don't ever underestimate the importance you can have because history has shown us that courage can be contagious and hope can take on a life of its own.", "Michelle Obama"],
["If you know you are on the right track, if you have this inner knowledge, then nobody can turn you off... no matter what they say.", "Barbara McClintock"],
["Certain people – men, of course – discouraged me, saying science was not a good career for women. That pushed me even more to persevere.", "Francoise Barre"],
["Science, for me, gives a partial explanation for life. In so far as it goes, it is based on fact, experience and experiment.", "Rosalind Franklin"], ["Let us choose for ourselves our path in life, and let us try to strew that path with flowers.", "Emilie du Chatelet"],
["Don't let anyone rob you of your imagination, your creativity, or your curiosity. It's your place in the world; it's your life. Go on and do all you can with it, and make it the life you want to live.", "Dr. Mae Jemison"],
["I was taught that the way of progress was neither swift nor easy.", "Marie Curie"],
["Life need not be easy, provided only that it is not empty.", "Lisa Meitner"],
["We are showing people that engineering isn’t just the physics of how a transistor works. It’s using the technology, and being creative with it, and solving problems that people have or creating something beautiful with it. And I think that’s opening up engineering to a whole new group of people that maybe never would have thought that engineering was for them.", "Limor Fried"],
["Humans are allergic to change. They love to say, ‘We’ve always done it this way.’ I try to fight that. That’s why I have a clock on my wall that runs counterclockwise.", "Grace Hopper"],
["They never asked me to go back over my calculations because when I did it, I had done my best, and it was right.", "Katherine Johnson"],
["When I first started using the phrase software engineering, it was considered to be quite amusing. They used to kid me about my radical ideas. Software eventually and necessarily gained the same respect as any other discipline.", "Margaret Hamilton"],
["When I started my career at the Bar, I did not look or sound like what my clients expected. I had to prove myself continuously, which was difficult but ultimately useful as it meant that I always had to be at the top of my game.", "Janet Oganah"],
["We need to understand that if we all work on inclusion together, it’s going to be faster, broader, better, and more thorough than anything we can do on our own.", "Ellen Pao"], ["Theoretically, I have no business starting an organization called Girls Who Code, because I don’t code … When I first started, I wasn’t intending to build a movement. I was planning to do one summer program to see what we could do differently to get more girls in technology.", "Reshma Saujani"],
["The quality, relevance, and impact of the products and services output by the technology sector can only be improved by having the people who are building them be demographically representative of the people who are using them.", "Tracy Chou"],
["It’s not enough to be aware of the possibilities. You have to believe that your goals are attainable. First, can you see yourself, picture yourself as an engineer? I strongly believe that belief in yourself stems from belief in your role models.", "Alisha Ramos"],
["The world would be a better place if more engineers, like me, hated technology. The stuff I design, if I’m successful, nobody will ever notice. Things will just work, and be self-managing.,", "Radia Pearlman"]];
    const answer = quotesList[this.state.randomIndex][0];
    const author = quotesList[this.state.randomIndex][1];
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
        randomIndex: Math.floor(Math.random() * 25),
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
      var quotesList = [["It was when I realized I needed to stop trying to be somebody else and be myself, I actually started to own, accept and love what I had.", "Tracee Ellis Ross"], ["Don't settle for average. Bring your best to the moment. Then, whether it fails or succeeds, at least you know you gave all you had. We need to live the best that's in us", "Angela Bassett"], ["What I know for sure is that speaking your truth is the most powerful tool we all have.", "Oprah Winfrey"], ["If you prioritize yourself, you are going to save yourself.", "Gabrielle Union"], ["It is so liberating to really know what I want, what truly makes me happy, what I will not tolerate. I have learned that it is no one else's job to take care of me but me.", "Beyonce Carter Knowles"], ["My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.", "Maya Angelou"], ["I thrive on obstacles. If I'm told that it can't be told, then I push harder.", "Issa Rae"], ["I have standards I don't plan on lowering for anybody … including myself.", "Zendaya"], ["You may not always have a comfortable life and you will not always be able to solve all of the world's problems at once but don't ever underestimate the importance you can have because history has shown us that courage can be contagious and hope can take on a life of its own.", "Michelle Obama"], ["If you know you are on the right track, if you have this inner knowledge, then nobody can turn you off... no matter what they say.", "Barbara McClintock"], ["Certain people – men, of course – discouraged me, saying science was not a good career for women. That pushed me even more to persevere.", "Francoise Barre"], ["Science, for me, gives a partial explanation for life. In so far as it goes, it is based on fact, experience and experiment.", "Rosalind Franklin"], ["Let us choose for ourselves our path in life, and let us try to strew that path with flowers.", "Emilie du Chatelet"], ["Don't let anyone rob you of your imagination, your creativity, or your curiosity. It's your place in the world; it's your life. Go on and do all you can with it, and make it the life you want to live.", "Dr. Mae Jemison"], ["I was taught that the way of progress was neither swift nor easy.", "Marie Curie"], ["Life need not be easy, provided only that it is not empty.", "Lisa Meitner"], ["We are showing people that engineering isn’t just the physics of how a transistor works. It’s using the technology, and being creative with it, and solving problems that people have or creating something beautiful with it. And I think that’s opening up engineering to a whole new group of people that maybe never would have thought that engineering was for them.", "Limor Fried"], ["Humans are allergic to change. They love to say, ‘We’ve always done it this way.’ I try to fight that. That’s why I have a clock on my wall that runs counterclockwise.", "Grace Hopper"], ["They never asked me to go back over my calculations because when I did it, I had done my best, and it was right.", "Katherine Johnson"], ["When I first started using the phrase software engineering, it was considered to be quite amusing. They used to kid me about my radical ideas. Software eventually and necessarily gained the same respect as any other discipline.", "Margaret Hamilton"], ["When I started my career at the Bar, I did not look or sound like what my clients expected. I had to prove myself continuously, which was difficult but ultimately useful as it meant that I always had to be at the top of my game.", "Janet Oganah"], ["We need to understand that if we all work on inclusion together, it’s going to be faster, broader, better, and more thorough than anything we can do on our own.", "Ellen Pao"], ["Theoretically, I have no business starting an organization called Girls Who Code, because I don’t code … When I first started, I wasn’t intending to build a movement. I was planning to do one summer program to see what we could do differently to get more girls in technology.", "Reshma Saujani"], ["The quality, relevance, and impact of the products and services output by the technology sector can only be improved by having the people who are building them be demographically representative of the people who are using them.", "Tracy Chou"], ["It’s not enough to be aware of the possibilities. You have to believe that your goals are attainable. First, can you see yourself, picture yourself as an engineer? I strongly believe that belief in yourself stems from belief in your role models.", "Alisha Ramos"], ["The world would be a better place if more engineers, like me, hated technology. The stuff I design, if I’m successful, nobody will ever notice. Things will just work, and be self-managing.,", "Radia Pearlman"]];
      var answer = quotesList[this.state.randomIndex][0];
      var author = quotesList[this.state.randomIndex][1];
      return React.createElement("div", null, React.createElement("button", {
        onClick: this.ask
      }, "Get a random quote"), React.createElement("br", null), React.createElement("h3", null, "Quote"), React.createElement("p", null, answer, React.createElement("br", null), author));
    }
  }]);

  return QuoteGenerator;
}(React.Component);

;
ReactDOM.render(React.createElement(QuoteGenerator, null), document.getElementById('challenge-node'));