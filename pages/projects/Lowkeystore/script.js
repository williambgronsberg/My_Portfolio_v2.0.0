async function fetchPrintfulProducts() {
    const apiKey = 'adYdvx3C6UaLWXVo2fAmlc18CDMOPcbMzHzWCe9H'; // 🚨 Never expose in production!
    const url = 'https://api.printful.com/store/products';

    try {
        const response = await fetch(url, {
            headers: { 'Authorization': `Bearer ${apiKey}` }
        });

        const data = await response.json();
        console.log("API Response:", data); // ✅ Logs the response to check if it's working

        if (data.result) {
            displayProducts(data.result);
        } else {
            console.error('No products found:', data);
        }
    } catch (error) {
        console.error('Error fetching Printful products:', error);
    }
}

function displayProducts(products) {
    const container = document.getElementById('product-container');
    container.innerHTML = '';

    products.forEach(product => {
        console.log("Product:", product); // ✅ Check if each product exists

        const productElement = document.createElement('div');
        productElement.classList.add('product');

        productElement.innerHTML = `
            <img src="${product.thumbnail_url}" alt="${product.name}">
            <h3>${product.name}</h3>
        `;

        container.appendChild(productElement);
    });
}

// Fetch products when the page loads
fetchPrintfulProducts();
