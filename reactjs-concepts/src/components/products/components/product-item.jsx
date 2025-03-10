import React from 'react'

function ButtonComponent() {

    return <button>Click</button>;
}

const ProductItem = () => {
  return (
    <>
        <div>Product Item 1</div>
        <ButtonComponent />
    </>
  )
}

export default ProductItem