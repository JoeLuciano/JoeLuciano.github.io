marked.setOptions({
  breaks: true });

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder,
      editorClass: "",
      previewClass: "" };

    this.handleChange = this.handleChange.bind(this);
    this.toggleEditor = this.toggleEditor.bind(this);
    this.togglePreview = this.togglePreview.bind(this);
  }

  handleChange(e) {
    this.setState({
      markdown: e.target.value });

  }
  toggleEditor() {
    if (this.state.editorClass == "") {
      this.setState({
        editorClass: "maximize",
        previewClass: "hide" });

    } else {
      this.setState({
        editorClass: "",
        previewClass: "" });

    }
  }
  togglePreview() {
    if (this.state.previewClass == "") {
      this.setState({
        editorClass: "hide",
        previewClass: "maximize" });

    } else {
      this.setState({
        editorClass: "",
        previewClass: "" });

    }
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { style: { margin: "0" } }, /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement("div", { id: "editor-preview-container" }, /*#__PURE__*/
      React.createElement(Editor, { markdown: this.state.markdown, class: this.state.editorClass, onChange: this.handleChange, toggle: this.toggleEditor }), /*#__PURE__*/
      React.createElement(Preview, { markdown: this.state.markdown, class: this.state.previewClass, toggle: this.togglePreview }))));


  }}


const Header = props => {
  return /*#__PURE__*/(
    React.createElement("div", { id: "header" }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("h1", null, " Markdown Preview "))));

};

const Editor = props => {
  let minMaxIcon = "";
  if (props.class == "") {
    minMaxIcon = "fas fa-expand";
  } else {
    minMaxIcon = "fas fa-compress";
  }
  return /*#__PURE__*/(
    React.createElement("div", { id: "editor-container", className: props.class }, /*#__PURE__*/
    React.createElement(Toolbar, { name: "Editor", icon: "fas fa-edit", minMax: minMaxIcon, onClick: props.toggle }), /*#__PURE__*/
    React.createElement("textarea", { id: "editor", onChange: props.onChange, value: props.markdown })));


};

const Preview = props => {
  let minMaxIcon = "";
  if (props.class == "") {
    minMaxIcon = "fas fa-expand";
  } else {
    minMaxIcon = "fas fa-compress";
  }
  return /*#__PURE__*/(
    React.createElement("div", { id: "preview-container", className: props.class }, /*#__PURE__*/
    React.createElement(Toolbar, { name: "Preview", icon: "fas fa-file-alt", minMax: minMaxIcon, onClick: props.toggle }), /*#__PURE__*/
    React.createElement("div", { id: "preview", dangerouslySetInnerHTML: {
        __html: marked(props.markdown, { renderer: renderer }) } })));



};

const Toolbar = props => {
  return /*#__PURE__*/(
    React.createElement("div", { id: "toolbar" }, /*#__PURE__*/
    React.createElement("h3", null, /*#__PURE__*/React.createElement("i", { className: props.icon }), " ", props.name), /*#__PURE__*/
    React.createElement("i", { id: "min-max", className: props.minMax, onClick: props.onClick })));


};


const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));

// document.getElementById('preview-min-max')
//   .addEventListener("click", ())