/* const h1 = React.createElement('h1',{
children:['Hello World!']
});
const p = React.createElement('p',{
children:['MapsaHR...']
});
const div = React.createElement('div',{
    children: [h1,p]
});
ReactDOM.render(div,document.getElementById('app'));  */

/* function createElement(type,props,...children){
    Type = type;
    Props = props;
    Children =children;} */
    function createElement (type,props, ...children){
        const element= document.createElement(type);
        let{style,className,children:propschildren, ...attributes}= props;
        if(children.length)propschildren = children;
        if(style){
         Object.entries(style).forEach(([name,value]) => { 
            Element.style[name]=value;

        });
        }
        Object.entries(attributes).forEach(([name,value]) => { 
            Element.setAttributes(name,value);
        });
        if(className){
            element.className=className;
        };
        propschildren.forEach((node)=>{element.append(node);})
        return element;
            
        }
        const MyReact={
            ceeateElement,
        };
        window.MyReact = MyReact;