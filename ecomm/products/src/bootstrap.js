import faker from 'faker';


const mount = (el) => {
    let products = '';

    for (let i = 0; i < 5; i++) {
      const name = faker.commerce.productName();
      products += `<div>${name}</div>`;
    }
    // In React could be written as
    // ReactDOM.render(<App />, el)
    el.innerHTML = products
}

// Context Situation #1
// We are running this file in devlopment in isolation
// We are using our local index.html file
// Which DEFINETLY has an element with an id pf 'dev-products'
// We want to immediately render our app into that element

if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector("#dev-products")

    // Assuming our contianer doesnt have an element
    // with id 'dev-products'...
    if(el){
        // We are probably running in isolation
        mount(el)
    }
}

// Context Situation #2
// We are running this file in devlopment or production 
// through the container app
// No GUARANTEE that an element with an id of 'dev-products' exists
// We dont want to immediately render the app would lead to error
export { mount }