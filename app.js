const heading = React.createElement("div",
    {id:'parent'},
    React.createElement("div",
        {id:'child'},
        [React.createElement("h1",
            {id:'heading'},
            "Hello world from react"),React.createElement("h2",{id:'heading2'},"Hello world from react2")]));
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading)