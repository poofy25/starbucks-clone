import MenuSectionCategoryProduct from './MenuSectionCategoryProduct'

export default function MenuSectionCategorySection({ category }: { category: any }) {
  console.log(category)
  const products = category.products
  return (
    <div
      id={category.name}
      className="site-container flex flex-col gap-[50px] scroll-mt-[160px]
    "
    >
      {/* HEADER */}
      <div className="flex flex-col justify-center gap-[15px] items-center w-full">
        <h2
          className="text-[38px] font-[600] text-center
        mobile:text-[26px]
        "
        >
          {category.name}
        </h2>
        <p
          className="font-[400] text-center max-w-[50%]
        tablet:max-w-[75%]
        mobile:max-w-[100%]
        "
        >
          {category.description}
        </p>
      </div>
      {/* PRODUCTS */}
      <div
        className="
      flexgap-[20px]flex-wrap
      grid grid-cols-3 gap-[20px]
      tablet:grid-cols-2
      mobile:grid-cols-1
      
      "
      >
        {products &&
          products.map((product: any, index: number) => (
            <MenuSectionCategoryProduct productData={product} key={index} />
          ))}
      </div>
    </div>
  )
}
